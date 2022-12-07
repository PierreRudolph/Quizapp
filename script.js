let animalQuiz = [
    {
        'quizname': 'Tierwelt',
        'question': 'Welches Tier hat drei Herzen?',
        'answerA': 'Huhn',
        'answerB': 'Tintenfisch',
        'answerC': 'Wal',
        'answerD': 'Krähe',
        'solution': 'Tintenfisch',
        'position': 0,
        'rightAnswerId': 2
    },
    {
        'question': 'Was ist ein Xoloitzcuintle?',
        'answerA': 'Argentinischer Kampfhahn',
        'answerB': 'Malaysischer Hirsch',
        'answerC': 'Mexikanischer Nackthund',
        'answerD': 'Afrikanischer Steppenvogel',
        'solution': 'Mexikanischer Nackthund',
        'position': 1,
        'rightAnswerId': 3
    },
    {
        'question': 'Bis zu wieviel Zähne wachsen einem Hai, während seines Lebens?',
        'answerA': '30.000',
        'answerB': '10.000',
        'answerC': '500',
        'answerD': '34',
        'solution': '30.000',
        'position': 2,
        'rightAnswerId': 1
    },
    {
        'question': 'Was passiert mit einem Goldfisch wenn man ihn im Dunkeln hält?',
        'answerA': 'Stirbt',
        'answerB': 'vermehrt sich',
        'answerC': 'verliert seine Farbe',
        'answerD': 'wird Blind',
        'solution': 'verliert seine Farbe',
        'position': 3,
        'rightAnswerId': 3
    },
    {
        'question': 'Welches am Land lebende Tier hat die größten Augen?',
        'answerA': 'Strauß',
        'answerB': 'Elefant',
        'answerC': 'Deutsche Dogge',
        'answerD': 'Walross',
        'solution': 'Strauß',
        'position': 4,
        'rightAnswerId': 1
    }
];

let historyQuiz = [
    {
        'quizname': 'Geschichte',
        'question': 'Warum warf man in der Schweiz in den 80ern, etwa 52.000 Hühneköpfe aus Helikoptern?',
        'answerA': 'Seuchenexperimente',
        'answerB': 'zur rettung des Fuchsbestands',
        'answerC': 'zum vertreiben von Rehen',
        'answerD': 'Oralimpfung für Füchse',
        'solution': 'Oralimpfung für Füchse',
        'position': 0,
        'rightAnswerId': 4
    },
    {
        'question': 'Wie hieß die Hauptstadt von Ostpreußen?',
        'answerA': 'Lemberg',
        'answerB': 'Insterburg',
        'answerC': 'Königsberg',
        'answerD': 'Warschau',
        'solution': 'Königsberg',
        'position': 1,
        'rightAnswerId': 3
    }, {
        'question': 'Wann wurde das Deutsche Reich gegründet?',
        'answerA': '1867',
        'answerB': '1785',
        'answerC': '1440',
        'answerD': '1871',
        'solution': '1871',
        'position': 2,
        'rightAnswerId': 4
    }
];

let plantsQuiz = [
    {
        'quizname': 'Pflanzenwelt',
        'question': 'Welcher Baum verliert im Winter seine Nadeln?',
        'answerA': 'Zeder',
        'answerB': 'Eiche',
        'answerC': 'Lärche',
        'answerD': 'Tanne',
        'solution': 'Lärche',
        'position': 0,
        'rightAnswerId': 3
    },
    {
        'question': 'Was haben Menschen mit Pflanzen gemein?',
        'answerA': 'Photosynthese',
        'answerB': 'Schwitzen',
        'answerC': 'Fieber',
        'answerD': 'Muskelkater',
        'solution': 'Fieber',
        'position': 1,
        'rightAnswerId': 3
    },
    {
        'question': 'Nach was riecht der Titanwurz?',
        'answerA': 'Zuckerwatte',
        'answerB': 'Aas',
        'answerC': 'Regenwald',
        'answerD': 'Raubkatze',
        'solution': 'Aas',
        'position': 2,
        'rightAnswerId': 2
    }, {

        'question': 'Welches Land wird wegen seiner riesigen Waldfächen, auch als Lunge der Erde bezeichnet?',
        'answerA': 'China',
        'answerB': 'Monaco',
        'answerC': 'Grönland',
        'answerD': 'Russland',
        'solution': 'Russland',
        'position': 3,
        'rightAnswerId': 4
    },
    {
        'question': 'Welches ist das grösste Lebewesen in der Natur?',
        'answerA': 'Blauwal',
        'answerB': 'Elefant',
        'answerC': 'Riesenfaultier',
        'answerD': 'Armillaria-Honigpilz',
        'solution': 'Armillaria-Honigpilz',
        'position': 4,
        'rightAnswerId': 4
    }
];

