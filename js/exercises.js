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
      'vocabulario': vocabularioQuestions
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

  return {
    getDiagnosticQuestions() { return diagnosticQuestions; },
    getFundamentosQuestions() { return fundamentosQuestions; },
    getGramaticaQuestions() { return gramaticaQuestions; },
    getVocabularioQuestions() { return vocabularioQuestions; },
    getQuestions,
    shuffle,
    pickRandom,
    renderExerciseSet
  };
})();
