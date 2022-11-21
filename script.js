let natureQuiz = [{
    'quizname': 'nature',
    'question':
        'Welches Land wird wegen seiner riesigen Waldfächen, auch als Lunge der Erde bezeichnet?',
    'answerA': 'China',
    'answerB': 'Monaco',
    'answerC': 'Grönland',
    'answerD': 'Russland',
    'solution': 'Russland',
    'position': 0
},
{
    'question':
        'Welches Tier hat drei Herzen?',
    'answerA': 'Huhn',
    'answerB': 'Tintenfisch',
    'answerC': 'Wal',
    'answerD': 'Krähe',
    'solution': 'Tintenfisch',
    'position': 1
},
{
    'question':
        'Was ist ein Xoloitzcuintle?',
    'answerA': 'Argentinischer Kampfhahn',
    'answerB': 'Malaysischer Hirsch',
    'answerC': 'Mexikanischer Nackthund',
    'answerD': 'Afrikanischer Steppenvogel',
    'solution': 'Mexikanischer Nackthund',
    'position': 2

},
{
    'question':
        'Welches ist das grösste Lebewesen in der Natur?',
    'answerA': 'Blauwal',
    'answerB': 'Elefant',
    'answerC': 'Riesenfaultier',
    'answerD': 'Armillaria-Honigpilz',
    'solution': 'Armillaria-Honigpilz',
    'position': 3

},
{
    'question':
        'Bis zu wieviel Zähne wachsen einem Hai, während seines Lebens?',
    'answerA': '30.000',
    'answerB': '10.000',
    'answerC': '500',
    'answerD': '34',
    'solution': '30.000',
    'position': 4

},
{
    'question':
        'Nach was riecht der Titanwurz?',
    'answerA': 'Zuckerwatte',
    'answerB': 'Aas',
    'answerC': 'Regenwald',
    'answerD': 'Raubkatze',
    'solution': 'Aas',
    'position': 5

},
{
    'question':
        'Was haben Menschen mit Pflanzen gemein?',
    'answerA': 'Photosynthese',
    'answerB': 'Schwitzen',
    'answerC': 'Fieber',
    'answerD': 'Muskelkater',
    'solution': 'Fieber',
    'position': 6

},
{
    'question':
        'Was passiert mit einem Goldfisch wenn man ihn im Dunkeln hält?',
    'answerA': 'Stirbt',
    'answerB': 'vermehrt sich',
    'answerC': 'verliert seine Farbe',
    'answerD': 'wird Blind',
    'solution': 'verliert seine Farbe',
    'position': 7

},
{
    'question':
        'Welches am Land lebende Tier hat die größten Augen?',
    'answerA': 'Strauß',
    'answerB': 'Elefant',
    'answerC': 'Deutsche Dogge',
    'answerD': 'Walross',
    'solution': 'Strauß',
    'position': 8

},
{
    'question':
        'Welcher Baum verliert im Winter seine Nadeln?',
    'answerA': 'Zeder',
    'answerB': 'Eiche',
    'answerC': 'Lärche',
    'answerD': 'Tanne',
    'solution': 'Lärche',
    'position': 9

}];

let historyQuiz = [{
    'quizname': 'history',
    'question': 'Warum warf man in der Schweiz in den 80ern, etwa 52.000 Hühneköpfe aus Helikoptern?',
    'answerA': 'Seuchenexperimente',
    'answerB': 'zur rettung des Fuchsbestands',
    'answerC': 'zum vertreiben von Rehen',
    'answerD': 'Oralimpfung für Füchse',
    'solution': 'Oralimpfung für Füchse',
    'position': 0
},
{
    'question': '',
    'answerA': '',
    'answerB': '',
    'answerC': '',
    'answerD': '',
    'solution': '',
    'position': 1
}, {
    'question': '',
    'answerA': '',
    'answerB': '',
    'answerC': '',
    'answerD': '',
    'solution': '',
    'position': 2
}
]


function startQuiz() {
    let cardBody = document.getElementById('card-body');
    globalThis.globalQuiz = natureQuiz;
    showCounter(0);
    sidebarLinkActive(1);
    changeBackground();
    cardBody.innerHTML = getCardinnerHTML(globalQuiz[0]);
}