let spaceQuiz = [
    {
        'quizname': 'Weltall',
        'question':
            'Welcher Berg ist der höchste in unserem Sonnensystem?',
        'answerA': 'Mount Everest',
        'answerB': 'Zentralberg des Oberon',
        'answerC': 'Zuckerberg in meinem Kaffee',
        'answerD': 'Olympus Moons',
        'solution': 'Olympus Moons',
        'position': 0,
        'rightAnswerId': 4
    }, {
        'quizname': 'Weltall',
        'question': 'Was regnet es auf Saturn und Jupiter?',
        'answerA': 'Diamanten',
        'answerB': 'Wasser',
        'answerC': 'Melonengroße Eisbrocken',
        'answerD': 'flüssiges Methan',
        'solution': 'Diamanten',
        'position': 1,
        'rightAnswerId': 1
    }, {
        'quizname': 'Weltall',
        'question': 'Wie nennt man die Tag-Nacht-Grenze eines Himmelkörpers?',
        'answerA': 'Zwielicht',
        'answerB': 'Ying&Yang',
        'answerC': 'Terminator',
        'answerD': 'Sukusator',
        'solution': 'Terminator',
        'position': 2,
        'rightAnswerId': 3
    }
];

let rightAnswerCounter = 0;
let optionsVisible = 0;
let displayRightAnswer = 0;


function initQuiz(quiz, linkI) {
    globalThis.globalQuiz = quiz; /*globalThis macht Variablen global nutzbar*/
    globalThis.cardBody = document.getElementById('card-body');
    playQuizSound();
    updateCardBody(0) /*ändert hintergrung und klasse, des card-bodys*/
    updateQuiz(); /* setzt parameter zurück*/
    showIntro();
    deActivateSidebarLinks(); /*graut alle Sidebarlinks ein*/
    activateSidebarLink(linkI); /*hebt ausgewählten link hervor*/
}


function showIntro() {
    let quizname = globalQuiz[0]['quizname'];

    cardBody.innerHTML = /*html*/`
    <h5 class="card-title">Wilkommen zum ausergewöhnlichen<br> ${quizname} Quiz!</h5>
    <p class="card-text">Bist du bereit für die Herausforderung?</p>
    <button onclick="startQuiz()" type="button" class="btn btn-warning col-4 button-start">
        START<img class="start-btn-arrow" src="img/arrow-right.png"></button>
    `;
}


function startQuiz() {
    playAnySound('game-start');
    updateQuiz()
    sidebarLinksPointerNone(); /*verhindert das anklicken der Links während man im Quiz ist*/
    showCounter(0);
    updateCardBody(1)
    cardBody.innerHTML = getCardinnerHTMLQuiz(globalQuiz[0]);
}


function getCardinnerHTMLQuiz(currentQuiz) {
    return /*html*/ `
    <span class="question">${currentQuiz['question']}</span>

    <div class="list-group">
     
        <a href="#" id="answerlink1" class="answer-link list-group-item" 
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerA']}',1)">
            
            <div id="answerletter1"  class="answer-letter">A</div>
            <div class="answer-div"><span>${currentQuiz['answerA']}</span></div>
        </a>
       
        <a href="#" id="answerlink2" class="answer-link list-group-item"  
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerB']}',2)">
            
            <div id="answerletter2" class="answer-letter">B</div>    
            <div class="answer-div"><span>${currentQuiz['answerB']}</span></div>
        </a>
        
        <a href="#" id="answerlink3" class="answer-link list-group-item"  
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerC']}',3)">
            
            <div id="answerletter3" class="answer-letter">C</div>
            <div class="answer-div"><span>${currentQuiz['answerC']}</span></div>
        </a>
  
        <a href="#"  id="answerlink4" class="answer-link list-group-item" 
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerD']}',4)">
            
            <div id="answerletter4" class="answer-letter">D</div>
            <div class="answer-div"><span>${currentQuiz['answerD']}</span></div>
        </a>

    </div>
    `;
}


