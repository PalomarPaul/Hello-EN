const Progress = (() => {
  const STORAGE_KEY = 'hello_en_progress';

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : getDefault();
    } catch {
      return getDefault();
    }
  }

  function getDefault() {
    return {
      modules: {},
      errors: [],
      completedExercises: {},
      sessions: [],
      lastModule: null,
      startDate: new Date().toISOString(),
      totalAnswers: 0,
      correctAnswers: 0,
      currentStreak: 0,
      bestStreak: 0,
      lastStudyDate: null
    };
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  function getProgress() {
    return load();
  }

  function markModuleComplete(moduleId) {
    const data = load();
    data.modules[moduleId] = {
      ...(data.modules[moduleId] || {}),
      completed: true,
      completedAt: new Date().toISOString()
    };
    data.lastModule = moduleId;
    save(data);
  }

  function getModuleProgress(moduleId) {
    const data = load();
    return data.modules[moduleId] || { completed: false, score: 0, exercisesDone: 0, totalCorrect: 0, totalAnswered: 0 };
  }

  function recordExerciseResult(moduleId, exerciseId, correct, details) {
    const data = load();
    if (!data.modules[moduleId]) {
      data.modules[moduleId] = { completed: false, score: 0, exercisesDone: 0, totalCorrect: 0, totalAnswered: 0 };
    }
    const mod = data.modules[moduleId];
    mod.exercisesDone = (mod.exercisesDone || 0) + 1;
    mod.totalAnswered = (mod.totalAnswered || 0) + 1;
    if (correct) mod.totalCorrect = (mod.totalCorrect || 0) + 1;
    mod.score = mod.totalAnswered > 0 ? Math.round((mod.totalCorrect / mod.totalAnswered) * 100) : 0;

    if (!data.completedExercises[moduleId]) {
      data.completedExercises[moduleId] = [];
    }
    data.completedExercises[moduleId].push({ exerciseId, correct, timestamp: new Date().toISOString() });
    data.totalAnswers++;
    if (correct) data.correctAnswers++;

    if (!correct && details) {
      data.errors.push({ moduleId, exerciseId, details, timestamp: new Date().toISOString() });
    }

    const today = new Date().toDateString();
    if (data.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (data.lastStudyDate === yesterday) {
        data.currentStreak = (data.currentStreak || 0) + 1;
      } else {
        data.currentStreak = 1;
      }
      if (data.currentStreak > data.bestStreak) data.bestStreak = data.currentStreak;
      data.lastStudyDate = today;
    }

    save(data);
  }

  function getErrors(moduleId) {
    const data = load();
    if (moduleId) {
      return data.errors.filter(e => e.moduleId === moduleId);
    }
    return data.errors;
  }

  function getRecentErrors(limit) {
    const data = load();
    return data.errors.slice(-(limit || 10)).reverse();
  }

  function getOverallStats() {
    const data = load();
    const totalModules = Modules.getList().filter(m => m.id !== 'bienvenida' && m.id !== 'progreso').length;
    const completedModules = Object.values(data.modules).filter(m => m.completed).length;
    const accuracy = data.totalAnswers > 0 ? Math.round((data.correctAnswers / data.totalAnswers) * 100) : 0;
    return {
      totalModules,
      completedModules,
      accuracy,
      totalAnswers: data.totalAnswers,
      correctAnswers: data.correctAnswers,
      streak: data.currentStreak || 0,
      bestStreak: data.bestStreak || 0,
      startDate: data.startDate
    };
  }

  function getWeakTopics() {
    const data = load();
    const weak = [];
    for (const [moduleId, mod] of Object.entries(data.modules)) {
      if (mod.totalAnswered >= 3 && mod.score < 70) {
        weak.push({
          moduleId,
          score: mod.score,
          totalAnswered: mod.totalAnswered,
          totalCorrect: mod.totalCorrect
        });
      }
    }
    weak.sort((a, b) => a.score - b.score);
    return weak;
  }

  function getReviewPlan() {
    const errors = getRecentErrors(20);
    if (!errors.length) return [];

    const counts = {};
    for (const e of errors) {
      const key = e.moduleId;
      counts[key] = (counts[key] || 0) + 1;
    }

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([moduleId, count]) => {
        const moduleInfo = Modules.get(moduleId);
        return {
          moduleId,
          title: moduleInfo ? moduleInfo.title : moduleId,
          pendingErrors: count,
          level: moduleInfo ? moduleInfo.level : null
        };
      });
  }

  function getRecommendedModules() {
    const data = load();
    const list = Modules.getList();
    const recommended = [];

    for (const mod of list) {
      if (mod.id === 'bienvenida' || mod.id === 'progreso') continue;
      const progress = data.modules[mod.id];
      if (!progress || !progress.completed) {
        recommended.push(mod);
      }
    }

    return recommended;
  }

  function resetProgress() {
    save(getDefault());
  }

  return {
    getProgress,
    markModuleComplete,
    getModuleProgress,
    recordExerciseResult,
    getErrors,
    getOverallStats,
    getRecentErrors,
    getWeakTopics,
    getReviewPlan,
    getRecommendedModules,
    resetProgress
  };
})();
