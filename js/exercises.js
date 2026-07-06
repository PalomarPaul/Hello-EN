const Exercises = (() => {

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const diagnosticQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    mc('She ___ from Mexico.', ['is', 'are', 'be'], 0, '"She" es tercera persona singular, por lo tanto usamos "is".');
    mc('I usually ___ coffee in the morning.', ['drink', 'drinks', 'drinking'], 0, '"I" requiere el verbo sin cambios: "drink".');
    mc('There ___ two books on the table.', ['is', 'are', 'be'], 1, '"Two books" es plural, por lo tanto "are".');
    mc('I ___ to the movies yesterday.', ['go', 'went', 'gone'], 1, '"Yesterday" indica pasado, así que usamos "went" (pasado de go).');
    mc('We ___ studying English now.', ['are', 'is', 'be'], 0, '"We" requiere "are" como verbo auxiliar en presente continuo.');
    mc('I\'m going ___ visit my family tomorrow.', ['to', 'for', 'at'], 0, '"Going to" es la estructura fija para futuro planificado.');
    mc('This laptop is ___ than my old one.', ['faster', 'more fast', 'fastest'], 0, '"Faster" es el comparativo correcto de "fast".');
    mc('I have ___ been to Canada.', ['ever', 'never', 'yet'], 1, '"Never" significa "nunca". Se usa con presente perfecto.');
    mc('You ___ study a little every day.', ['should', 'may be', 'going'], 0, '"Should" se usa para dar consejos o recomendaciones.');
    mc('He ___ a teacher.', ['am', 'is', 'are'], 1, '"He" es tercera persona singular, usa "is".');
    mc('They ___ from Spain.', ['am', 'is', 'are'], 2, '"They" usa "are".');
    mc('___ you like pizza?', ['Do', 'Does', 'Are'], 0, '"You" usa "Do" para preguntas en presente simple.');
    mc('Where ___ she live?', ['do', 'does', 'is'], 1, '"She" usa "does" en preguntas.');
    mc('She ___ like coffee.', ['don\'t', 'doesn\'t', 'isn\'t'], 1, '"She" usa "doesn\'t" para negar.');
    mc('I ___ to school by bus every day.', ['go', 'goes', 'going'], 0, '"I" usa el verbo sin cambios: "go".');
    mc('He ___ breakfast at 7 am yesterday.', ['have', 'had', 'has'], 1, '"Had" es el pasado de "have".');
    mc('___ you go to the party last night?', ['Did', 'Do', 'Does'], 0, '"Did" para preguntas en pasado.');
    mc('While I ___ to work, it started to rain.', ['drive', 'was driving', 'drove'], 1, 'Acción en progreso interrumpida: past continuous.');
    mc('I think it ___ rain later.', ['will', 'is going', 'going'], 0, '"Will" para predicciones: "I think it will rain."');
    mc('I ___ speak English well.', ['can', 'must', 'should'], 0, '"Can" expresa habilidad.');
    mc('You ___ practice more. (consejo)', ['can', 'should', 'must'], 1, '"Should" se usa para dar consejos.');
    mc('How ___ money do you have?', ['many', 'much', 'some'], 1, '"Much" con incontables.');
    mc('How ___ books do you read?', ['many', 'much', 'some'], 0, '"Many" con contables.');
    mc('She is the ___ student in the class.', ['good', 'better', 'best'], 2, 'Superlativo irregular de "good": best.');
    mc('If I study, I ___ the exam.', ['pass', 'will pass', 'passed'], 1, 'First conditional: If + presente, will + verb.');
    mc('I enjoy ___ English.', ['learn', 'learning', 'to learn'], 1, 'Después de "enjoy" usamos verb + ing.');
    mc('I like English, ___ speaking is difficult.', ['because', 'but', 'so'], 1, '"But" contrasta dos ideas.');
    mc('I have studied English ___ two months.', ['for', 'since', 'ago'], 0, '"For" + período de tiempo.');
    mc('There ___ a supermarket near here.', ['is', 'are', 'be'], 0, '"A supermarket" es singular → "There is".');
    mc('There ___ two restaurants on this street.', ['is', 'are', 'be'], 1, '"Two restaurants" es plural → "There are".');
    mc('My ___ is to reach B1.', ['goal', 'gold', 'go'], 0, '"Goal" = meta.');
    mc('I ___ up at 7 am.', ['get', 'wake', 'stand'], 1, '"Wake up" = despertarse.');
    mc('Can I have the ___? (cuenta)', ['bill', 'pay', 'cost'], 0, '"Bill/check" = cuenta en un restaurante.');
    mc('What is the ___? (precio)', ['cost', 'price', 'pay'], 1, '"Price" = precio.');
    mc('I need to ___ in. (registrarme)', ['check', 'checking', 'checked'], 0, '"Check in" = registrarse.');
    mc('___ my opinion, English is useful.', ['On', 'In', 'At'], 1, '"In my opinion" = en mi opinión.');

    fb('You live in Merida. → ___', 'Do you live in Merida?', 'Para hacer preguntas en presente simple con "you", usamos "Do" al inicio.');
    fb('Traduce: "No entiendo la pregunta."', 'I don\'t understand the question.', 'Usa "don\'t" para negar en presente simple con I.');
    fb('Traduce: "Ella es de México."', 'She is from Mexico.', '"She is from" para indicar origen.');
    fb('Completa: "I ___ (be) a student."', 'am', '"I" usa "am".');
    fb('Completa: "She ___ (not/be) at home."', 'isn\'t', '"She isn\'t" es la contracción de "is not".');
    fb('Completa: "___ you ___ (like) coffee?"', 'Do ... like', '"Do you like" para preguntar gustos.');
    fb('Completa: "Where ___ she ___ (live)?"', 'does ... live', '"Does" + sujeto + verbo base.');
    fb('Completa: "I ___ (go) to the store yesterday."', 'went', '"Went" es el pasado de "go".');
    fb('Completa: "I ___ (not/visit) my grandmother."', 'didn\'t visit', '"Didn\'t" + verbo base para negar en pasado.');
    fb('Completa: "I ___ (study) when you called."', 'was studying', 'Past continuous: was/were + verb-ing.');

    tf('"I" usa "are" con el verbo to be.', false, '"I" usa "am", no "are".');
    tf('"She" usa "does" para preguntas en presente simple.', true, 'Correcto: "Does she like...?"');
    tf('"I didn\'t went" es correcto.', false, 'Debe ser "I didn\'t go". Después de didn\'t, el verbo vuelve a forma base.');
    tf('"Going to" se usa para planes e intenciones.', true, 'Correcto: "I am going to study tonight."');
    tf('"Much" se usa con sustantivos contables.', false, '"Much" se usa con incontables. "Many" con contables.');
    tf('"I have gone to Cancun in 2022" es correcto.', false, 'Con año específico se usa Past Simple: "I went to Cancun in 2022".');
    tf('"Although" se usa para contrastar ideas.', true, 'Correcto: "Although it was raining, I went out."');
    tf('Después de un modal se usa verbo base.', true, 'Correcto: "I can go", no "I can went".');

    // Open-ended
    qs.push({ type: 'fill-blank', question: 'Escribe 3 oraciones sobre tu rutina. (Escribe al menos una)', answer: '', explanation: 'Ejemplo: I wake up at 7 am. I have breakfast. I go to work.', isOpen: true });
    qs.push({ type: 'fill-blank', question: 'Escribe 3 oraciones sobre lo que hiciste el fin de semana pasado.', answer: '', explanation: 'Ejemplo: I visited my family. I watched a movie. I played soccer.', isOpen: true });
    qs.push({ type: 'fill-blank', question: 'Responde: Why do you want to study English?', answer: '', explanation: 'Ejemplo: I want to study English because it is important for my job and I want to travel.', isOpen: true });
    qs.push({ type: 'fill-blank', question: 'Responde: Tell me about a place you would like to visit.', answer: '', explanation: 'Ejemplo: I would like to visit London because I want to see the museums and practice English.', isOpen: true });

    return qs;
  })();

  const fundamentosQuestions = (() => {
    const qs = [];

    function mc(q, opts, ans, exp) {
      qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp });
    }
    function fb(q, ans, exp) {
      qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp });
    }
    function tf(q, ans, exp) {
      qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp });
    }

    mc('I ___ a student.', ['am', 'is', 'are'], 0, '"I" siempre usa "am" con el verbo to be.');
    mc('She ___ my friend.', ['am', 'is', 'are'], 1, '"She" es tercera persona singular, usa "is".');
    mc('They ___ from Spain.', ['am', 'is', 'are'], 2, '"They" usa "are".');
    mc('We ___ in the classroom.', ['am', 'is', 'are'], 2, '"We" usa "are".');
    mc('He ___ a doctor.', ['am', 'is', 'are'], 1, '"He" usa "is".');
    mc('___ you ready?', ['Is', 'Am', 'Are'], 2, '"You" usa "Are" en preguntas.');
    mc('Where ___ she from?', ['am', 'is', 'are'], 1, '"She" usa "is".');
    mc('I ___ tired yesterday.', ['am', 'was', 'were'], 1, '"Yesterday" indica pasado. "I" usa "was".');
    mc('They ___ at home last night.', ['was', 'were', 'are'], 1, '"They" en pasado usa "were".');
    mc('She ___ at the party last weekend.', ['was', 'were', 'is'], 0, '"She" en pasado usa "was".');
    mc('___ you at work yesterday?', ['Was', 'Were', 'Are'], 1, '"You" en pasado usa "Were" en preguntas.');

    mc('I have ___ apple.', ['a', 'an', 'the'], 1, '"Apple" comienza con sonido vocal, por lo tanto "an".');
    mc('She is ___ engineer.', ['a', 'an', 'the'], 1, '"Engineer" comienza con sonido vocal → "an".');
    mc('He has ___ car.', ['a', 'an', 'the'], 0, '"Car" comienza con sonido consonante → "a".');
    mc('___ sun is very hot today.', ['A', 'An', 'The'], 2, '"The" porque nos referimos al sol (específico, único).');
    mc('I like ___ coffee.', ['a', 'the', '(sin artículo)'], 2, 'Ideas generales no llevan artículo.');
    mc('She speaks ___ English very well.', ['a', 'the', '(sin artículo)'], 2, 'Idiomas no llevan artículo en contextos generales.');
    mc('There is ___ book on the table.', ['a', 'an', 'the'], 0, 'Primera mención de un libro no específico → "a".');
    mc('___ book on the table is mine.', ['A', 'An', 'The'], 2, 'El libro ya está identificado → "the".');

    mc('I have two ___ .', ['book', 'books', 'bookes'], 1, 'Plural regular: book → books.');
    mc('She has three ___ .', ['child', 'childs', 'children'], 2, '"Children" es el plural irregular de "child".');
    mc('We need some ___ for the salad.', ['tomato', 'tomatos', 'tomatoes'], 2, '"Tomato" → "tomatoes" (terminación -o, agregamos -es).');
    mc('There are five ___ in the room.', ['person', 'persons', 'people'], 2, '"People" es el plural de "person".');
    mc('I need ___ . (agua)', ['a water', 'some water', 'a few water'], 1, '"Water" es incontable, usamos "some".');
    mc('Can I have ___ ? (información)', ['an information', 'some information', 'a few information'], 1, '"Information" es incontable.');
    mc('I bought ___ of milk.', ['a bottle', 'some bottle', 'a few'], 0, 'Usamos "a bottle of" para contar leche.');

    mc('___ a supermarket near here.', ['There is', 'There are', 'It is'], 0, '"A supermarket" es singular → "There is".');
    mc('___ two restaurants on this street.', ['There is', 'There are', 'It is'], 1, '"Two restaurants" es plural → "There are".');
    mc('___ any water in the fridge?', ['Is there', 'Are there', 'There is'], 0, '"Water" es incontable/singular → "Is there".');
    mc('___ any students in the class?', ['Is there', 'Are there', 'There are'], 1, '"Students" es plural → "Are there".');
    mc('There ___ a problem with my computer.', ['is', 'are', 'be'], 0, '"A problem" es singular → "is".');
    mc('There ___ many people in the park.', ['is', 'are', 'be'], 1, '"Many people" es plural → "are".');
    mc('___ a bank near here?', ['Is there', 'Are there', 'There is'], 0, 'Pregunta singular → "Is there".');

    mc('___ do you live?', ['What', 'Where', 'When'], 1, '"Where" pregunta por un lugar.');
    mc('___ do you study English?', ['What', 'Where', 'Why'], 2, '"Why" pregunta por una razón.');
    mc('___ is your birthday?', ['What', 'Where', 'When'], 2, '"When" pregunta por una fecha o momento.');
    mc('___ is your favorite teacher?', ['What', 'Where', 'Who'], 2, '"Who" pregunta por una persona.');
    mc('___ do you go to work? — By bus.', ['What', 'How', 'Why'], 1, '"How" pregunta por el medio o manera.');
    mc('___ money do you have?', ['How many', 'How much', 'How often'], 1, '"Money" es incontable → "How much".');
    mc('___ books do you read per month?', ['How many', 'How much', 'How often'], 0, '"Books" es contable → "How many".');
    mc('___ do you visit your family? — Every week.', ['How many', 'How much', 'How often'], 2, '"How often" pregunta por frecuencia.');
    mc('___ do you do? — I\'m a teacher.', ['What', 'Where', 'Who'], 0, '"What" pregunta por la profesión.');
    mc('___ is the exam? — Next Monday.', ['What', 'Where', 'When'], 2, '"When" pregunta por cuándo.');

    mc('___ name is John.', ['I', 'My', 'Me'], 1, '"My" es el adjetivo posesivo para "I".');
    mc('This book is ___ .', ['my', 'mine', 'me'], 1, '"Mine" es el pronombre posesivo (no necesita sustantivo después).');
    mc('I know ___ . He is a good person.', ['his', 'him', 'he'], 1, '"Him" es el objeto directo de "know".');
    mc('___ car is blue.', ['She', 'Her', 'Hers'], 1, '"Her" es el adjetivo posesivo para "she".');
    mc('That house is ___ .', ['their', 'theirs', 'them'], 1, '"Theirs" es el pronombre posesivo para "they".');
    mc('We love ___ family.', ['us', 'our', 'ours'], 1, '"Our" es el adjetivo posesivo para "we".');

    mc('I ___ English every day.', ['study', 'studies', 'studying'], 0, '"I" usa el verbo sin cambios en presente simple.');
    mc('She ___ early every morning.', ['wake up', 'wakes up', 'waking up'], 1, '"She" requiere el verbo con -s: "wakes up".');
    mc('They ___ coffee in the afternoon.', ['drink', 'drinks', 'drinking'], 0, '"They" usa el verbo sin cambios.');
    mc('He ___ to work by car.', ['go', 'goes', 'going'], 1, '"He" requiere "goes".');
    mc('___ you like pizza?', ['Do', 'Does', 'Are'], 0, '"You" usa "Do" para preguntas en presente simple.');
    mc('___ she speak French?', ['Do', 'Does', 'Is'], 1, '"She" usa "Does" para preguntas.');
    mc('It ___ a lot in this city.', ['rain', 'rains', 'raining'], 1, '"It" requiere "rains".');

    mc('I ___ understand this exercise.', ['don\'t', 'doesn\'t', 'isn\'t'], 0, '"I" usa "don\'t" para negar.');
    mc('She ___ like spicy food.', ['don\'t', 'doesn\'t', 'isn\'t'], 1, '"She" usa "doesn\'t".');
    mc('We ___ have class on Sundays.', ['don\'t', 'doesn\'t', 'aren\'t'], 0, '"We" usa "don\'t".');

    mc('We ___ studying right now.', ['are', 'is', 'be'], 0, '"We" usa "are" como auxiliar en presente continuo.');
    mc('She ___ reading a book at the moment.', ['are', 'is', 'am'], 1, '"She" usa "is".');
    mc('I ___ working on a project.', ['are', 'is', 'am'], 2, '"I" usa "am".');
    mc('They ___ playing soccer in the park.', ['are', 'is', 'am'], 0, '"They" usa "are".');
    mc('What ___ you doing?', ['am', 'is', 'are'], 2, '"You" usa "are".');
    mc('He ___ not sleeping right now.', ['am', 'is', 'are'], 1, '"He" usa "is" para formar la negación.');

    fb('Completa: I ___ (be) a student.', 'am', '"I" usa "am".');
    fb('Completa: She ___ (be) my sister.', 'is', '"She" usa "is".');
    fb('Completa: They ___ (be) from Mexico.', 'are', '"They" usa "are".');
    fb('Completa: We ___ (have) a test tomorrow.', 'have', '"We" usa "have" sin cambios.');
    fb('Completa: He ___ (go) to school every day.', 'goes', '"He" requiere "goes".');
    fb('Completa: She ___ (not/like) coffee.', 'doesn\'t like', '"Doesn\'t" + verbo base.');
    fb('Completa: ___ you ___ (like) pizza?', 'Do ... like', '"Do you like" para preguntar.');
    fb('Completa: Where ___ she ___ (live)?', 'does ... live', '"Does" + sujeto + verbo base.');
    fb('Completa: There ___ (be) a cat on the sofa.', 'is', '"A cat" es singular → "is".');
    fb('Completa: There ___ (be) three windows.', 'are', '"Three windows" es plural → "are".');
    fb('Completa: I ___ (not/be) tired.', 'am not', '"I am not" es la negación de "I am".');
    fb('Completa: She ___ (not/be) at home.', 'isn\'t', '"She isn\'t" es la contracción de "is not".');
    fb('Completa: This is ___ (I) book.', 'my', '"My" es el adjetivo posesivo para "I".');
    fb('Completa: The dog is ___ (she).', 'hers', '"Hers" es el pronombre posesivo para "she".');

    tf('"I" usa "are" con el verbo to be.', false, '"I" usa "am", no "are".');
    tf('"She" usa "does" para preguntas en presente simple.', true, 'Correcto: "Does she like...?"');
    tf('"They" usa "is" en presente simple.', false, '"They" usa "are", no "is".');
    tf('"A" se usa antes de sonido consonante.', true, 'Correcto: "a car", "a house".');
    tf('"An" se usa antes de cualquier palabra que empiece con vocal.', true, 'Correcto: "an apple", "an hour" (la h es muda).');
    tf('"There are" se usa con sustantivos singulares.', false, '"There are" se usa con plurales.');
    tf('"How many" se usa con sustantivos contables.', true, 'Correcto: "How many books?"');
    tf('"How much" se usa con sustantivos incontables.', true, 'Correcto: "How much water?"');
    tf('En inglés se puede decir: "Is important to study."', false, 'Falta el sujeto "It". Debe ser "It is important to study."');
    tf('"I was" es la forma correcta en pasado para "I".', true, 'Correcto: "I was tired."');
    tf('"You was" es correcto en pasado.', false, 'La forma correcta es "You were".');
    tf('"Children" es el plural de "child".', true, 'Correcto, es un plural irregular.');
    tf('"She go to school every day" es correcto.', false, 'Debe ser "She goes to school every day" (tercera persona + s).');
    tf('Los idiomas no llevan artículo en inglés.', true, 'Correcto: "I speak Spanish", no "the Spanish".');
    tf('"Mine" significa "mío/a" y no necesita un sustantivo después.', true, 'Correcto: "This car is mine."');

    return qs;
  })();

  function pickRandom(arr, n) {
    const shuffled = shuffle([...arr]);
    return shuffled.slice(0, Math.min(n, shuffled.length));
  }

  function renderMultipleChoice(question, index, onSubmit) {
    const block = document.createElement('div');
    block.className = 'exercise-block';

    const header = document.createElement('div');
    header.className = 'exercise-header';
    header.innerHTML = `<span class="exercise-number">Ejercicio ${index + 1}</span><span class="exercise-type">Opción múltiple</span>`;
    block.appendChild(header);

    const q = document.createElement('div');
    q.className = 'exercise-question';
    q.textContent = question.question;
    block.appendChild(q);

    const list = document.createElement('ul');
    list.className = 'options-list';

    const optionEls = [];
    question.options.forEach((opt, i) => {
      const li = document.createElement('li');
      li.className = 'option-item';
      const label = document.createElement('label');
      label.className = 'option-label';
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `mc-${index}`;
      radio.value = i;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(' ' + opt));
      li.appendChild(label);
      list.appendChild(li);
      optionEls.push({ label, radio });
    });

    block.appendChild(list);

    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    block.appendChild(feedback);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn btn-primary btn-sm';
    checkBtn.textContent = 'Verificar';
    block.appendChild(checkBtn);

    let answered = false;

    checkBtn.addEventListener('click', () => {
      if (answered) return;
      const selected = optionEls.find(el => el.radio.checked);
      if (!selected) {
        feedback.textContent = 'Por favor selecciona una opción.';
        feedback.className = 'feedback show feedback-incorrect';
        return;
      }
      answered = true;
      const val = parseInt(selected.radio.value);
      const correct = val === question.answer;
      optionEls.forEach((el, i) => {
        el.label.classList.add('disabled');
        el.radio.disabled = true;
        if (i === question.answer) el.label.classList.add('correct');
        if (i === val && !correct) el.label.classList.add('incorrect');
      });
      feedback.className = `feedback show ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
      feedback.innerHTML = correct
        ? '✓ ¡Correcto!'
        : `✗ Incorrecto. La respuesta correcta era: <strong>${question.options[question.answer]}</strong>`;
      if (question.explanation) {
        feedback.innerHTML += `<div class="feedback-explain">${question.explanation}</div>`;
      }
      if (onSubmit) onSubmit(correct);
    });

    return block;
  }

  function renderFillBlank(question, index, onSubmit) {
    const block = document.createElement('div');
    block.className = 'exercise-block';

    const header = document.createElement('div');
    header.className = 'exercise-header';
    header.innerHTML = `<span class="exercise-number">Ejercicio ${index + 1}</span><span class="exercise-type">${question.isOpen ? 'Respuesta abierta' : 'Completar'}</span>`;
    block.appendChild(header);

    const q = document.createElement('div');
    q.className = 'exercise-question';
    q.textContent = question.question;
    block.appendChild(q);

    if (question.isOpen) {
      const textarea = document.createElement('textarea');
      textarea.style.width = '100%';
      textarea.style.minHeight = '80px';
      textarea.style.padding = '0.5rem';
      textarea.style.border = '2px solid var(--gray-300)';
      textarea.style.borderRadius = 'var(--radius)';
      textarea.style.fontFamily = 'inherit';
      textarea.style.fontSize = '0.9rem';
      textarea.placeholder = 'Escribe tu respuesta aquí...';
      block.appendChild(textarea);

      const feedback = document.createElement('div');
      feedback.className = 'feedback';
      block.appendChild(feedback);

      const checkBtn = document.createElement('button');
      checkBtn.className = 'btn btn-primary btn-sm';
      checkBtn.textContent = 'Listo';
      block.appendChild(checkBtn);

      checkBtn.addEventListener('click', () => {
        const val = textarea.value.trim();
        if (!val) {
          feedback.textContent = 'Por favor escribe algo.';
          feedback.className = 'feedback show feedback-incorrect';
          return;
        }
        feedback.className = 'feedback show feedback-correct';
        feedback.innerHTML = '✓ Respuesta registrada.' + (question.explanation ? `<div class="feedback-explain">${question.explanation}</div>` : '');
        textarea.disabled = true;
        checkBtn.disabled = true;
        if (onSubmit) onSubmit(true);
      });

      return block;
    }

    const prompt = document.createElement('div');
    prompt.className = 'exercise-question';
    prompt.style.fontSize = '0.95rem';
    prompt.style.fontWeight = '400';
    prompt.textContent = 'Escribe tu respuesta en el campo:';
    block.appendChild(prompt);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'fill-input';
    input.placeholder = 'Escribe aquí...';
    block.appendChild(input);

    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    block.appendChild(feedback);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn btn-primary btn-sm';
    checkBtn.textContent = 'Verificar';
    block.appendChild(checkBtn);

    let answered = false;

    checkBtn.addEventListener('click', () => {
      if (answered) return;
      const val = input.value.trim().toLowerCase();
      if (!val) {
        feedback.textContent = 'Por favor escribe una respuesta.';
        feedback.className = 'feedback show feedback-incorrect';
        return;
      }
      answered = true;
      const answers = Array.isArray(question.answer)
        ? question.answer.map(a => a.toLowerCase())
        : [question.answer.toLowerCase()];
      const correct = answers.some(a => val.includes(a) || a.includes(val));

      input.className = `fill-input ${correct ? 'correct' : 'incorrect'}`;
      input.disabled = true;
      feedback.className = `feedback show ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
      feedback.innerHTML = correct
        ? '✓ ¡Correcto!'
        : `✗ Una posible respuesta: <strong>${question.answer}</strong>`;
      if (question.explanation) {
        feedback.innerHTML += `<div class="feedback-explain">${question.explanation}</div>`;
      }
      checkBtn.disabled = true;
      if (onSubmit) onSubmit(correct);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkBtn.click();
    });

    return block;
  }

  function renderTrueFalse(question, index, onSubmit) {
    const block = document.createElement('div');
    block.className = 'exercise-block';

    const header = document.createElement('div');
    header.className = 'exercise-header';
    header.innerHTML = `<span class="exercise-number">Ejercicio ${index + 1}</span><span class="exercise-type">Verdadero / Falso</span>`;
    block.appendChild(header);

    const q = document.createElement('div');
    q.className = 'exercise-question';
    q.textContent = question.question;
    block.appendChild(q);

    const btns = document.createElement('div');
    btns.className = 'tf-buttons';

    const tBtn = document.createElement('button');
    tBtn.className = 'tf-btn';
    tBtn.textContent = 'Verdadero';
    const fBtn = document.createElement('button');
    fBtn.className = 'tf-btn';
    fBtn.textContent = 'Falso';

    btns.appendChild(tBtn);
    btns.appendChild(fBtn);
    block.appendChild(btns);

    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    block.appendChild(feedback);

    let answered = false;

    function answer(val) {
      if (answered) return;
      answered = true;
      const correct = val === question.answer;
      tBtn.className = `tf-btn ${val === true ? (correct ? 'selected-true' : 'selected-false') : ''}`;
      fBtn.className = `tf-btn ${val === false ? (correct ? 'selected-true' : 'selected-false') : ''}`;
      tBtn.disabled = true;
      fBtn.disabled = true;
      feedback.className = `feedback show ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
      feedback.innerHTML = correct
        ? '✓ ¡Correcto!'
        : `✗ Incorrecto. La respuesta correcta es: <strong>${question.answer ? 'Verdadero' : 'Falso'}</strong>`;
      if (question.explanation) {
        feedback.innerHTML += `<div class="feedback-explain">${question.explanation}</div>`;
      }
      if (onSubmit) onSubmit(correct);
    }

    tBtn.addEventListener('click', () => answer(true));
    fBtn.addEventListener('click', () => answer(false));

    return block;
  }

  function getQuestions(moduleId) {
    const map = {
      'diagnostico': diagnosticQuestions,
      'fundamentos': fundamentosQuestions,
      'gramatica': gramaticaQuestions,
      'vocabulario': vocabularioQuestions,
      'speaking': speakingQuestions,
      'reading': readingQuestions,
      'listening': listeningQuestions,
      'writing': writingQuestions
    };
    return map[moduleId] || [];
  }

  function renderExerciseSet(container, moduleId, questions) {
    const QUESTIONS_PER_SET = 10;
    let selected = pickRandom(questions, Math.min(questions.length, QUESTIONS_PER_SET));
    let usedIndices = [];

    function showExercises() {
      container.querySelectorAll('.exercise-block, .exercise-summary').forEach(el => el.remove());

      selected.forEach((q, i) => {
        const onSubmit = (correct) => {
          totalAnswered++;
          if (correct) correctCount++;
          Progress.recordExerciseResult(moduleId, `ex-${Date.now()}-${i}`, correct, q.explanation || '');
          if (totalAnswered === selected.length) {
            showScore();
          }
        };
        let el;
        switch (q.type) {
          case 'multiple-choice': el = renderMultipleChoice(q, i, onSubmit); break;
          case 'fill-blank': el = renderFillBlank(q, i, onSubmit); break;
          case 'true-false': el = renderTrueFalse(q, i, onSubmit); break;
          default: el = renderFillBlank(q, i, onSubmit);
        }
        container.appendChild(el);
      });
    }

    let correctCount = 0;
    let totalAnswered = 0;
    showExercises();

    function showScore() {
      const pct = Math.round((correctCount / totalAnswered) * 100);
      const existing = container.querySelector('.exercise-summary');
      if (existing) existing.remove();

      if (pct >= 70) {
        Progress.markModuleComplete(moduleId);
      }

      const summary = document.createElement('div');
      summary.className = 'mini-test';
      summary.innerHTML = `
        <div class="mini-test-header">
          <h3>Resultado</h3>
        </div>
        <div class="mini-test-score">
          <span class="score-number">${correctCount}/${totalAnswered}</span>
          <span class="score-label">${pct}% de aciertos</span>
          <div class="score-message">${getScoreMessage(pct)}${pct >= 70 ? '<br><br>✅ Módulo completado' : ''}</div>
          <button class="btn btn-primary mt-2" id="retry-${moduleId}">Intentar de nuevo</button>
        </div>
      `;
      summary.className = 'exercise-summary ' + summary.className;
      container.appendChild(summary);

      document.getElementById(`retry-${moduleId}`).addEventListener('click', () => {
        correctCount = 0;
        totalAnswered = 0;
        selected = pickRandom(questions, Math.min(questions.length, QUESTIONS_PER_SET));
        showExercises();
      });
    }
  }

  function getScoreMessage(pct) {
    if (pct >= 90) return '¡Excelente! Tienes un buen dominio de este tema.';
    if (pct >= 70) return 'Muy bien. Tienes una base sólida, revisa los errores para mejorar.';
    if (pct >= 50) return 'Bien. Necesitas repasar algunos conceptos. Revisa las explicaciones.';
    return 'Necesitas repasar este tema con más detalle. Vuelve a leer la lección e inténtalo de nuevo.';
  }

  const gramaticaQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    // Present Simple
    mc('I ___ English every day.', ['study', 'studies', 'studying'], 0, '"I" usa el verbo sin cambios en presente simple.');
    mc('She ___ early every morning.', ['wake up', 'wakes up', 'waking up'], 1, '"She" requiere el verbo con -s: "wakes up".');
    mc('They ___ coffee in the afternoon.', ['drink', 'drinks', 'drinking'], 0, '"They" usa el verbo sin cambios.');
    mc('He ___ to work by car.', ['go', 'goes', 'going'], 1, '"He" requiere "goes".');
    mc('___ you like pizza?', ['Do', 'Does', 'Are'], 0, '"You" usa "Do" para preguntas en presente simple.');
    mc('___ she speak French?', ['Do', 'Does', 'Is'], 1, '"She" usa "Does" para preguntas.');
    mc('It ___ a lot in this city.', ['rain', 'rains', 'raining'], 1, '"It" requiere "rains".');
    mc('I ___ understand this exercise.', ['don\'t', 'doesn\'t', 'isn\'t'], 0, '"I" usa "don\'t" para negar.');
    mc('She ___ like spicy food.', ['don\'t', 'doesn\'t', 'isn\'t'], 1, '"She" usa "doesn\'t".');
    mc('We ___ have class on Sundays.', ['don\'t', 'doesn\'t', 'aren\'t'], 0, '"We" usa "don\'t".');
    tf('"She" usa "does" para preguntas en presente simple.', true, 'Correcto: "Does she like...?"');
    tf('"He study" es correcto en presente simple.', false, 'Debe ser "He studies" (tercera persona + s).');

    // Present Continuous
    mc('We ___ studying right now.', ['are', 'is', 'be'], 0, '"We" usa "are" como auxiliar en presente continuo.');
    mc('She ___ reading a book at the moment.', ['are', 'is', 'am'], 1, '"She" usa "is".');
    mc('I ___ working on a project.', ['are', 'is', 'am'], 2, '"I" usa "am".');
    mc('They ___ playing soccer in the park.', ['are', 'is', 'am'], 0, '"They" usa "are".');
    mc('What ___ you doing?', ['am', 'is', 'are'], 2, '"You" usa "are".');
    mc('He ___ not sleeping right now.', ['am', 'is', 'are'], 1, '"He" usa "is" para formar la negación.');
    tf('"I am work" es correcto en presente continuo.', false, 'Debe ser "I am working" (verb + ing).');

    // Past Simple
    mc('I ___ to the store yesterday.', ['go', 'went', 'gone'], 1, '"Went" es el pasado de "go".');
    mc('She ___ her homework last night.', ['do', 'did', 'does'], 1, '"Did" es el pasado de "do".');
    mc('They ___ a movie last weekend.', ['watch', 'watched', 'watching'], 1, 'Verbo regular: watch + ed = watched.');
    mc('He ___ breakfast at 7 am.', ['have', 'had', 'has'], 1, '"Had" es el pasado de "have".');
    mc('___ you go to the party?', ['Did', 'Do', 'Does'], 0, '"Did" para preguntas en pasado simple.');
    mc('I ___ visit my grandmother.', ['didn\'t', 'don\'t', 'doesn\'t'], 0, '"Didn\'t" + verbo base para negar en pasado.');
    mc('She ___ to school yesterday.', ['go', 'went', 'goes'], 1, '"Went" porque "yesterday" indica pasado.');
    mc('We ___ a good time at the park.', ['have', 'had', 'having'], 1, '"Had" es el pasado de "have".');
    tf('"I didn\'t went" es correcto.', false, 'Debe ser "I didn\'t go". Después de didn\'t, el verbo vuelve a forma base.');

    // Past Continuous
    mc('I ___ TV when you called.', ['watched', 'was watching', 'am watching'], 1, 'Acción en progreso en el pasado: was/were + verb-ing.');
    mc('While I ___ to work, it started to rain.', ['drive', 'was driving', 'drove'], 1, 'While + past continuous = acción en progreso.');
    mc('They ___ dinner when I arrived.', ['had', 'were having', 'are having'], 1, 'Acción interrumpida: past continuous.');
    tf('Past continuous se forma con was/were + verbo en -ing.', true, 'Correcto: "I was studying."');

    // Future
    mc('I ___ visit my family tomorrow.', ['going to', 'am going to', 'will to'], 1, '"Be going to" para planes: "am going to".');
    mc('I think it ___ rain later.', ['will', 'is going', 'going to'], 0, '"Will" para predicciones: "I think it will rain."');
    mc('She ___ a doctor tomorrow at 3.', ['see', 'is seeing', 'will seeing'], 1, 'Present continuous para planes organizados: "is seeing".');
    mc('I ___ help you with that! (decisión espontánea)', ['will', 'am going to', 'going'], 0, '"Will" para decisiones espontáneas.');
    tf('"Going to" se usa para planes e intenciones.', true, 'Correcto: "I am going to study tonight."');

    // Modals
    mc('I ___ speak English well. (habilidad)', ['can', 'must', 'should'], 0, '"Can" expresa habilidad.');
    mc('You ___ practice more. (consejo)', ['can', 'should', 'must'], 1, '"Should" se usa para dar consejos.');
    mc('___ you repeat that, please? (petición amable)', ['Can', 'Could', 'Must'], 1, '"Could" es más formal/amable para peticiones.');
    mc('Students ___ bring their ID. (obligación)', ['can', 'should', 'must'], 2, '"Must" expresa obligación fuerte.');
    mc('I ___ travel next month. (posibilidad)', ['can', 'might', 'must'], 1, '"Might" expresa posibilidad.');
    mc('I ___ finish this project today. (obligación externa)', ['have to', 'must', 'can'], 0, '"Have to" expresa obligación externa.');
    tf('Después de un modal se usa verbo en pasado.', false, 'Después de un modal se usa verbo base: "I can go", no "I can went".');
    tf('"You should to study" es correcto.', false, 'No. Debe ser "You should study" (sin "to").');

    // Count/Non-count & Quantifiers
    mc('I need ___ water.', ['some', 'any', 'many'], 0, '"Some" se usa en afirmativas con incontables.');
    mc('Do you have ___ questions?', ['some', 'any', 'much'], 1, '"Any" se usa en preguntas.');
    mc('How ___ money do you have?', ['many', 'much', 'some'], 1, '"Much" con incontables: money.');
    mc('How ___ books do you read?', ['many', 'much', 'some'], 0, '"Many" con contables: books.');
    mc('I have ___ friends in this city.', ['a little', 'a few', 'much'], 1, '"A few" con contables plurales.');
    mc('I speak ___ English.', ['a few', 'a little', 'many'], 1, '"A little" con incontables: English.');
    tf('"Much" se usa con sustantivos contables.', false, '"Much" se usa con incontables. "Many" con contables.');

    // Comparatives & Superlatives
    mc('This car is ___ than that one.', ['fast', 'faster', 'fastest'], 1, 'Comparativo de "fast": faster.');
    mc('She is the ___ student in the class.', ['good', 'better', 'best'], 2, 'Superlativo irregular de "good": best.');
    mc('This book is ___ interesting than that one.', ['more', 'most', 'much'], 0, 'Adjetivo largo: more + adjective.');
    mc('It\'s the ___ movie I have ever seen.', ['bad', 'worse', 'worst'], 2, 'Superlativo irregular de "bad": worst.');
    mc('My house is ___ than yours.', ['big', 'bigger', 'biggest'], 1, 'Comparativo de "big": bigger (CVC + er).');
    tf('"Good" → "gooder" es el comparativo correcto.', false, '"Good" → "better" es irregular.');

    // Present Perfect
    mc('I ___ visited Cancun.', ['have', 'has', 'am'], 0, '"I" usa "have" en presente perfecto.');
    mc('She ___ never been to Canada.', ['have', 'has', 'is'], 1, '"She" usa "has" en presente perfecto.');
    mc('___ you ever taken an exam?', ['Have', 'Has', 'Are'], 0, '"You" usa "Have" en preguntas.');
    mc('I have studied English ___ two months.', ['for', 'since', 'ago'], 0, '"For" + período de tiempo.');
    mc('I have studied English ___ January.', ['for', 'since', 'ago'], 1, '"Since" + punto de inicio.');
    mc('I have ___ finished my homework. (ya)', ['ever', 'already', 'yet'], 1, '"Already" = ya, en afirmativas.');
    mc('I haven\'t finished ___. (todavía)', ['ever', 'already', 'yet'], 2, '"Yet" = todavía, en negativas.');
    tf('Present Perfect se usa para acciones con tiempo específico.', false, 'Present Perfect se usa para experiencias sin tiempo específico.');
    tf('"I have gone to Cancun in 2022" es correcto.', false, 'Con año específico (2022) se usa Past Simple: "I went to Cancun in 2022".');

    // Gerunds & Infinitives
    mc('I enjoy ___ English.', ['learn', 'learning', 'to learn'], 1, 'Después de "enjoy" usamos verb + ing.');
    mc('I want ___ my speaking.', ['improve', 'improving', 'to improve'], 2, 'Después de "want" usamos to + verb.');
    mc('I like ___ English. (ambas formas son válidas)', ['study', 'studying / to study', 'studied'], 1, 'Después de "like" ambas formas son posibles.');
    mc('She avoided ___ to him.', ['talk', 'talking', 'to talk'], 1, 'Después de "avoid" usamos verb + ing.');
    mc('I need ___ more water.', ['drink', 'drinking', 'to drink'], 2, 'Después de "need" usamos to + verb.');

    // Conditionals
    mc('If you ___ water, it boils. (zero conditional)', ['heat', 'heated', 'will heat'], 0, 'Zero conditional: If + presente, presente.');
    mc('If I study, I ___ the exam. (first conditional)', ['pass', 'will pass', 'passed'], 1, 'First conditional: If + presente, will + verb.');
    tf('If it rains, I will stay home.', true, 'First conditional correcto.');

    // Connectors
    mc('I like English, ___ speaking is difficult.', ['because', 'but', 'so'], 1, '"But" contrasta dos ideas.');
    mc('I study ___ I need it for school.', ['but', 'because', 'so'], 1, '"Because" da una razón.');
    mc('I was tired, ___ I went home.', ['but', 'because', 'so'], 2, '"So" expresa resultado.');
    mc('___ I read. Then, I answer questions.', ['First', 'Because', 'But'], 0, '"First" ordena secuencia.');
    mc('___ my opinion, English is useful.', ['On', 'In', 'At'], 1, '"In my opinion" es la expresión correcta.');
    tf('"Although" se usa para contrastar ideas.', true, 'Correcto: "Although it was raining, I went out."');

    return qs;
  })();

  const vocabularioQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    // Presentation
    mc('"My name ___ David." Completa.', ['am', 'is', 'are'], 1, '"Name" es singular, usa "is".');
    mc('"I ___ 18 years old."', ['have', 'am', 'is'], 1, 'Para la edad usamos "to be": "I am 18 years old."');
    mc('"I am ___ Mexico." — ¿Dónde?', ['from', 'of', 'at'], 0, '"From" indica origen.');
    mc('"I ___ in Merida."', ['live', 'live in', 'live at'], 0, '"Live" va seguido de "in" + ciudad.');
    mc('"I am a ___ student." (estudiante de sistemas)', ['systems', 'system', 'system\'s'], 0, '"Systems student" = estudiante de sistemas.');
    mc('"I am ___ studying English." (actualmente)', ['current', 'currently', 'currenting'], 1, '"Currently" = actualmente (adverbio).');
    mc('"I am interested ___ technology."', ['on', 'in', 'at'], 1, '"Interested in" es la preposición correcta.');
    mc('"My ___ is to reach B1." (meta)', ['goal', 'gold', 'go'], 0, '"Goal" = meta.');

    // Routine
    mc('"I ___ up at 7 am."', ['get', 'wake', 'stand'], 1, '"Wake up" = despertarse.');
    mc('"I ___ ready for school."', ['make', 'get', 'do'], 1, '"Get ready" = prepararse.');
    mc('"I ___ by bus."', ['commute', 'commuting', 'commuted'], 0, '"Commute" = viajar al trabajo/escuela.');
    mc('"I ___ study at night." (normalmente)', ['usually', 'sometimes', 'rarely'], 0, '"Usually" = usualmente.');
    mc('"___ I watch videos in English." (a veces)', ['Usually', 'Sometimes', 'Always'], 1, '"Sometimes" = a veces.');
    mc('"I ___ a break after class."', ['do', 'make', 'take'], 2, '"Take a break" = tomar un descanso.');
    mc('"___ weekdays, I am busy."', ['In', 'On', 'At'], 1, '"On weekdays" = entre semana.');
    mc('"___ weekends, I rest."', ['In', 'On', 'At'], 2, '"On weekends" = los fines de semana.');

    // Food
    mc('"Can I see the ___?" (menú)', ['menu', 'menus', 'menú'], 0, '"Menu" es la palabra correcta en inglés.');
    mc('"I would like to ___ a sandwich."', ['order', 'ordering', 'ordered'], 0, '"Order" = ordenar (verbo base después de "to").');
    mc('"Can I have the ___?" (cuenta)', ['bill', 'pay', 'cost'], 0, '"Bill/check" = cuenta en un restaurante.');
    mc('"The food is ___." (picante)', ['spicy', 'spice', 'spiced'], 0, '"Spicy" = picante.');
    mc('"The dessert was ___." (delicioso)', ['delicious', 'delight', 'delicius'], 0, '"Delicious" = delicioso.');
    mc('"I made a ___." (reservación)', ['reservation', 'reserve', 'reserv'], 0, '"Reservation" = reservación.');
    mc('"What do you ___?" (recomendar)', ['recommend', 'recommendation', 'recommending'], 0, '"Recommend" = recomendar.');
    mc('"I ordered ___." (comida para llevar)', ['takeout', 'take off', 'take away'], 0, '"Takeout" = comida para llevar.');

    // Shopping
    mc('"What is the ___?" (precio)', ['cost', 'price', 'pay'], 1, '"Price" = precio.');
    mc('"Is there a ___?" (descuento)', ['discount', 'disccount', 'discounting'], 0, '"Discount" = descuento.');
    mc('"Can I have a ___?" (recibo)', ['receipt', 'recipe', 'receive'], 0, '"Receipt" = recibo (la p es muda).');
    mc('"I paid in ___." (efectivo)', ['cash', 'card', 'money'], 0, '"Cash" = efectivo.');
    mc('"It is too ___." (caro)', ['cheap', 'expensive', 'high'], 1, '"Expensive" = caro.');
    mc('"This one is ___." (más barato)', ['cheap', 'cheaper', 'cheapest'], 1, '"Cheaper" = más barato (comparativo).');

    // Travel
    mc('"My ___ leaves at 8." (vuelo)', ['flight', 'fly', 'plane'], 0, '"Flight" = vuelo.');
    mc('"I bought a ___." (boleto)', ['ticket', 'tiket', 'tick'], 0, '"Ticket" = boleto.');
    mc('"Where is the bus ___?" (parada)', ['stop', 'station', 'terminal'], 0, '"Bus stop" = parada de autobús.');
    mc('"I need to ___ in." (registrarme)', ['check', 'checking', 'checked'], 0, '"Check in" = registrarse (verbo base).');
    mc('"My ___ is heavy." (equipaje)', ['luggage', 'bag', 'package'], 0, '"Luggage" = equipaje (incontable).');
    mc('"I booked a ___ room." (individual)', ['single', 'one', 'alone'], 0, '"Single room" = habitación individual.');
    mc('"Can you give me ___?" (direcciones)', ['directions', 'direction', 'directs'], 0, '"Directions" = indicaciones/direcciones.');

    // Health
    mc('"I have a ___." (dolor de cabeza)', ['headache', 'head pain', 'headhurt'], 0, '"Headache" = dolor de cabeza.');
    mc('"I have a ___ throat." (dolor de garganta)', ['sore', 'pain', 'hurt'], 0, '"Sore throat" = dolor de garganta.');
    mc('"I have a doctor\'s ___." (cita)', ['date', 'appointment', 'meeting'], 1, '"Appointment" = cita médica.');
    mc('"I ___ twice a week." (hago ejercicio)', ['exercise', 'make exercise', 'do exercise'], 0, '"Exercise" como verbo = hacer ejercicio.');
    mc('"I try to eat ___ food." (saludable)', ['healthy', 'health', 'healty'], 0, '"Healthy" = saludable.');
    mc('"I feel ___ today." (cansado)', ['tire', 'tired', 'tiring'], 1, '"Tired" = cansado.');

    // Technology
    mc('"My phone is an important ___." (dispositivo)', ['device', 'devise', 'divice'], 0, '"Device" = dispositivo.');
    mc('"I ___ an app." (descargué)', ['download', 'downloaded', 'downloading'], 1, 'Pasado simple: "downloaded".');
    mc('"I have an ___." (tarea/ trabajo)', ['assignment', 'assign', 'homework'], 0, '"Assignment" = tarea o trabajo asignado.');
    mc('"The ___ is tomorrow." (fecha límite)', ['deadline', 'dead line', 'limit'], 0, '"Deadline" = fecha límite.');
    mc('"I have a ___ at 3." (reunión)', ['meeting', 'meet', 'meat'], 0, '"Meeting" = reunión.');
    mc('"I want to ___ my English." (mejorar)', ['improve', 'prove', 'improvement'], 0, '"Improve" = mejorar.');

    // Opinions
    mc('"___ my opinion, practice is necessary."', ['On', 'In', 'At'], 1, '"In my opinion" = en mi opinión.');
    mc('"A ___ person is organized." (responsable)', ['responsible', 'response', 'responsive'], 0, '"Responsible" = responsable.');
    mc('"___ is important." (honestidad)', ['Honest', 'Honesty', 'Honestly'], 1, '"Honesty" = honestidad (sustantivo).');
    mc('"I ___ with you." (estoy de acuerdo)', ['agree', 'agreement', 'agreeable'], 0, '"Agree" = estar de acuerdo.');
    mc('"I want to feel more ___." (seguro/confiado)', ['confident', 'confidence', 'confidential'], 0, '"Confident" = seguro/confiado (adjetivo).');
    tf('"I think" y "In my opinion" son formas de expresar opinión.', true, 'Correcto. Ambas se usan para dar opiniones.');
    tf('"Disagree" significa estar de acuerdo.', false, '"Disagree" = no estar de acuerdo.');

    return qs;
  })();

  const speakingQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    // Fórmula de respuesta B1
    mc('¿Cuál es el primer paso de la fórmula de respuesta B1?', ['Respuesta directa', 'Razón', 'Ejemplo personal', 'Cierre'], 0, 'Paso 1: respuesta directa a la pregunta.');
    mc('¿Qué viene después de dar la respuesta directa?', ['Un saludo', 'La razón', 'El cierre', 'Una pregunta'], 1, 'Paso 2: dar la razón de tu respuesta.');
    mc('¿Qué ayuda a hacer tu respuesta más natural?', ['Un ejemplo o detalle personal', 'Una palabra difícil', 'Silencio'], 0, 'Paso 3: incluir un ejemplo o detalle personal.');
    mc('¿Cómo se cierra una respuesta B1?', ['Con un saludo', 'Con un cierre sencillo', 'Con una pregunta'], 1, 'Paso 4: cierre sencillo como "That is why...".');
    mc('¿Qué estructura sigue una buena respuesta B1?', ['Respuesta + razón + ejemplo + cierre', 'Solo respuesta', 'Pregunta + respuesta'], 0, 'La fórmula de 4 pasos da claridad y naturalidad.');

    // Frases para ganar tiempo
    mc('¿Qué frase puedes usar para pensar antes de responder?', ['Let me think for a second', 'I am finished', 'Goodbye'], 0, '"Let me think for a second" te da tiempo para organizar tu respuesta.');
    mc('Si no entiendes la pregunta, ¿qué puedes decir?', ['Could you repeat the question?', 'I do not know', 'Next question'], 0, 'Pedir repetición es normal y aceptable en un examen.');
    mc('¿Qué frase ayuda a introducir una opinión?', ['In my opinion', 'I am', 'Yesterday'], 0, '"In my opinion" introduce tu punto de vista.');
    mc('¿Cómo puedes agregar otra razón a tu respuesta?', ['Another reason is...', 'I am tired', 'No'], 0, '"Another reason is..." amplía tu respuesta.');
    mc('¿Qué frase usas para dar un ejemplo?', ['For example', 'But', 'Because'], 0, '"For example" introduce un ejemplo concreto.');

    // Preguntas típicas
    mc('Tell me about yourself: ¿con qué empiezas?', ['My name is...', 'I like pizza', 'Yesterday I...'], 0, 'Empieza con tu nombre, origen y lo que haces.');
    mc('What do you usually do on weekdays? habla de...', ['tu rutina diaria', 'tus vacaciones', 'tus planes lejanos'], 0, 'Describe actividades regulares: wake up, study, work, rest.');
    mc('What did you do last weekend? requiere...', ['pasado simple', 'presente simple', 'futuro'], 0, '"Last weekend" indica pasado, usa Past Simple.');
    mc('What are you going to do next year? habla de...', ['planes futuros', 'rutina diaria', 'experiencias pasadas'], 0, 'Usa "going to" o "will" para hablar del futuro.');
    mc('Do you prefer studying alone or with others? pide...', ['una opinión con razón', 'solo una palabra', 'una historia larga'], 0, 'Da tu preferencia y explica por qué.');
    mc('Describe a place you like: debes dar...', ['detalles del lugar y por qué te gusta', 'solo el nombre', 'la dirección'], 0, 'Describe el lugar y da razones personales.');
    mc('What is difficult about learning English? es una pregunta de...', ['opinión y experiencia personal', 'gramática', 'vocabulario'], 0, 'Habla de tu experiencia y lo que se te dificulta.');
    mc('What technology do you use every day? contesta con...', ['ejemplos de tecnología y su utilidad', 'solo el nombre de un aparato', 'una definición técnica'], 0, 'Da ejemplos concretos y explica para qué los usas.');
    mc('What should people do to be healthy? pide...', ['consejos con "should"', 'síntomas médicos', 'diagnósticos'], 0, 'Usa "should" para dar recomendaciones de salud.');
    mc('Have you ever traveled? usa...', ['presente perfecto', 'pasado simple', 'futuro'], 0, '"Have you ever" requiere presente perfecto para experiencias.');

    fb('Completa la fórmula: "I am studying English ___ I want to improve."', 'because', '"Because" introduce la razón.');
    fb('Completa: "___ me think for a second."', 'Let', 'Expresión para ganar tiempo.');
    fb('Completa: "In my ___, practice is important."', 'opinion', '"In my opinion" = en mi opinión.');
    fb('Completa: "___ example, I use my phone for English."', 'For', '"For example" introduce un ejemplo.');
    fb('Completa: "Another ___ is that English helps at work."', 'reason', '"Another reason is..." agrega otro punto.');
    fb('Completa: "That is ___ English is important for me."', 'why', '"That is why..." cierra la respuesta.');
    fb('Completa: "To be ___ , I find speaking difficult."', 'honest', '"To be honest" introduce una opinión sincera.');
    fb('Completa la respuesta: "I am ___ Mexico."', 'from', '"I am from" indica origen.');
    fb('Completa: "I ___ studying English because I want a better job."', 'am', 'Present continuous con "am" para acción actual.');
    fb('Completa el consejo: "People ___ sleep well and exercise."', 'should', '"Should" para dar recomendaciones.');

    tf('En speaking B1 es aceptable pedir que repitan la pregunta.', true, 'Pedir repetición es normal y muestra control.');
    tf('La fórmula de respuesta B1 tiene 2 pasos.', false, 'Tiene 4 pasos: respuesta, razón, ejemplo, cierre.');
    tf('"For example" se usa para dar un detalle personal.', true, 'Correcto, introduce un ejemplo concreto.');
    tf('Debes memorizar respuestas largas sin cambios.', false, 'Es mejor entender la estructura y adaptarla.');
    tf('El cierre ayuda a terminar la respuesta con claridad.', true, 'Un cierre como "That is why..." da una sensación de finalización.');
    tf('En un examen de ubicación puedes usar lenguaje sencillo.', true, 'No necesitas vocabulario complejo; claridad es suficiente.');
    tf('Debes evitar decir "I don\'t know" en cualquier situación.', false, 'Es mejor que inventar una respuesta incorrecta.');

    // More questions
    mc('Tell me about yourself: ¿qué información NO debe faltar?', ['Nombre, origen, ocupación e intereses', 'Solo el nombre', 'Tu comida favorita'], 0, 'Una presentación completa incluye nombre, origen y lo que haces.');
    mc('¿Qué tiempo verbal usas para hablar de tu rutina?', ['Present Simple', 'Past Simple', 'Present Perfect'], 0, 'La rutina diaria se expresa en presente simple.');
    mc('¿Qué tiempo verbal usas para hablar del fin de semana pasado?', ['Past Simple', 'Present Simple', 'Future'], 0, 'Eventos pasados requieren pasado simple.');
    mc('¿Qué expresión usas para introducir tu opinión?', ['In my opinion', 'Yesterday', 'For example'], 0, '"In my opinion" introduce tu punto de vista.');
    mc('Para describir un lugar, ¿qué detalles son útiles?', ['Cómo es, qué puedes hacer allí, por qué te gusta', 'Solo el nombre', 'La dirección exacta'], 0, 'Describe el lugar con detalles sensoriales y personales.');
    mc('¿Cómo puedes hacer tu respuesta más natural?', ['Con un ejemplo personal', 'Con silencios largos', 'Hablando muy rápido'], 0, 'Los ejemplos personales hacen tu respuesta única y natural.');
    mc('Si no entiendes una palabra en la pregunta, ¿qué haces?', ['Pides que repitan o reformulen', 'Te quedas en silencio', 'Cambias de tema'], 0, 'Pedir repetición es normal y aceptable.');
    mc('¿Qué estructura usas para un monólogo de 60 segundos?', ['Intro + detalles + opinión + cierre', 'Solo opinión', 'Preguntas y respuestas'], 0, 'La estructura de 4 partes organiza tu monólogo.');
    mc('¿Cuál es un ejemplo de cierre para tu respuesta?', ['That is why English is important for me', 'I am tired', 'Goodbye'], 0, 'El cierre resume por qué tu respuesta es relevante.');
    mc('Para hablar de planes futuros, ¿qué estructura usas?', ['going to / will', 'Pasado simple', 'Presente perfecto'], 0, 'Planes futuros se expresan con "going to" o "will".');

    fb('Completa: "I am ___ Mexico." (origen)', 'from', '"I am from" + país o ciudad de origen.');
    fb('Completa: "I am ___ studying English." (actualmente)', 'currently', '"Currently" indica que está sucediendo ahora.');
    fb('Completa: "My ___ is to reach B1." (meta)', 'goal', '"Goal" = meta u objetivo.');
    fb('Completa: "___ the most difficult part is speaking." (para mí)', 'For me', '"For me" introduce tu experiencia personal.');
    fb('Completa: "I ___ with you because..." (estoy de acuerdo)', 'agree', '"I agree" expresa acuerdo con una idea.');
    fb('Completa: "I ___ from home on weekends." (descanso)', 'rest', '"Rest" = descansar o relajarse.');
    fb('Completa: "___ I was tired, I studied anyway." (aunque)', 'Although', '"Although" introduce un contraste.');

    mc('¿Qué significa "I would like to visit London"?', ['Me gustaría visitar Londres', 'Visité Londres', 'Odio Londres'], 0, '"I would like to" expresa un deseo o plan.');
    mc('¿Cómo respondes "What are your hobbies?"', ['I like watching videos and listening to music', 'I am a student', 'I live in Merida'], 0, 'Los hobbies se expresan con "I like" + actividad.');
    mc('¿Cómo respondes "Why are you studying English?"', ['Because I want to improve my opportunities', 'I am 18 years old', 'I live in Merida'], 0, '"Because" introduce la razón para estudiar inglés.');

    return qs;
  })();

  const readingQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    // Técnica de lectura rápida
    mc('¿Qué debes hacer primero al leer un texto?', ['Leer el título y predecir el tema', 'Traducir cada palabra', 'Leer todo rápido'], 0, 'El título da pistas sobre el contenido.');
    mc('¿Qué elementos debes buscar al leer un texto?', ['Nombres, fechas, lugares y números', 'Solo adjetivos', 'Palabras difíciles'], 0, 'Estos datos te ayudan a entender detalles clave.');
    mc('¿Qué partes del texto debes leer primero?', ['Primera y última oración de cada párrafo', 'Solo el primer párrafo', 'El último párrafo'], 0, 'Esto te da la idea general rápidamente.');
    mc('¿Qué tipo de palabras debes subrayar?', ['Conectores como but, because, so, however', 'Todas las palabras', 'Las que no entiendes'], 0, 'Los conectores muestran la relación entre ideas.');
    mc('¿Qué preguntas debes responder primero?', ['Las fáciles', 'Las difíciles', 'Las de vocabulario'], 0, 'Responder lo seguro primero da confianza y tiempo.');
    mc('¿Qué debes evitar al leer?', ['Traducir palabra por palabra', 'Leer el título', 'Buscar números'], 0, 'Traducir todo ralentiza y no es necesario.');

    mc('Learning English is not only about grammar. Many students know rules, but they feel nervous when they have to speak. A good way to improve is to practice a little every day. ¿Cuál es la idea principal?', ['El inglés mejora con práctica diaria, no solo gramática', 'La gramática es lo único importante', 'Los estudiantes no necesitan practicar'], 0, 'El texto dice que la práctica diaria es clave.');
    mc('¿Por qué se sienten nerviosos muchos estudiantes?', ['Porque tienen que hablar', 'Porque no estudian vocabulario', 'Porque el inglés es difícil'], 0, 'Saber reglas no es suficiente; hablar causa nervios.');
    mc('¿Qué actividades recomienda el texto?', ['Escuchar, repetir frases y escribir párrafos', 'Solo leer libros', 'Solo hacer ejercicios de gramática'], 0, 'Escuchar conversaciones, repetir frases y escribir párrafos.');
    mc('¿Por qué son importantes los errores según el texto?', ['Muestran lo que necesitas estudiar después', 'Son malos y deben evitarse', 'Significan que no aprendes'], 0, 'Los errores indican áreas de mejora.');
    mc('Un texto sobre daily routine probablemente incluirá...', ['wake up, work, study, rest', 'astronaut, rocket, space', 'government, election, law'], 0, 'La rutina diaria usa vocabulario de actividades cotidianas.');
    mc('Un texto sobre tecnología mencionará probablemente...', ['phone, computer, app, device', 'tree, river, mountain', 'pen, paper, book'], 0, 'Vocabulario de tecnología: device, download, upload, app.');

    fb('La primera técnica de lectura es ___ el tema por el título.', 'predecir', 'Predecir el tema ayuda a activar vocabulario conocido.');
    fb('Busca ___, fechas, lugares y números en el texto.', 'nombres', 'Los nombres propios dan contexto sobre quién y dónde.');
    fb('Lee la primera y última ___ de cada párrafo.', 'oración', 'La primera oración suele dar la idea principal.');
    fb('Los ___ como "but" y "because" muestran relaciones entre ideas.', 'conectores', 'Conectores guían la comprensión del texto.');
    fb('Responde primero las preguntas ___ y luego las difíciles.', 'fáciles', 'Gana tiempo y confianza con las preguntas seguras.');

    tf('Debes traducir cada palabra del texto al español.', false, 'Traducir todo es lento e innecesario. Busca la idea general.');
    tf('El título del texto ayuda a predecir el tema.', true, 'El título da pistas importantes sobre el contenido.');
    tf('Leer la primera oración de cada párrafo da la idea general.', true, 'La primera oración suele ser la topic sentence.');
    tf('Los conectores no son importantes para entender el texto.', false, 'Los conectores muestran la relación entre ideas.');
    tf('Es mejor responder primero las preguntas difíciles.', false, 'Responde primero las fáciles para ganar tiempo y confianza.');
    tf('Buscar nombres y números ayuda a encontrar detalles rápido.', true, 'Estos datos son fáciles de localizar en el texto.');

    // More questions
    mc('Un texto sobre "My favorite place" probablemente...', ['describe un lugar y da razones personales', 'solo da direcciones', 'habla de tecnología'], 0, 'Textos descriptivos incluyen detalles y opiniones personales.');
    mc('Un texto sobre "A healthy lifestyle" mencionará...', ['exercise, food, sleep, habits', 'computers, apps, devices', 'planes, trains, cars'], 0, 'Salud y bienestar usan vocabulario de hábitos.');
    mc('Un texto que empieza con "First, I wake up..." trata de...', ['una rutina diaria', 'un viaje', 'una opinión'], 0, '"First" indica una secuencia de acciones rutinarias.');
    mc('Un correo que dice "I am writing because..." es...', ['informativo o de solicitud', 'una historia de ficción', 'un poema'], 0, 'Los correos formales comienzan indicando el propósito.');
    mc('Un texto con "however" y "on the other hand" está...', ['contrastando ideas', 'dando ejemplos', 'narrando una historia'], 0, 'Estos conectores señalan contraste entre ideas.');
    mc('Un texto que menciona "yesterday, last weekend, ago" está en...', ['pasado simple', 'presente simple', 'futuro'], 0, 'Estos marcadores indican tiempo pasado.');

    fb('Al leer, ___ el tema por el título antes de empezar.', 'predice', 'Predecir activa tu conocimiento previo del tema.');
    fb('Subraya los ___ como "but" y "because" en el texto.', 'conectores', 'Conectores muestran relaciones lógicas entre ideas.');
    fb('La primera oración de un párrafo suele ser la ___ sentence.', 'topic', 'La topic sentence presenta la idea principal del párrafo.');
    fb('Para encontrar detalles rápido, busca ___ , fechas y lugares.', 'nombres', 'Los nombres propios son fáciles de localizar visualmente.');

    tf('Skimming significa leer cada palabra cuidadosamente.', false, 'Skimming es lectura rápida para idea general.');
    tf('Scanning es buscar información específica en el texto.', true, 'Scanning es buscar datos concretos como números o fechas.');
    tf('El título de un texto no es importante para entenderlo.', false, 'El título da pistas clave sobre el contenido.');
    tf('Los conectores ayudan a entender la estructura del texto.', true, 'Conectores organizan y conectan las ideas del texto.');
    tf('Debes responder las preguntas en el orden en que aparecen.', false, 'Responde primero las fáciles, después las difíciles.');
    tf('Leer en voz alta ayuda a mejorar comprensión lectora.', true, 'Leer en voz alta refuerza pronunciación y comprensión.');
    tf('Un párrafo bien escrito tiene una idea principal clara.', true, 'Cada párrafo debe desarrollar una sola idea principal.');
    tf('El vocabulario desconocido siempre debes buscarlo en el diccionario.', false, 'Primero intenta adivinar el significado por contexto.');

    mc('¿Qué significa inferred el significado por contexto?', ['Deducir el significado usando las palabras alrededor', 'Buscar en diccionario', 'Preguntar al profesor'], 0, 'Inferir por contexto es una habilidad clave de lectura.');
    mc('Un texto con "First... Then... After that... Finally" está...', ['describiendo un proceso o secuencia', 'dando una opinión', 'comparando dos cosas'], 0, 'Estos conectores organizan pasos en orden.');
    mc('Un texto que describe "a beautiful beach with white sand" es...', ['descriptivo', 'instructivo', 'argumentativo'], 0, 'Textos descriptivos usan adjetivos para crear imágenes.');
    mc('Si un texto dice "I recommend this restaurant because..." es...', ['una reseña o recomendación', 'una noticia', 'un instructivo'], 0, 'Las reseñas expresan opiniones y recomendaciones.');
    mc('Para textos largos, es útil leer...', ['el primer párrafo y la conclusión primero', 'solo el medio', 'empezar desde el final'], 0, 'Primer párrafo y conclusión dan la idea general.');
    mc('¿Qué significa "main idea" de un texto?', ['La idea principal que el autor quiere comunicar', 'La primera oración', 'El título'], 0, 'La main idea es el mensaje central del texto.');

    return qs;
  })();

  const listeningQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    // Método de 3 escuchas
    mc('¿Cuál es el objetivo de la primera escucha?', ['Idea general', 'Todos los detalles', 'Vocabulario nuevo'], 0, 'Primera escucha: entender de qué trata la conversación.');
    mc('¿Qué debes hacer en la segunda escucha?', ['Anotar detalles: números, lugares, fechas', 'Solo relajarte', 'Traducir todo'], 0, 'Segunda escucha: enfocarse en información específica.');
    mc('¿Qué debes hacer en la tercera escucha?', ['Copiar frases útiles para speaking', 'Cerrar el cuaderno', 'Hablar al mismo tiempo'], 0, 'Tercera escucha: identificar lenguaje que puedes usar.');
    mc('¿Qué NO debes hacer al escuchar?', ['Traducir todo mientras escuchas', 'Prestar atención a palabras clave', 'Identificar quiénes hablan'], 0, 'Traducir todo mientras escuchas te retrasa.');
    mc('Al escuchar, pregúntate: ¿de qué hablan? ¿quiénes son? ¿dónde están? Esto ayuda a entender...', ['la situación general', 'cada palabra', 'la gramática'], 0, 'Identificar el contexto ayuda a comprender el resto.');

    // Palabras clave
    mc('¿Qué palabra indica contraste?', ['but', 'because', 'so'], 0, '"But" contrasta dos ideas opuestas.');
    mc('¿Qué palabra indica una razón?', ['because', 'however', 'finally'], 0, '"Because" introduce la causa de algo.');
    mc('¿Qué palabra indica un resultado?', ['so', 'but', 'first'], 0, '"So" expresa la consecuencia de algo.');
    mc('¿Qué palabra indica secuencia?', ['first', 'because', 'although'], 0, '"First" ordena los pasos de una secuencia.');
    mc('¿Qué palabra introduce una opinión?', ['I think', 'but', 'then'], 0, '"I think" introduce una opinión personal.');
    mc('¿Qué palabra indica preferencia?', ['I prefer', 'first', 'so'], 0, '"I prefer" expresa preferencia entre opciones.');
    mc('¿Qué palabra significa "sin embargo"?', ['however', 'because', 'also'], 0, '"However" contrasta ideas de forma similar a "but".');

    mc('Si escuchas "but", esperas...', ['una idea contraria', 'una razón', 'un ejemplo'], 0, '"But" introduce un contraste con lo anterior.');
    mc('Si escuchas "because", esperas...', ['una explicación o causa', 'un resultado', 'una secuencia'], 0, '"Because" da la razón de algo.');
    mc('Si escuchas "so", esperas...', ['una consecuencia', 'una opinión', 'un contraste'], 0, '"So" indica el resultado de una acción.');
    mc('Si escuchas "first, then, after that", esperas...', ['una secuencia de pasos', 'una opinión', 'un contraste'], 0, 'Estas palabras organizan información en orden.');
    mc('Si escuchas "in my opinion", esperas...', ['una opinión personal', 'un hecho objetivo', 'una pregunta'], 0, '"In my opinion" introduce una perspectiva subjetiva.');

    fb('En la primera escucha, busca la ___ general.', 'idea', 'No necesitas detalles aún, solo el tema principal.');
    fb('En la segunda escucha, anota ___, lugares y fechas.', 'números', 'Los números y datos concretos son detalles clave.');
    fb('En la tercera escucha, copia ___ completas.', 'frases', 'Frases útiles que puedes usar en tu speaking.');
    fb('"___" indica contraste entre dos ideas.', 'But', '"But" conecta ideas opuestas.');
    fb('"___" introduce una razón o causa.', 'Because', '"Because" explica por qué algo sucede.');

    tf('En la primera escucha debes entender cada palabra.', false, 'Primera escucha: solo idea general, no cada palabra.');
    tf('Las palabras como "but" y "however" indican contraste.', true, 'Ambas señalan una idea opuesta a lo anterior.');
    tf('"So" se usa para introducir un resultado.', true, 'Correcto: "I was tired, so I went home."');
    tf('Debes traducir al español mientras escuchas.', false, 'Traducir mientras escuchas dificulta la comprensión.');
    tf('Es útil preguntarse quiénes son y dónde están al escuchar.', true, 'Identificar el contexto facilita la comprensión global.');
    tf('"First" se usa para introducir una opinión.', false, '"First" indica el primer paso de una secuencia.');

    // More questions
    mc('¿Qué tipo de información buscas en la segunda escucha?', ['Detalles específicos: números, lugares, fechas', 'Solo la idea general', 'Palabras nuevas'], 0, 'Segunda escucha: detalles concretos.');
    mc('¿Qué significa "that is why" en una conversación?', ['Introduce una conclusión o resultado', 'Una pregunta', 'Un saludo'], 0, '"That is why" explica la razón de algo mencionado.');
    mc('Si escuchas "on the other hand", esperas...', ['un punto de vista opuesto', 'un ejemplo', 'una conclusión'], 0, '"On the other hand" introduce el lado opuesto de un argumento.');
    mc('¿Qué debes hacer si el listening es muy rápido?', ['Escuchar varias veces, enfocándote en diferente información cada vez', 'Rendirte', 'Solo escuchar una vez'], 0, 'El método de 3 escuchas ayuda con audios rápidos.');
    mc('¿Qué información es útil identificar al inicio?', ['Quiénes hablan, dónde están y de qué hablan', 'Cada palabra', 'La fecha exacta'], 0, 'El contexto general ayuda a entender detalles después.');
    mc('¿Qué tipo de palabras son fáciles de identificar en listening?', ['Números, nombres y lugares', 'Conectores complejos', 'Adjetivos raros'], 0, 'Los números y nombres propios son más fáciles de reconocer.');
    mc('Si escuchas "I guess", la persona está...', ['expresando una opinión no definitiva', 'dando un hecho', 'haciendo una pregunta'], 0, '"I guess" indica una opinión o suposición.');
    mc('Si escuchas "I would rather", la persona está...', ['expresando preferencia', 'dando una orden', 'hablando del pasado'], 0, '"I would rather" expresa preferencia entre opciones.');
    mc('¿Qué conectores indican que viene una conclusión?', ['so, therefore, that is why', 'but, however, although', 'first, then, after that'], 0, 'Estos conectores introducen un resultado o conclusión.');

    fb('En la primera escucha, enfócate en la idea ___.', 'general', 'No necesitas detalles todavía.');
    fb('En la segunda escucha, anota ___ como precios o fechas.', 'números', 'Los números son detalles clave en listening.');
    fb('"___ the other hand" introduce un contraste.', 'On', '"On the other hand" = por otro lado.');
    fb('"___ " indica que alguien va a dar su opinión.', 'I think', '"I think" introduce una opinión personal.');
    fb('"___ " significa "prefiero".', 'I prefer', '"I prefer" expresa preferencia.');
    fb('Cuando escuches "___ ", espera una consecuencia.', 'so', '"So" señala el resultado de algo.');

    tf('En la tercera escucha debes copiar frases completas útiles.', true, 'Tercera escucha: identifica lenguaje para tu speaking.');
    tf('Las palabras de contraste son difíciles de escuchar.', false, 'Palabras como "but" son cortas pero fáciles de identificar.');
    tf('Es normal no entender cada palabra en un listening.', true, 'No necesitas entender todo; enfócate en información clave.');
    tf('Los números son más fáciles de identificar en listening.', true, 'Los números destacan y dan información precisa.');
    tf('Si el audio es rápido, solo escúchalo una vez.', false, 'Usa el método de 3 escuchas para diferentes propósitos.');
    tf('Identificar a los hablantes ayuda a entender el contexto.', true, 'Saber quién habla y dónde ayuda a comprender el mensaje.');

    return qs;
  })();

  const writingQuestions = (() => {
    const qs = [];
    function mc(q, opts, ans, exp) { qs.push({ type: 'multiple-choice', question: q, options: opts, answer: ans, explanation: exp }); }
    function fb(q, ans, exp) { qs.push({ type: 'fill-blank', question: q, answer: ans, explanation: exp }); }
    function tf(q, ans, exp) { qs.push({ type: 'true-false', question: q, answer: ans, explanation: exp }); }

    // Estructura de párrafo
    mc('¿Cuál es el primer elemento de un párrafo?', ['Topic sentence (idea principal)', 'Un ejemplo', 'El cierre'], 0, 'La topic sentence presenta la idea principal del párrafo.');
    mc('¿Qué viene después de la topic sentence?', ['Detail 1: primera razón o detalle', 'El saludo', 'Una pregunta'], 0, 'Después de la idea principal, desarrolla con detalles.');
    mc('¿Cómo se cierra un párrafo?', ['Closing sentence: cierre sencillo', 'Una nueva idea', 'Una pregunta'], 0, 'El cierre resume o concluye la idea.');
    mc('¿Qué debe tener cada oración en inglés?', ['Sujeto y verbo', 'Solo un verbo', 'Dos adjetivos'], 0, 'Toda oración completa necesita sujeto y verbo.');
    mc('¿Qué conectores son útiles para escribir párrafos?', ['because, but, also, so', 'however, although, first, then', 'Todas las anteriores'], 2, 'Todos estos conectores mejoran la claridad del texto.');

    // Emails
    mc('¿Cómo empiezas un email informal?', ['Hi Ana,', 'Dear Sir,', 'To whom it may concern,'], 0, '"Hi + nombre" es apropiado para emails informales.');
    mc('¿Qué frase usas para iniciar un email?', ['I hope you are well.', 'The end.', 'Goodbye.'], 0, 'Un saludo inicial cordial como "I hope you are well."');
    mc('¿Cómo expresas el motivo del email?', ['I am writing because...', 'I like pizza.', 'Yesterday I...'], 0, '"I am writing because..." introduce el propósito.');
    mc('¿Cómo cierras un email formal?', ['Best regards,', 'See you!', 'Bye'], 0, '"Best regards" es un cierre formal apropiado.');
    mc('¿Cómo pides algo amablemente en un email?', ['Could you...?', 'Give me...', 'I want...'], 0, '"Could you..." es una forma cortés de pedir.');

    // Writing tasks
    mc('Para escribir sobre tu rutina diaria, ¿qué tiempo verbal usas?', ['Present Simple', 'Past Simple', 'Future'], 0, 'La rutina diaria se describe en presente simple.');
    mc('Para escribir sobre tus últimas vacaciones, ¿qué tiempo usas?', ['Past Simple', 'Present Simple', 'Present Perfect'], 0, 'Las vacaciones pasadas requieren pasado simple.');
    mc('Para escribir un párrafo de opinión, ¿cómo empiezas?', ['I think... / In my opinion...', 'Yesterday...', 'First...'], 0, 'Las opiniones se introducen con "I think" o "In my opinion".');
    mc('¿Qué debe tener un buen párrafo de opinión?', ['Idea principal, razón, ejemplo y cierre', 'Solo una oración larga', 'Muchas preguntas'], 0, 'Un párrafo de opinión sigue la misma estructura.');

    // Checklist
    mc('¿Qué debes revisar antes de entregar un writing?', ['Sujeto y verbo en cada oración', 'Que sea muy largo', 'Que tenga palabras difíciles'], 0, 'Cada oración debe tener sujeto y verbo claros.');
    mc('¿Qué más debes revisar?', ['Mayúscula al inicio y punto al final', 'Que no haya conectores', 'Que solo tenga preguntas'], 0, 'La puntuación básica es esencial para la claridad.');
    mc('¿Qué error común debes evitar en third person?', ['Olvidar la -s en he/she/it', 'Usar mayúsculas', 'Poner punto final'], 0, 'He/she/it requiere verbo con -s en presente simple.');
    mc('¿Qué debes revisar en preguntas y negativas en pasado?', ['Did + verb base (sin pasado)', 'Usar pasado en ambos verbos', 'Poner "to" después de did'], 0, 'Después de "did", el verbo vuelve a forma base.');
    mc('¿Por qué es importante usar conectores?', ['Conectan ideas y hacen el texto más claro', 'Son obligatorios en cada oración', 'Solo se usan en writing formal'], 0, 'Los conectores mejoran la fluidez y claridad.');

    fb('Completa: "I am writing ___ I need information."', 'because', '"Because" introduce la razón del email.');
    fb('Completa: "I ___ you are well." (espero)', 'hope', '"I hope you are well" es un saludo inicial común.');
    fb('Completa: "___ Regards,"', 'Best', '"Best regards" es un cierre formal estándar.');
    fb('Completa: "Thank you ___ your help."', 'for', '"Thank you for" agradece por algo específico.');
    fb('Completa el consejo: "You ___ practice every day."', 'should', '"Should" da recomendaciones.');
    fb('Completa: "In my ___, technology is useful."', 'opinion', '"In my opinion" introduce la perspectiva personal.');
    fb('Completa: "___ , I wake up at 7 am."', 'First', '"First" ordena la secuencia de actividades.');
    fb('Completa: "I like English, ___ speaking is difficult."', 'but', '"But" contrasta dos ideas.');
    fb('Completa: "I studied hard, ___ I passed the exam."', 'so', '"So" expresa el resultado.');
    fb('Completa: "Each ___ should have a subject and verb."', 'sentence', 'Cada oración necesita sujeto y verbo.');

    tf('Un párrafo debe tener solo una oración.', false, 'Un párrafo tiene varias oraciones: idea, detalles, cierre.');
    tf('"I think" y "In my opinion" son formas de expresar opinión.', true, 'Ambas introducen una opinión personal.');
    tf('En un email formal puedes usar "Hey!" como saludo.', false, '"Hey!" es muy informal. Usa "Dear" o "Hi" + nombre.');
    tf('Después de "did" el verbo va en pasado.', false, 'Después de "did" el verbo va en forma base: "I didn\'t go".');
    tf('Es importante revisar mayúsculas y puntos en writing.', true, 'La puntuación básica mejora la claridad del texto.');
    tf('Los conectores hacen que un texto sea más claro.', true, 'Conectores como "because", "but", "so" guían al lector.');
    tf('En tercera persona (he/she/it) el verbo lleva -s.', true, 'Correcto: "She works", "He studies".');

    // More questions
    mc('¿Qué tipo de writing usa "Hi Ana" como saludo?', ['Email informal', 'Ensayo académico', 'Poema'], 0, '"Hi + nombre" es típico de emails informales.');
    mc('¿Cómo expresas gratitud en un email?', ['Thank you for your help', 'I am tired', 'Goodbye'], 0, '"Thank you for" es una forma educada de agradecer.');
    mc('¿Qué conectores usas para secuenciar ideas?', ['First, then, after that, finally', 'But, however, although', 'Because, since, so'], 0, 'Los conectores de secuencia ordenan pasos o ideas.');
    mc('¿Qué tiempo verbal usas para escribir sobre tu rutina?', ['Present Simple', 'Past Simple', 'Future'], 0, 'La rutina diaria se describe en presente simple.');
    mc('¿Qué tiempo verbal usas para escribir sobre un viaje pasado?', ['Past Simple', 'Present Simple', 'Present Perfect'], 0, 'Eventos pasados y finalizados usan pasado simple.');
    mc('¿Qué debes evitar en writing B1?', ['Frases demasiado largas y complejas', 'Usar conectores', 'Escribir párrafos cortos'], 0, 'La claridad es más importante que la complejidad.');
    mc('¿Cómo empiezas un párrafo de opinión?', ['In my opinion... / I think...', 'Yesterday...', 'First...'], 0, 'Las opiniones se introducen con "In my opinion" o "I think".');
    mc('¿Qué debe tener un email formal al inicio?', ['Saludo + motivo del mensaje', 'Solo el nombre', 'Una pregunta'], 0, 'Un email formal comienza con saludo y propósito claro.');
    mc('Al escribir en pasado, ¿qué debes recordar?', ['Did + verb base en preguntas/negativas', 'Usar pasado en ambos verbos', 'Poner "to" después de did'], 0, '"Did" ya indica pasado, el verbo principal va en forma base.');
    mc('¿Qué ayuda a que un párrafo sea más claro?', ['Una idea principal por párrafo', 'Muchas ideas en un solo párrafo', 'Sin conectores'], 0, 'Cada párrafo debe desarrollar una sola idea.');

    fb('Completa: "I look ___ to your answer."', 'forward', '"I look forward to" es una expresión formal de expectativa.');
    fb('Completa: "Dear Mr. Smith" es un saludo ___ .', 'formal', '"Dear + apellido" es formal. "Hi + nombre" es informal.');
    fb('Completa: "___ , I wake up at 6 am." (primero)', 'First', '"First" introduce el primer paso de una secuencia.');
    fb('Completa: "___ that, I go to school." (después de eso)', 'After', '"After that" indica el siguiente paso.');
    fb('Completa: "I was tired, ___ I went to bed." (así que)', 'so', '"So" expresa el resultado de una situación.');
    fb('Completa: "___ I don\'t like coffee, I drink tea." (aunque)', 'Although', '"Although" introduce un contraste.');
    fb('Completa: "She ___ (work) every day." (tercera persona)', 'works', 'He/she/it requiere verbo con -s en presente simple.');
    fb('Completa: "They ___ (not/go) to the party yesterday."', 'didn\'t go', '"Didn\'t" + verbo base para negar en pasado.');

    tf('Un buen párrafo debe mezclar varios tiempos verbales sin razón.', false, 'Mantén un tiempo verbal consistente a menos que haya razón para cambiar.');
    tf('"I look forward to your answer" es un cierre formal.', true, 'Se usa en emails formales para expresar expectativa.');
    tf('En writing B1 es mejor usar oraciones cortas y claras.', true, 'La claridad es más importante que la complejidad.');
    tf('Los conectores hacen el texto más difícil de entender.', false, 'Los conectores mejoran la claridad y fluidez del texto.');
    tf('"Best regards" es apropiado para un email informal a un amigo.', false, '"Best regards" es formal. Para amigos usa "Best" o "See you".');
    tf('Cada oración en inglés necesita sujeto y verbo.', true, 'Toda oración completa tiene sujeto y verbo.');
    tf('Puedes mezclar presente y pasado libremente en un párrafo.', false, 'Cambiar de tiempo sin razón confunde al lector.');
    tf('Revisar mayúsculas y puntuación es importante en writing.', true, 'La puntuación correcta mejora la claridad del texto.');

    return qs;
  })();

  return {
    getDiagnosticQuestions() { return diagnosticQuestions; },
    getFundamentosQuestions() { return fundamentosQuestions; },
    getGramaticaQuestions() { return gramaticaQuestions; },
    getVocabularioQuestions() { return vocabularioQuestions; },
    getSpeakingQuestions() { return speakingQuestions; },
    getReadingQuestions() { return readingQuestions; },
    getListeningQuestions() { return listeningQuestions; },
    getWritingQuestions() { return writingQuestions; },
    getQuestions,
    shuffle,
    pickRandom,
    renderExerciseSet
  };
})();