function newQuiz(globalQuiz) {
    let cardBody = document.getElementById('card-body');
    showCounter(0);
    sidebarLinkActive(2);
    cardBody.innerHTML = getCardinnerHTML(globalQuiz[0]);
}


function getCardinnerHTML(currentQuiz) {
    return /*html*/ `
    <span>${currentQuiz['question']}</span>

    <div class="list-group">
     
        <a href="#" id="answerlink1" class="question-link list-group-item" onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerA']}',1)">
            <div id="answerletter1"  class="question-letter">A</div>
            <span>${currentQuiz['answerA']}</span>
        </a>
       
        <a href="#" id="answerlink2" class="question-link list-group-item"  onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerB']}',2)">
            <div id="answerletter2" class="question-letter">B</div>    
            <span>${currentQuiz['answerB']}</span>
        </a>
        
        <a href="#" id="answerlink3" class="question-link list-group-item"  onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerC']}',3)">
            <div id="answerletter3" class="question-letter">C</div>
            <span>${currentQuiz['answerC']}</span>
        </a>
  
        <a href="#"  id="answerlink4" class="question-link list-group-item" onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerD']}',4)">
            <div id="answerletter4" class="question-letter">D</div>
            <span>${currentQuiz['answerD']}</span>
        </a>

    </div>
    `;
}


function proofAnswer(position, solution, answer, answerI) {
    let newPosition = position + 1;

    if (solution == answer) {
        renderRightAnswer(answerI);
        setTimeout(function () { nextQuestion(newPosition) }, 100);
    } else {
        renderWrongAnswer(answerI)
        setTimeout(function () { nextQuestion(newPosition) }, 100);
    }
}


function nextQuestion(newPosition) {
    let callCounter = 0;
    let cardBody = document.getElementById('card-body');

    if (newPosition < globalQuiz.length) {
        showCounter(newPosition);
        cardBody.innerHTML = getCardinnerHTML(globalQuiz[newPosition]);
    } else {
        callCounter + 1;
        changeCurrentQuiz(callCounter);
    }
}


function changeCurrentQuiz(callCounter) {
    if (callCounter = 1) {
        globalThis.globalQuiz = historyQuiz;
        hideBarkCounter(globalQuiz[0]['quizname']);
        newQuiz(globalQuiz);
    } else { }
}


/*function getCurrentQuizName(i) {
    let i = 0;
    if (globalQuiz['quizname'] = 'nature') {
        i = 1;
    } if (globalQuiz['quizname'] = 'history') {
        i = 2;
    }
    return i;
}*/


function showCounter(newPosition) {
    let Quizname = globalQuiz[0]['quizname'];
    let counterDiv = document.getElementById(`counter-div-${Quizname}`);
    let Counter = document.getElementById(`current-${Quizname}`);
    let number = globalQuiz[newPosition]['position'];

    counterDiv.classList.remove('d-none');
    Counter.innerHTML = number + 1;
}


function hideBarkCounter(Quizname) {
    if (Quizname = 'history') {
        document.getElementById(`counter-div-nature`).classList.add('d-none');
        document.getElementById(`link1`).classList.remove('card-link-active');
        document.getElementById(`bark1`).classList.remove('card-link-active');
    }
}


function renderRightAnswer(i) {
    let answerLink = document.getElementById(`answerlink${i}`);
    let answerLetter = document.getElementById(`answerletter${i}`);
    answerLink.classList.add('right-answer-link');
    answerLetter.classList.add('right-answer-letter');
}


function renderWrongAnswer(i) {
    let answerLink = document.getElementById(`answerlink${i}`);
    let answerLetter = document.getElementById(`answerletter${i}`);
    answerLink.classList.add('wrong-answer-link');
    answerLetter.classList.add('wrong-answer-letter');
}


function sidebarLinkActive(position) {
    let posLink = 'link' + position;
    let posBark = 'bark' + position;

    let link = document.getElementById(posLink);
    let bark = document.getElementById(posBark);

    bark.classList.add('card-link-active');
    link.classList.add('card-link-active');
}


function changeBackground() {
    let cardBg = document.getElementById('card-bg');
    cardBg.classList.add('card-bg');
}