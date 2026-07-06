const App = (() => {
  let currentModule = null;

  function init() {
    buildSidebar();
    updateOverallProgress();
    setupSidebarToggle();
    setupKeyboardShortcuts();

    window.addEventListener('hashchange', () => {
      navigate(window.location.hash.slice(1) || 'bienvenida');
    });

    if (!window.location.hash || window.location.hash === '#') {
      navigate('bienvenida');
    } else {
      navigate(window.location.hash.slice(1));
    }
  }

  function buildSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = '';
    const moduleList = Modules.getList();
    let currentSection = '';
    for (const mod of moduleList) {
      if (mod.level !== currentSection) {
        currentSection = mod.level;
        if (currentSection) {
          const sectionTitle = document.createElement('div');
          sectionTitle.className = 'nav-section-title';
          sectionTitle.textContent = currentSection;
          nav.appendChild(sectionTitle);
        }
      }
      const item = document.createElement('button');
      item.className = 'nav-item';
      item.dataset.module = mod.id;

      const badge = getStatusBadge(mod.id);
      item.innerHTML = `<span class="nav-icon">${getIcon(mod.id)}</span>${mod.title}${badge}`;
      item.addEventListener('click', () => {
        window.location.hash = mod.id;
        closeSidebar();
      });
      nav.appendChild(item);
    }
  }

  function getStatusBadge(moduleId) {
    if (moduleId === 'bienvenida' || moduleId === 'progreso') return '';
    const p = Progress.getModuleProgress(moduleId);
    if (p.completed) return ' <span class="nav-badge complete">✓</span>';
    if (p.totalAnswered > 0) return ' <span class="nav-badge in-progress">𑁍</span>';
    return '';
  }

  function getIcon(id) {
    const icons = {
      'bienvenida': '🏠',
      'diagnostico': '📋',
      'fundamentos': '📚',
      'gramatica': '📝',
      'vocabulario': '📖',
      'speaking': '🎤',
      'reading': '📖',
      'listening': '🎧',
      'writing': '✍️',
      'progreso': '📊'
    };
    return icons[id] || '📖';
  }

  function setupSidebarToggle() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      switch (e.key) {
        case 'g':
        case 'G':
          navigate('progreso');
          break;
        case 'h':
        case 'H':
          navigate('bienvenida');
          break;
      }
    });
  }

  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  function navigate(moduleId) {
    const module = Modules.get(moduleId);
    if (!module) {
      navigate('bienvenida');
      return;
    }

    currentModule = moduleId;
    const main = document.getElementById('main-content');
    main.innerHTML = '';
    module.render(main);
    updateSidebarActive(moduleId);
    updateOverallProgress();
    window.scrollTo(0, 0);
  }

  function updateSidebarActive(moduleId) {
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.module === moduleId);
    });
  }

  function updateOverallProgress() {
    const stats = Progress.getOverallStats();
    const total = Modules.getList().filter(m => m.id !== 'bienvenida' && m.id !== 'progreso').length;
    const pct = total > 0 ? Math.round((stats.completedModules / total) * 100) : 0;
    const el = document.getElementById('overall-progress');
    if (el) {
      el.querySelector('.progress-text').innerHTML = `<span>Progreso global</span><span>${pct}%</span>`;
      el.querySelector('.progress-bar-fill').style.width = pct + '%';
    }
  }

  return { init, navigate };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