function proofAnswer(position, solution, answer, answerI) {
    let newPosition = position + 1; /*newPosition ist die Position der nächsten Frage*/
    if (solution == answer) {
        rightAnswerCounter++;
        playAnySound('correct');
        renderRightAnswer(answerI);
        updateProgressBar('bg-success');
        setTimeout(function () { getNextQuestion(newPosition) }, 500);
    } else {
        playAnySound('wrong');
        renderSolutionIfSet(position);
        renderWrongAnswer(answerI);
        updateProgressBar('bg-danger');
        /* setTimeout(function () {}, 277) muss man so schreiben damit man variablen übergeben kann.*/
        setTimeout(function () { getNextQuestion(newPosition) }, 500);
    }
}


function getNextQuestion(newPosition) {
    if (newPosition < globalQuiz.length) { /*überprüft ob noch eine Frage übrig ist, ansonsten wird das Ergebnis angezeigt*/
        showCounter(newPosition);
        cardBody.innerHTML = getCardinnerHTMLQuiz(globalQuiz[newPosition]);
    } else {
        showResult();
        if (rightAnswerCounter == globalQuiz.length) {
            playCheerSound();
        }

        if (rightAnswerCounter == 0) {
            playFailureSound();
        }
    }
}


function showResult() {
    showHideTropy(); /*zeigt Tropähe an wenn alle Fragen eines Quiz richtig beantwortet wurden*/
    activateSidebarLinks();
    let counterDiv = document.getElementById(`counter-div`);
    counterDiv.classList.add('d-none');

    cardBody.classList.remove('card-body');
    cardBody.classList.add('result-card-body');

    cardBody.innerHTML = getCardinnerHTMLResult();
}


function getCardinnerHTMLResult() {
    return /*html*/`
    
    <img class="result-img" src="img/brain result.png">
        <div class="result-headline" >
            <span>${globalQuiz[0]['quizname']} Quiz Vollendet</span>
        </div>
        
        <div>
            <span class="result-text">Richtige Fragen:</span> 
            <span id="result" class="result">${rightAnswerCounter}</span> <span class="result" id="quiz-length">von ${globalQuiz.length}</span>
        </div> 
        
        <div class="share-replay-btn">
            <button type="button" class="btn btn-primary share-btn" id="share-button" onclick="shareResult()">
            TEILEN
            </button>
            
            <button type="button" class="btn btn-outline-primary transparent-btn-replay" onclick="startQuiz(globalQuiz)">
            WIEDERHOLEN
            </button>
        </div>
    `;
}

/*zeigt richtige Antworten immer an wenn eingestellt*/
function renderSolutionIfSet(position) {
    if (displayRightAnswer == 1) {
        renderRightAnswer(globalQuiz[position]['rightAnswerId']);
    }
}


function shareResult() {
    let shareButton = document.getElementById('share-button');
    shareButton.innerHTML = '<span class="copy-check" >Ergebnis kopiert!</span>'
    /*Schreibt text in die Zwischenablage des users*/
    navigator.clipboard.writeText(`
    Ich habe das ${globalQuiz[0]['quizname']} Quiz mit ${rightAnswerCounter} von ${globalQuiz.length} beendet.
    Probiere es selbst!
    http://pierre-lettner.developerakademie.net/Projekte/Quizapp/index.html
    `);
}


function showOptions() {
    playAnySound('cog-push');
    let options = document.getElementById('option-div');
    /*wenn optionsVisible 1 ist, wird options geschlossen*/
    if (optionsVisible == 1) {
        options.classList.add('hide-options');
        options.classList.remove('show-options');
    }
    /*wenn optionsVisible 0 ist, wird options geöffnet*/
    if (optionsVisible == 0) {
        options.classList.add('show-options');
        options.classList.remove('hide-options');
    }
    /*mit einer Klassenabfrage wird überprüft ob options offen ist,
    ob offen oder zu wird in der optionsVisible Variable gespeichert.*/
    if (options.classList.contains('show-options')) {
        optionsVisible++;
    } else { optionsVisible--; }
}


function showCounter(newPosition) {
    let counterDiv = document.getElementById(`counter-div`);
    let Counter = document.getElementById(`current`);
    let number = globalQuiz[newPosition]['position'];
    let quizLength = document.getElementById('quizlength')

    counterDiv.classList.remove('d-none');
    Counter.innerHTML = number + 1; /*hier plus 1 weil position mit 0 beginnt*/
    quizLength.innerHTML = globalQuiz.length;
}


function updateCardBody(i) {
    changeCardBg(i);
    cardBody.classList.remove('result-card-body');
    cardBody.classList.add('card-body');
}


function updateQuiz() {
    rightAnswerCounter = 0;
    clearProgressBar();
    showHideTropy();
}

