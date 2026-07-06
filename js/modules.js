const Modules = (() => {
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (k === 'className') el.className = v;
        else if (k === 'innerHTML') el.innerHTML = v;
        else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
        else el.setAttribute(k, v);
      }
    }
    for (const c of children) {
      if (typeof c === 'string') el.appendChild(document.createTextNode(c));
      else if (c instanceof Node) el.appendChild(c);
    }
    return el;
  }

  function section(title, ...children) {
    const s = h('div', { className: 'content-section' });
    if (title) {
      s.appendChild(h('h3', null, title));
    }
    for (const c of children) s.appendChild(c);
    return s;
  }

  function p(text) { return h('p', null, text); }

  function list(items, ordered = false) {
    const tag = ordered ? 'ol' : 'ul';
    const l = h(tag, null);
    for (const item of items) {
      l.appendChild(h('li', null, item));
    }
    return l;
  }

  function table(headers, rows) {
    const wrapper = h('div', { className: 'table-wrapper' });
    const tbl = h('table', null);
    if (headers && headers.length) {
      const thead = h('thead', null);
      const tr = h('tr', null);
      for (const hdr of headers) tr.appendChild(h('th', null, hdr));
      thead.appendChild(tr);
      tbl.appendChild(thead);
    }
    const tbody = h('tbody', null);
    for (const row of rows) {
      const tr = h('tr', null);
      for (const cell of row) tr.appendChild(h('td', null, cell));
      tbody.appendChild(tr);
      tbl.appendChild(tbody);
    }
    wrapper.appendChild(tbl);
    return wrapper;
  }

  function exampleBox(examples) {
    const box = h('div', { className: 'example-box' });
    for (const ex of examples) {
      if (typeof ex === 'string') {
        box.appendChild(h('p', { className: 'en' }, ex));
      } else {
        box.appendChild(h('p', { className: 'en' }, ex.en || ''));
        if (ex.es) box.appendChild(h('p', { className: 'es' }, ex.es));
      }
    }
    return box;
  }

  function errorBox(errors) {
    const box = h('div', { className: 'error-box' });
    for (const e of errors) {
      box.appendChild(h('p', { innerHTML: (e.wrong ? `<span class="wrong">${e.wrong}</span> → ` : '') + `<span class="correct">${e.correct}</span>` }));
      if (e.note) box.appendChild(h('p', { style: 'margin-top:0.25rem;font-size:0.85rem;color:var(--gray-600)' }, e.note));
    }
    return box;
  }

  function infoCard(title, body) {
    const card = h('div', { className: 'info-card' });
    if (title) card.appendChild(h('div', { className: 'info-card-title' }, title));
    if (typeof body === 'string') card.appendChild(p(body));
    else card.appendChild(body);
    return card;
  }

  function levelBadge(level) {
    const map = {
      'A1 Review': 'level-a1', 'A2 Foundation': 'level-a2', 'B1 Target': 'level-b1', 'B1 Challenge': 'level-challenge'
    };
    return h('span', { className: `level-badge ${map[level] || 'level-a1'}` }, level);
  }

  const modules = {};

  modules['bienvenida'] = {
    id: 'bienvenida',
    title: 'Bienvenida',
    level: null,
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'text-align:center;padding:2rem 0' },
          h('h2', { style: 'font-size:2rem;margin-bottom:0.5rem' }, 'Hello EN'),
          h('p', { style: 'color:var(--gray-500);font-size:1.1rem;margin-bottom:0.5rem' }, 'Tu libreta interactiva para alcanzar el nivel B1 de inglés'),
          levelBadge('A1 Review'),
          h('p', { style: 'margin-top:1.5rem;color:var(--gray-600)' }, 'Esta plataforma te guiará paso a paso desde lo básico hasta un nivel B1 funcional, con explicaciones claras en español, ejercicios interactivos y seguimiento de tu progreso.')
        )
      ));

      container.appendChild(section('Objetivo del curso',
        p('Prepararte de forma ordenada para responder un examen de ubicación con desempeño cercano a B1. El curso está pensado para alguien que ya tiene nociones, pero necesita recuperar bases, practicar producción oral y escrita, y ganar seguridad.')
      ));

      container.appendChild(section('¿Qué significa B1 de forma práctica?',
        p('En una situación real, una persona cercana a B1 puede entender y producir inglés sencillo sobre temas conocidos. No necesita hablar perfecto, pero sí debe poder mantener una conversación básica-intermedia, explicar razones y contar experiencias.'),
        table(['Habilidad', 'Lo que debes poder hacer'], [
          ['Speaking', 'Presentarte, hablar de rutina, contar experiencias, expresar opiniones, hacer preguntas y responder con frases conectadas.'],
          ['Listening', 'Entender conversaciones claras sobre temas familiares: viajes, compras, escuela, trabajo, planes, salud y experiencias.'],
          ['Reading', 'Comprender textos cortos: anuncios, correos, reseñas, instrucciones, mensajes y artículos sencillos.'],
          ['Writing', 'Escribir párrafos, correos breves, descripciones, opiniones y narraciones sencillas con conectores.'],
          ['Grammar', 'Usar presente, pasado, futuro, modales, comparativos, presente perfecto básico y conectores comunes.'],
          ['Vocabulary', 'Tener suficiente vocabulario para vida diaria, estudio, trabajo, transporte, comida, compras, salud y tecnología.']
        ])
      ));

      container.appendChild(section('Ruta de estudio',
        p('El curso está organizado en módulos que debes seguir en orden recomendado:'),
        list([
          'Diagnóstico inicial — evalúa tu nivel actual',
          'Fundamentos — recupera la base',
          'Tiempos verbales (presente, pasado, futuro, presente perfecto)',
          'Modales, comparativos, cuantificadores',
          'Preposiciones y conectores',
          'Condicionales básicos',
          'Vocabulario por temas cotidianos',
          'Speaking, Writing, Reading y Listening B1',
          'Simulacros de examen'
        ])
      ));

      container.appendChild(section('¿Cómo usar esta plataforma?',
        list([
          'Estudia en bloques de 45 a 60 minutos.',
          'Primero lee la lección, luego haz los ejercicios.',
          'No intentes memorizar todo — el examen mide si puedes comunicar ideas.',
          'Repasa los errores que la plataforma registra para ti.',
          'Tu progreso se guarda automáticamente en el navegador.'
        ])
      ));

      container.appendChild(section('Rutina diaria mínima',
        table(['Tiempo', 'Actividad', 'Cómo hacerlo'], [
          ['10 min', 'Vocabulario', 'Aprende 8-12 palabras con frases, no sueltas.'],
          ['15 min', 'Gramática', 'Estudia una regla y escribe 5 ejemplos propios.'],
          ['10 min', 'Listening', 'Escucha un diálogo corto; primero idea general, luego detalles.'],
          ['10 min', 'Speaking', 'Responde 3 preguntas en voz alta.'],
          ['10 min', 'Writing', 'Escribe 5-8 líneas sobre tu día, planes o una opinión.']
        ])
      ));
    }
  };

  modules['diagnostico'] = {
    id: 'diagnostico',
    title: 'Diagnóstico rápido',
    level: 'A1 Review',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Diagnóstico rápido'),
          levelBadge('A1 Review'),
          h('p', { style: 'margin-top:0.75rem;color:var(--gray-600)' }, 'Contesta sin mirar apuntes. Esto te ayudará a identificar qué temas necesitas repasar. Al final verás tu puntuación y recomendaciones.')
        )
      ));

      container.appendChild(section('Plan recomendado de 8 semanas',
        table(['Semana', 'Enfoque', 'Resultado esperado'], [
          ['1', 'Base: verbo be, presente simple, preguntas, rutina', 'Presentarte y hablar de vida diaria'],
          ['2', 'Presente continuo, lugares, comida, compras', 'Describir acciones y situaciones comunes'],
          ['3', 'Pasado simple y narraciones', 'Contar experiencias de fin de semana, viajes o escuela'],
          ['4', 'Futuro: going to, will, planes', 'Hablar de metas, planes y decisiones'],
          ['5', 'Modales: can, should, have to, must, may/might', 'Dar consejos, pedir ayuda, hablar de obligaciones'],
          ['6', 'Presente perfecto, comparativos, superlativos', 'Hablar de experiencias y comparar opciones'],
          ['7', 'Speaking y writing tipo examen', 'Responder con estructura y escribir párrafos/correos'],
          ['8', 'Simulacros, errores frecuentes y fluidez', 'Practicar con tiempo y corregir debilidades']
        ])
      ));

      container.appendChild(section('Tu diagnóstico',
        p('Responde las siguientes preguntas para evaluar tu nivel actual. Al terminarlas, recibirás una puntuación y recomendaciones.')
      ));

      Exercises.renderExerciseSet(container, 'diagnostico', Exercises.getDiagnosticQuestions());
    }
  };

  modules['fundamentos'] = {
    id: 'fundamentos',
    title: 'Fundamentos',
    level: 'A1 Review',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Fundamentos — Desde cero / Refresco'),
          levelBadge('A1 Review'),
          p('Recupera la base del inglés: estructura de oraciones, pronombres, verb to be, artículos, plurales y preguntas esenciales.')
        )
      ));

      container.appendChild(section('2.1 Estructura básica de una oración',
        p('En inglés casi siempre necesitas sujeto. En español puedes decir "Estoy cansado", pero en inglés necesitas "I am tired".'),
        table(['Tipo', 'Estructura', 'Ejemplo', 'Traducción'], [
          ['Afirmativa', 'Subject + verb + complement', 'I study English every day.', 'Estudio inglés todos los días.'],
          ['Negativa', 'Subject + auxiliary + not + verb', 'I don\'t understand this topic.', 'No entiendo este tema.'],
          ['Pregunta', 'Auxiliary + subject + verb...?', 'Do you work today?', '¿Trabajas hoy?'],
          ['Pregunta con WH', 'WH-word + auxiliary + subject + verb...?', 'Where do you live?', '¿Dónde vives?']
        ]),
        errorBox([
          { wrong: 'Is important study English.', correct: 'It is important to study English.', note: 'En inglés necesitas sujeto: it, I, you, he, she, we, they.' }
        ])
      ));

      container.appendChild(section('2.2 Pronombres y posesivos',
        table(['Subject', 'Object', 'Possessive Adj.', 'Possessive Pronoun', 'Ejemplo'], [
          ['I', 'me', 'my', 'mine', 'My phone is new. This phone is mine.'],
          ['you', 'you', 'your', 'yours', 'Your book is here.'],
          ['he', 'him', 'his', 'his', 'I know him. His car is blue.'],
          ['she', 'her', 'her', 'hers', 'She loves her family.'],
          ['it', 'it', 'its', '—', 'The dog eats its food.'],
          ['we', 'us', 'our', 'ours', 'Our class starts at 8.'],
          ['they', 'them', 'their', 'theirs', 'Their house is big.']
        ])
      ));

      container.appendChild(section('2.3 Verbo to be',
        table(['Forma', 'Presente', 'Pasado', 'Ejemplo'], [
          ['I', 'am', 'was', 'I am tired. / I was tired yesterday.'],
          ['You', 'are', 'were', 'You are ready. / You were busy.'],
          ['He/She/It', 'is', 'was', 'She is my friend. / She was at home.'],
          ['We/They', 'are', 'were', 'They are students. / They were late.']
        ]),
        p('Usos principales: identidad, edad, origen, estado, ubicación, descripción.'),
        exampleBox([
          { en: 'I am 18 years old.', es: 'Tengo 18 años.' },
          { en: 'She is from Guatemala.', es: 'Ella es de Guatemala.' },
          { en: 'We are in class.', es: 'Estamos en clase.' },
          { en: 'The exam was difficult.', es: 'El examen fue difícil.' }
        ])
      ));

      container.appendChild(section('2.4 Artículos: a, an, the',
        table(['Artículo', 'Uso', 'Ejemplo'], [
          ['a', 'Antes de sonido consonante, una cosa no específica', 'I have a laptop.'],
          ['an', 'Antes de sonido vocal', 'She is an engineer.'],
          ['the', 'Algo específico o ya mencionado', 'The laptop on the table is mine.'],
          ['sin artículo', 'Ideas generales, idiomas, comidas en general', 'I like English. / I love coffee.']
        ])
      ));

      container.appendChild(section('2.5 Plurales y sustantivos contables / no contables',
        table(['Tipo', 'Ejemplos', 'Regla práctica'], [
          ['Contables', 'book/books, apple/apples, class/classes', 'Puedes contar: one book, two books.'],
          ['No contables', 'water, rice, money, information, advice', 'No suelen llevar plural. Usa some, much, a lot of.'],
          ['Unidades', 'a bottle of water, a piece of advice', 'Sirven para contar lo no contable.']
        ])
      ));

      container.appendChild(section('2.6 There is / There are',
        table(['Forma', 'Uso', 'Ejemplo'], [
          ['There is', 'Singular o no contable', 'There is a problem. / There is water.'],
          ['There are', 'Plural', 'There are three people.'],
          ['Is there...?', 'Pregunta singular', 'Is there a bank near here?'],
          ['Are there...?', 'Pregunta plural', 'Are there any restaurants?']
        ])
      ));

      container.appendChild(section('2.7 Preguntas esenciales',
        table(['WH-word', 'Significado', 'Ejemplo'], [
          ['What', 'qué / cuál', 'What do you do?'],
          ['Where', 'dónde', 'Where do you live?'],
          ['When', 'cuándo', 'When is your exam?'],
          ['Why', 'por qué', 'Why are you studying English?'],
          ['Who', 'quién', 'Who is your teacher?'],
          ['How', 'cómo', 'How do you go to school?'],
          ['How often', 'qué tan seguido', 'How often do you practice?'],
          ['How much/many', 'cuánto / cuántos', 'How much money? / How many books?']
        ])
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('A continuación, practica los fundamentos con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'fundamentos', Exercises.getFundamentosQuestions());
    }
  };

  modules['gramatica'] = {
    id: 'gramatica',
    title: 'Gramática esencial',
    level: 'A2 Foundation',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Gramática esencial para llegar a B1'),
          levelBadge('A2 Foundation'),
          p('Domina los tiempos verbales, modales, comparativos, presente perfecto, condicionales y conectores que necesitas para el nivel B1.')
        )
      ));

      container.appendChild(section('3.1 Present Simple',
        p('Úsalo para rutinas, hábitos, gustos, hechos generales y horarios.'),
        table(['Forma', 'Estructura', 'Ejemplo'], [
          ['Afirmativa', 'Subject + verb', 'I work in the morning.'],
          ['He/She/It', 'verb + s/es', 'She studies English.'],
          ['Negativa', "don't/doesn't + verb base", "I don't work on Sundays. / He doesn't drive."],
          ['Pregunta', 'Do/Does + subject + verb?', 'Do you like coffee? / Does she study?']
        ]),
        infoCard('Marcadores frecuentes', 'always, usually, often, sometimes, rarely, never, every day, on weekends.'),
        errorBox([
          { wrong: 'Does she studies?', correct: 'Does she study?', note: 'Después de does/doesn\'t, el verbo vuelve a forma base.' }
        ])
      ));

      container.appendChild(section('3.2 Present Continuous',
        p('Úsalo para acciones que están pasando ahora, situaciones temporales y planes ya organizados.'),
        table(['Uso', 'Ejemplo'], [
          ['Ahora', 'I am studying right now.'],
          ['Temporal', 'I am working on a project this week.'],
          ['Plan organizado', 'I am meeting my friend tomorrow.']
        ]),
        infoCard('Diferencia clave',
          'Present Simple: "I work every day." = rutina.<br>Present Continuous: "I am working now." = en este momento o temporal.')
      ));

      container.appendChild(section('3.3 Past Simple',
        p('Úsalo para acciones terminadas en el pasado. Es básico para B1 porque en speaking casi siempre te pedirán contar experiencias.'),
        table(['Tipo', 'Forma', 'Ejemplo'], [
          ['Regular', 'verb + ed', 'I visited my family yesterday.'],
          ['Irregular', 'forma especial', 'I went to the mall.'],
          ['Negativa', "didn't + verb base", "I didn't go out."],
          ['Pregunta', 'Did + subject + verb base?', 'Did you study last night?']
        ]),
        infoCard('Marcadores frecuentes', 'yesterday, last week, last month, ago, in 2024, when I was a child.'),
        h('h4', null, 'Verbos irregulares comunes'),
        table(['Base', 'Past', 'Ejemplo'], [
          ['Base', 'Past', 'Ejemplo'],
          ['go', 'went', 'I went to school.'],
          ['do', 'did', 'I did my homework.'],
          ['have', 'had', 'We had dinner.'],
          ['make', 'made', 'She made a cake.'],
          ['buy', 'bought', 'I bought a phone.'],
          ['take', 'took', 'He took a bus.'],
          ['see', 'saw', 'I saw a movie.'],
          ['come', 'came', 'They came late.'],
          ['eat', 'ate', 'We ate tacos.'],
          ['get', 'got', 'I got home at 9.']
        ]),
        exampleBox([
          { en: 'Last weekend, I stayed at home because I was tired. On Saturday, I watched a movie and studied English for one hour. On Sunday, I visited my family and we had lunch together.', es: 'Fin de semana pasado me quedé en casa porque estaba cansado...' }
        ])
      ));

      container.appendChild(section('3.4 Past Continuous',
        p('Úsalo para una acción que estaba en progreso en el pasado, especialmente cuando otra acción la interrumpe.'),
        table(['Estructura', 'Ejemplo'], [
          ['was/were + verb-ing', 'I was studying when my friend called.'],
          ['while + past continuous', 'While I was walking, it started to rain.']
        ])
      ));

      container.appendChild(section('3.5 Futuro: going to, will y present continuous',
        table(['Forma', 'Uso principal', 'Ejemplo'], [
          ['be going to', 'planes e intenciones', 'I am going to study tonight.'],
          ['will', 'decisiones rápidas, predicciones, promesas', 'I think I will pass the exam.'],
          ['present continuous', 'planes organizados', 'I am taking the exam on Friday.']
        ]),
        exampleBox([
          { en: 'Next year, I am going to continue studying, and I want to improve my English because it can help me at school and work.', es: 'El próximo año voy a continuar estudiando...' }
        ])
      ));

      container.appendChild(section('3.6 Modals: can, could, should, have to, must, may, might',
        table(['Modal', 'Función', 'Ejemplo'], [
          ['can', 'habilidad / permiso', 'I can speak basic English.'],
          ['could', 'pasado o petición amable', 'Could you repeat that, please?'],
          ['should', 'consejo', 'You should practice every day.'],
          ['have to', 'obligación externa', 'I have to study for my exam.'],
          ['must', 'obligación fuerte', 'You must bring your ID.'],
          ['may/might', 'posibilidad', 'I might travel next month.']
        ]),
        errorBox([
          { wrong: 'I should to study / I should studying', correct: 'I should study', note: 'Después de un modal, usa verbo base.' }
        ])
      ));

      container.appendChild(section('3.7 Count nouns, non-count nouns y quantifiers',
        table(['Expresión', 'Uso', 'Ejemplo'], [
          ['some', 'afirmativas y ofrecimientos', 'I need some water.'],
          ['any', 'negativas y preguntas', 'Do you have any questions?'],
          ['much', 'no contables', 'How much money do you need?'],
          ['many', 'contables plurales', 'How many classes do you have?'],
          ['a lot of', 'contables / no contables', 'I have a lot of homework.'],
          ['a few', 'pocos contables', 'I have a few friends here.'],
          ['a little', 'poco no contable', 'I speak a little English.']
        ])
      ));

      container.appendChild(section('3.8 Comparatives and superlatives',
        table(['Tipo', 'Regla', 'Ejemplo'], [
          ['Corto', 'adjective + er / the + adjective + est', 'fast, faster, the fastest'],
          ['Largo', 'more / the most + adjective', 'more interesting, the most interesting'],
          ['Irregular', 'good/better/best; bad/worse/worst', 'This book is better than that one.']
        ]),
        exampleBox([
          { en: 'I prefer studying at night because it is quieter than studying in the afternoon. For me, listening is the most difficult skill, but speaking is the most important.', es: 'Prefiero estudiar en la noche porque es más tranquilo...' }
        ])
      ));

      container.appendChild(section('3.9 Present Perfect',
        p('Este tema suele separar A2 de B1. Úsalo para experiencias de vida, cambios y acciones recientes conectadas con el presente.'),
        table(['Uso', 'Estructura', 'Ejemplo'], [
          ['Experiencias', 'have/has + past participle', 'I have visited Cancun.'],
          ['Nunca', 'have/has never + participle', 'I have never been to Canada.'],
          ['Preguntas', 'Have/Has + subject + participle?', 'Have you ever taken an English exam?'],
          ['Desde/hace', 'for + period / since + starting point', 'I have studied English for two months. / since January.'],
          ['Ya/todavía', 'already / yet', 'I have already finished. / I haven\'t finished yet.']
        ]),
        infoCard('Diferencia con pasado simple',
          'Past Simple: "I went to Cancun in 2022." = tiempo terminado y específico.<br>Present Perfect: "I have been to Cancun." = experiencia, no importa cuándo.')
      ));

      container.appendChild(section('3.10 Gerunds and infinitives',
        table(['Forma', 'Después de', 'Ejemplo'], [
          ['verb + ing', 'enjoy, avoid, finish, keep', 'I enjoy learning English.'],
          ['to + verb', 'want, need, decide, plan, hope', 'I want to improve my speaking.'],
          ['ambas en algunos casos', 'like, love, hate, prefer', 'I like studying / I like to study.']
        ])
      ));

      container.appendChild(section('3.11 Conditionals básicos',
        table(['Tipo', 'Uso', 'Estructura', 'Ejemplo'], [
          ['Zero conditional', 'verdades generales', 'If + present, present', 'If you heat water, it boils.'],
          ['First conditional', 'posibilidad real futura', 'If + present, will + verb', 'If I study, I will pass.']
        ])
      ));

      container.appendChild(section('3.12 Connectors para sonar B1',
        table(['Función', 'Conectores', 'Ejemplo'], [
          ['Agregar', 'and, also, too, in addition', 'I study English, and I also practice listening.'],
          ['Contrastar', 'but, however, although', 'I like English, but speaking is difficult.'],
          ['Razón', 'because, since', 'I study because I need it for school.'],
          ['Resultado', 'so, therefore', 'I was tired, so I went home.'],
          ['Orden', 'first, then, after that, finally', 'First, I read. Then, I answer questions.'],
          ['Opinión', 'I think, I believe, in my opinion', 'I think English is useful.']
        ])
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('A continuación, practica la gramática con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'gramatica', Exercises.getGramaticaQuestions());
    }
  };

  modules['vocabulario'] = {
    id: 'vocabulario',
    title: 'Vocabulario funcional',
    level: 'A2 Foundation',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Vocabulario funcional para B1'),
          levelBadge('A2 Foundation'),
          p('Aprende vocabulario por situación. No estudies palabras sueltas; escribe frases reales con tu vida.')
        )
      ));

      container.appendChild(section('Presentación y datos personales',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['name', 'My name is David.'],
          ['age', 'I am 18 years old.'],
          ['from', 'I am from Mexico.'],
          ['live', 'I live in Merida.'],
          ['student', 'I am a systems student.'],
          ['currently', 'I am currently studying English.'],
          ['interested in', 'I am interested in technology.'],
          ['goal', 'My goal is to reach B1.']
        ])
      ));

      container.appendChild(section('Rutina y hábitos',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['wake up', 'I wake up early.'],
          ['get ready', 'I get ready for school.'],
          ['commute', 'I commute by bus.'],
          ['usually', 'I usually study at night.'],
          ['sometimes', 'Sometimes I watch videos in English.'],
          ['take a break', 'I take a break after class.'],
          ['on weekdays', 'On weekdays, I am busy.'],
          ['on weekends', 'On weekends, I rest.']
        ])
      ));

      container.appendChild(section('Comida y restaurantes',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['menu', 'Can I see the menu?'],
          ['order', 'I would like to order a sandwich.'],
          ['bill/check', 'Can I have the check, please?'],
          ['spicy', 'This food is spicy.'],
          ['delicious', 'The dessert was delicious.'],
          ['reservation', 'I made a reservation.'],
          ['recommend', 'What do you recommend?'],
          ['takeout', 'I ordered takeout.']
        ])
      ));

      container.appendChild(section('Compras y dinero',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['price', 'What is the price?'],
          ['discount', 'Is there a discount?'],
          ['receipt', 'Can I have a receipt?'],
          ['cash', 'I paid in cash.'],
          ['credit card', 'Can I pay by credit card?'],
          ['expensive', 'It is too expensive.'],
          ['cheap', 'This one is cheaper.'],
          ['size', 'Do you have this in my size?']
        ])
      ));

      container.appendChild(section('Viajes, transporte y hoteles',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['flight', 'My flight leaves at 8.'],
          ['ticket', 'I bought a ticket.'],
          ['bus stop', 'Where is the bus stop?'],
          ['check in', 'I need to check in.'],
          ['reservation', 'I have a reservation.'],
          ['luggage', 'My luggage is heavy.'],
          ['single room', 'I booked a single room.'],
          ['directions', 'Can you give me directions?']
        ])
      ));

      container.appendChild(section('Salud y bienestar',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['headache', 'I have a headache.'],
          ['sore throat', 'I have a sore throat.'],
          ['appointment', 'I have a doctor\'s appointment.'],
          ['medicine', 'I need some medicine.'],
          ['exercise', 'I exercise twice a week.'],
          ['healthy', 'I try to eat healthy food.'],
          ['tired', 'I feel tired today.'],
          ['advice', 'My advice is to rest.']
        ])
      ));

      container.appendChild(section('Tecnología y estudio/trabajo',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['device', 'My phone is an important device.'],
          ['download', 'I downloaded an app.'],
          ['upload', 'I uploaded a file.'],
          ['assignment', 'I have an assignment.'],
          ['deadline', 'The deadline is tomorrow.'],
          ['meeting', 'I have a meeting at 3.'],
          ['improve', 'I want to improve my English.'],
          ['skill', 'Speaking is an important skill.']
        ])
      ));

      container.appendChild(section('Opiniones, personalidad y valores',
        table(['Palabra/expresión', 'Frase modelo'], [
          ['I think', 'I think English is useful.'],
          ['in my opinion', 'In my opinion, practice is necessary.'],
          ['responsible', 'A responsible person is organized.'],
          ['honest', 'Honesty is important.'],
          ['friendly', 'My friends are friendly.'],
          ['confident', 'I want to feel more confident.'],
          ['agree', 'I agree with you.'],
          ['disagree', 'I disagree because...']
        ])
      ));

      container.appendChild(section('Método de vocabulario: 3 pasos',
        list([
          'Paso 1: escribe la palabra con una frase real de tu vida.',
          'Paso 2: di la frase en voz alta 5 veces, cambiando sujeto o tiempo verbal.',
          'Paso 3: usa la palabra en una respuesta de speaking o un párrafo de writing.'
        ])
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('A continuación, practica el vocabulario con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'vocabulario', Exercises.getVocabularioQuestions());
    }
  };

  modules['progreso'] = {
    id: 'progreso',
    title: 'Mi Progreso',
    level: 'General',
    render(container) {
      const stats = Progress.getOverallStats();
      const weakTopics = Progress.getWeakTopics();
      const reviewPlan = Progress.getReviewPlan();
      const recommended = Progress.getRecommendedModules();
      const recentErrors = Progress.getRecentErrors(10);

      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Mi Progreso y Evaluación'),
          p('Aquí puedes ver tu avance general, tus áreas débiles y recomendaciones de estudio.')
        )
      ));

      container.appendChild(section('Resumen general',
        h('div', { style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;margin-top:0.5rem' },
          h('div', { style: 'text-align:center;padding:1rem;background:var(--primary-light);border-radius:var(--radius)' },
            h('div', { style: 'font-size:2rem;font-weight:700;color:var(--primary)' }, `${stats.completedModules}/${stats.totalModules}`),
            h('div', { style: 'font-size:0.85rem;color:var(--gray-600)' }, 'Módulos completados')
          ),
          h('div', { style: 'text-align:center;padding:1rem;background:var(--success-bg);border-radius:var(--radius)' },
            h('div', { style: 'font-size:2rem;font-weight:700;color:var(--success)' }, `${stats.accuracy}%`),
            h('div', { style: 'font-size:0.85rem;color:var(--gray-600)' }, 'Precisión global')
          ),
          h('div', { style: 'text-align:center;padding:1rem;background:var(--warning-bg);border-radius:var(--radius)' },
            h('div', { style: 'font-size:2rem;font-weight:700;color:var(--warning)' }, `${stats.totalAnswers}`),
            h('div', { style: 'font-size:0.85rem;color:var(--gray-600)' }, 'Ejercicios respondidos')
          ),
          h('div', { style: 'text-align:center;padding:1rem;background:var(--gray-100);border-radius:var(--radius)' },
            h('div', { style: 'font-size:2rem;font-weight:700;color:var(--gray-700)' }, `${stats.streak} días`),
            h('div', { style: 'font-size:0.85rem;color:var(--gray-600)' }, 'Racha actual')
          )
        )
      ));

      container.appendChild(section('Progreso por módulo',
        (() => {
          const list = Modules.getList().filter(m => m.id !== 'bienvenida');
          const rows = list.map(mod => {
            const p = Progress.getModuleProgress(mod.id);
            const pct = p.totalAnswered > 0 ? p.score : 0;
            const status = p.completed ? '✅ Completado' : (p.totalAnswered > 0 ? `𑁍 En progreso (${pct}%)` : '⏳ Pendiente');
            return [mod.title, status, `${p.totalCorrect || 0}/${p.totalAnswered || 0}`];
          });
          return table(['Módulo', 'Estado', 'Aciertos'], rows);
        })()
      ));

      if (weakTopics.length > 0) {
        container.appendChild(section('Áreas que necesitan repaso',
          p('Estos módulos tienen menos del 70% de aciertos. Enfócate en repasarlos:'),
          list(weakTopics.map(t => `${Modules.get(t.moduleId)?.title || t.moduleId}: ${t.score}% de aciertos (${t.totalCorrect}/${t.totalAnswered})`))
        ));
      }

      if (reviewPlan.length > 0) {
        container.appendChild(section('Plan de repaso sugerido',
          p('Basado en tus errores más recientes, te recomendamos repasar:'),
          list(reviewPlan.map(r => `${r.title} (${r.pendingErrors} errores pendientes)${r.level ? ' — ' + r.level : ''}`))
        ));
      }

      if (recentErrors.length > 0) {
        container.appendChild(section('Últimos errores',
          p('Revisa los errores recientes para no repetirlos:'),
          (() => {
            const items = recentErrors.slice(0, 5).map(e => {
              const mod = Modules.get(e.moduleId);
              const title = mod ? mod.title : e.moduleId;
              return `${title}: ${e.details}`;
            });
            return list(items);
          })()
        ));
      }

      if (recommended.length > 0) {
        container.appendChild(section('Siguientes módulos recomendados',
          p('Continúa tu estudio con estos módulos:'),
          (() => {
            const btns = h('div', { className: 'practice-actions' });
            for (const mod of recommended) {
              const btn = h('button', {
                className: 'btn btn-primary btn-sm',
                onClick: () => App.navigate(mod.id)
              }, mod.title);
              btns.appendChild(btn);
            }
            return btns;
          })()
        ));
      }

      container.appendChild(section('Opciones',
        h('button', {
          className: 'btn btn-outline btn-sm',
          onClick: () => {
            if (confirm('¿Resetear todo tu progreso? Esta acción no se puede deshacer.')) {
              Progress.resetProgress();
              App.navigate('progreso');
            }
          }
        }, 'Resetear progreso')
      ));
    }
  };

  modules['speaking'] = {
    id: 'speaking',
    title: 'Speaking B1',
    level: 'B1 Target',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Speaking — Cómo responder como B1'),
          levelBadge('B1 Target'),
          p('Para el examen de ubicación, hablar con estructura vale mucho. No necesitas frases perfectas; necesitas responder, conectar ideas y dar ejemplos.')
        )
      ));

      container.appendChild(section('5.1 Fórmula de respuesta B1',
        p('Una respuesta sólida suele seguir este orden:'),
        list([
          'Respuesta directa',
          'Razón',
          'Ejemplo o detalle personal',
          'Cierre sencillo'
        ]),
        exampleBox([
          { en: 'I am studying English because I want to improve my opportunities. For example, English can help me at school and in future jobs. Also, I want to understand videos and conversations better. That is why English is important for me.', es: 'Estoy estudiando inglés porque quiero mejorar mis oportunidades...' }
        ])
      ));

      container.appendChild(section('5.2 Frases para ganar tiempo',
        p('Úsalas cuando necesites pensar o cuando no recuerdes una palabra exacta:'),
        list([
          'Let me think for a second.',
          'That is an interesting question.',
          'I don\'t know the exact word, but I mean...',
          'Could you repeat the question, please?',
          'In my opinion...',
          'For example...',
          'Another reason is...',
          'To be honest...'
        ])
      ));

      container.appendChild(section('5.3 Preguntas típicas y respuestas modelo',
        table(['Pregunta', 'Idea de respuesta'], [
          ['Tell me about yourself.', 'Nombre, origen, ocupación, intereses y por qué estudias inglés.'],
          ['What do you usually do on weekdays?', 'Rutina diaria con conectores: first, then, after that.'],
          ['What did you do last weekend?', 'Experiencia pasada con detalles: lugar, persona, resultado.'],
          ['What are you going to do next year?', 'Planes futuros con going to / will.'],
          ['Do you prefer studying alone or with others?', 'Opinión con ventaja y desventaja de cada opción.'],
          ['Describe a place you like.', 'Nombre del lugar, por qué te gusta, qué puedes hacer ahí.'],
          ['What is difficult about learning English?', 'Área difícil (speaking, listening), por qué y cómo mejoras.'],
          ['What technology do you use every day?', 'Aparatos que usas, para qué y por qué son útiles.'],
          ['What should people do to be healthy?', 'Consejos con should: sleep, exercise, eat well.'],
          ['Have you ever traveled to another place?', 'Experiencia con presente perfecto: where, when, why.']
        ])
      ));

      container.appendChild(section('5.4 Mini monólogos para practicar',
        p('Elige un tema y habla 60 a 90 segundos. Usa esta estructura:'),
        list([
          'Introduction: I want to talk about...',
          'Details: First..., Also..., For example...',
          'Opinion: I think... because...',
          'Closing: That is why...'
        ]),
        infoCard('Temas sugeridos', 'My daily routine, A person I admire, A place I want to visit, My favorite food, My plans for the future, Why English is important, Technology in my life, A healthy lifestyle.')
      ));

      container.appendChild(section('5.5 Pronunciación mínima para el examen',
        table(['Tema', 'Qué cuidar'], [
          ['Terminación -ed', 'worked / played / visited — tres sonidos distintos'],
          ['Tercera persona -s', 'She works, he studies — no olvidarla'],
          ['Contracciones', 'I\'m, you\'re, don\'t, didn\'t, I\'ve — suenan natural'],
          ['Entonación en preguntas', 'Sube un poco al final en yes/no questions']
        ])
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('Practica el vocabulario y las estrategias de speaking con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'speaking', Exercises.getSpeakingQuestions());
    }
  };

  modules['reading'] = {
    id: 'reading',
    title: 'Reading B1',
    level: 'B1 Target',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Reading — Estrategias de lectura B1'),
          levelBadge('B1 Target'),
          p('Desarrolla estrategias para entender textos: idea general, detalles y vocabulario en contexto.')
        )
      ));

      container.appendChild(section('6.1 Técnica de lectura rápida',
        p('Usa este método para leer de forma más eficiente:'),
        list([
          'Lee el título y predice el tema.',
          'Busca nombres, fechas, lugares y números.',
          'Lee la primera y última oración de cada párrafo.',
          'Subraya conectores: but, because, so, however.',
          'Responde primero las preguntas fáciles; vuelve después a las difíciles.',
          'No traduzcas palabra por palabra. Entiende la función de cada oración.'
        ])
      ));

      container.appendChild(section('6.2 Mini reading practice',
        h('div', { className: 'practice-card' },
          h('h4', null, 'Texto'),
          h('p', null, 'Learning English is not only about grammar. Many students know rules, but they feel nervous when they have to speak. A good way to improve is to practice a little every day. For example, students can listen to short conversations, repeat useful phrases, and write simple paragraphs about their life. It is also important to make mistakes because mistakes show what you need to study next.')
        ),
        infoCard('Preguntas guía', '1. ¿Cuál es la idea principal? 2. ¿Por qué se sienten nerviosos? 3. ¿Qué actividades recomienda? 4. ¿Por qué son importantes los errores?')
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('Practica las estrategias de lectura con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'reading', Exercises.getReadingQuestions());
    }
  };

  modules['listening'] = {
    id: 'listening',
    title: 'Listening B1',
    level: 'B1 Target',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Listening — Estrategias de comprensión auditiva'),
          levelBadge('B1 Target'),
          p('Aprende a escuchar de forma activa: idea general, detalles y lenguaje útil.')
        )
      ));

      container.appendChild(section('6.1 Método de 3 escuchas',
        table(['Escucha', 'Objetivo', 'Qué hacer'], [
          ['1', 'Idea general', 'No traduzcas todo. Pregúntate: ¿de qué hablan? ¿quiénes son? ¿dónde están?'],
          ['2', 'Detalles', 'Anota números, lugares, fechas, problemas, decisiones.'],
          ['3', 'Lenguaje útil', 'Copia frases completas que podrías usar hablando.']
        ]),
        infoCard('Consejo', 'Cuando uses Top Notch, escucha el audio del diálogo sin leer primero, luego lee, después repite en voz alta.')
      ));

      container.appendChild(section('6.2 Palabras clave en listening',
        table(['Tipo de señal', 'Palabras'], [
          ['Contraste', 'but, however, although, on the other hand'],
          ['Razón', 'because, since, that is why'],
          ['Resultado', 'so, therefore'],
          ['Secuencia', 'first, then, after that, finally'],
          ['Opinión', 'I think, I guess, in my opinion'],
          ['Preferencia', 'I prefer, I would rather, I like better']
        ])
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('Practica las estrategias de listening con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'listening', Exercises.getListeningQuestions());
    }
  };

  modules['writing'] = {
    id: 'writing',
    title: 'Writing B1',
    level: 'B1 Target',
    render(container) {
      container.appendChild(section(null,
        h('div', { style: 'margin-bottom:0.5rem' },
          h('h2', { style: 'font-size:1.75rem;margin-bottom:0.25rem' }, 'Writing — Escribe para B1'),
          levelBadge('B1 Target'),
          p('Tu escritura debe ser clara, organizada y sencilla. Evita frases demasiado largas. Usa conectores.')
        )
      ));

      container.appendChild(section('7.1 Estructura de párrafo',
        p('Un párrafo simple sigue esta lógica:'),
        list([
          'Topic sentence: presenta la idea principal.',
          'Detail 1: primera razón o detalle.',
          'Detail 2: segunda razón o ejemplo.',
          'Closing sentence: cierre sencillo.'
        ]),
        exampleBox([
          { en: 'English is important for my future. First, it can help me understand more information online. Also, it can give me better opportunities at school and work. For that reason, I want to practice every day.', es: 'El inglés es importante para mi futuro...' }
        ])
      ));

      container.appendChild(section('7.2 Emails básicos',
        table(['Parte', 'Frases útiles'], [
          ['Saludo', 'Hi Ana, / Dear Mr. Smith,'],
          ['Inicio', 'I hope you are well. / I am writing because...'],
          ['Cuerpo', 'I wanted to ask about... / I would like to know... / Also,...'],
          ['Cierre', 'Thank you for your help. / I look forward to your answer.'],
          ['Despedida', 'Best regards, / Sincerely,']
        ])
      ));

      container.appendChild(section('7.3 Writing tasks para practicar',
        list([
          'Write an email asking for information about an English course.',
          'Write a paragraph about your daily routine.',
          'Write about your last vacation or weekend.',
          'Write your opinion about technology in education.',
          'Write advice for a friend who wants to be healthier.',
          'Write about a goal you have for next year.'
        ])
      ));

      container.appendChild(section('7.4 Checklist antes de entregar',
        list([
          'Cada oración tiene sujeto y verbo.',
          'Usé mayúscula al inicio y punto al final.',
          'No mezclé presente y pasado sin razón.',
          'Agregué conectores: because, but, also, so.',
          'Revisé tercera persona: he/she/it + s.',
          'Revisé pasado: did + verb base en preguntas/negativas.'
        ])
      ));

      container.appendChild(section('Ejercicios de práctica',
        p('Practica las estrategias de writing con ejercicios interactivos.')
      ));

      Exercises.renderExerciseSet(container, 'writing', Exercises.getWritingQuestions());
    }
  };

  return {
    getAll() { return modules; },
    get(id) { return modules[id]; },
    getList() {
      return [
        { id: 'bienvenida', title: 'Bienvenida', level: null },
        { id: 'diagnostico', title: 'Diagnóstico rápido', level: 'A1 Review' },
        { id: 'fundamentos', title: 'Fundamentos', level: 'A1 Review' },
        { id: 'gramatica', title: 'Gramática esencial', level: 'A2 Foundation' },
        { id: 'vocabulario', title: 'Vocabulario funcional', level: 'A2 Foundation' },
        { id: 'speaking', title: 'Speaking B1', level: 'B1 Target' },
        { id: 'reading', title: 'Reading B1', level: 'B1 Target' },
        { id: 'listening', title: 'Listening B1', level: 'B1 Target' },
        { id: 'writing', title: 'Writing B1', level: 'B1 Target' },
        { id: 'progreso', title: 'Mi Progreso', level: 'General' }
      ];
    }
  };
})();