/*färbt richtige Antwort per Klassenänderung grün ein*/
function renderRightAnswer(i) {
    let answerLink = document.getElementById(`answerlink${i}`);
    let answerLetter = document.getElementById(`answerletter${i}`);
    answerLink.classList.add('right-answer-link');
    answerLetter.classList.add('right-answer-letter');
}

/*färbt falsche Antwort per Klassenänderung rot ein*/
function renderWrongAnswer(i) {
    let answerLink = document.getElementById(`answerlink${i}`);
    let answerLetter = document.getElementById(`answerletter${i}`);
    answerLink.classList.add('wrong-answer-link');
    answerLetter.classList.add('wrong-answer-letter');
}

/*hebt einzelnen Sidebar Link und Barke hervor*/
function activateSidebarLink(position) {
    let posLink = 'link' + position;
    let posBark = 'bark' + position;

    let link = document.getElementById(posLink);
    let bark = document.getElementById(posBark);

    bark.classList.add('card-link-active');
    link.classList.add('card-link-active');

}

/*macht alle Sidebar Links wieder anklickbar*/
function activateSidebarLinks() {
    for (let i = 1; i < 5; i++) {
        let link = document.getElementById(`link${i}`);
        link.classList.remove('pointer-events-none');
    }
}

/*graut alle Sidebar Links ein*/
function deActivateSidebarLinks() {
    for (let i = 1; i < 5; i++) {
        let link = document.getElementById(`link${i}`);
        let bark = document.getElementById(`bark${i}`);
        link.classList.remove('card-link-active');
        bark.classList.remove('card-link-active');
    }
}

/*macht das alle Siedebar Links nicht mehr anklickbar sind*/
function sidebarLinksPointerNone() {
    for (let i = 1; i < 5; i++) {
        let link = document.getElementById(`link${i}`);
        link.classList.add('pointer-events-none');
    }
}


function changeCardBg(hideBrain) {
    let cardBg = document.getElementById('card-bg');

    if (hideBrain == 1) {
        cardBg.classList.add('card-bg-white');
    } else {
        cardBg.classList.remove('card-bg-white');
    }
}


function showHideTropy() {
    let tropydiv = document.getElementById('tropy-div');
    if (rightAnswerCounter == globalQuiz.length) {
        tropydiv.classList.remove('d-none');
    } else {
        tropydiv.classList.add('d-none');
    }
}


function updateProgressBar(trueFalse) {
    let bar = document.getElementById('bar-div');
    /*100 geteilt durch die länge des aktuellen Quiz,legt fest welche width die einzelnen Teile der Progress-bar haben werden*/
    let width = 100 / globalQuiz.length;

    bar.innerHTML +=/*html*/`
    <div class="progress-bar ${trueFalse} border-end" role="progressbar"  style="width: ${width}%">
        </div>
        `;
}


function clearProgressBar() {
    let bar = document.getElementById('bar-div');
    bar.innerHTML = '';
}

/*stellt sicher das der Optionen Schalter immer auf Aus ist, wenn die Seite lädt*/
function resetSwitchToggler() {
    let input = document.getElementById('options-switch');
    input.checked = false;
}

/*stellt ein ob richtige Fragen immer angezeigt werden sollen*/
function setDisplaySolution() {
    playAnySound('switch');
    if (displayRightAnswer == 0) {
        displayRightAnswer++;
        setTimeout(showOptions, 277);
    } else {
        displayRightAnswer--;
        setTimeout(showOptions, 277);
    }
}


function playQuizSound() {
    stopAllAudio();
    let quizName = globalQuiz[0]['quizname'];
    let audioSound = document.getElementById(`${quizName}-sound`);
    audioSound.volume = 0.4;
    audioSound.load();
    audioSound.play();
    setTimeout(function () { audioSound.pause() }, 10000);
}


function playCheerSound() {
    let cheerSound = document.getElementById('cheer-sound');
    cheerSound.volume = 0.4;
    cheerSound.play();
    setTimeout(function () { cheerSound.pause() }, 10000);

}


function playFailureSound() {
    let failureSound = document.getElementById('failure-sound');
    failureSound.volume = 0.4;
    failureSound.play();
}


function playAnySound(soundName) {
    let sound = new Audio(src = `sound/${soundName}.mp3`);
    sound.volume = 0.4;
    sound.load();
    sound.play();
}


function stopAllAudio() {
    let allAudios = document.querySelectorAll('audio');
    allAudios.forEach(function (audio) {
        audio.pause();
    });
}
