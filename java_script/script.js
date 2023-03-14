let rightAnswerCounter = 0;
let optionsVisible = 0;
let showRightAnswer = 0;
let avoidClickingTwice = 0;


/**
 * This Function initiate the Quiz wich the user choose per click.
 * 
 * @param {string} quiz -name of the quiz to init.
 * @param {number} linkI -Id-Number of the HTML element, wich the user clicked. 
 */
function initQuiz(quiz, linkI) {
    globalThis.globalQuiz = quiz; /*globalThis macht Variablen global nutzbar*/
    globalThis.cardBody = document.getElementById('card-body');
    playQuizSound();
    updateCard(0); /*ändert hintergrung und klasse, des card-bodys*/
    updateQuiz(); /* setzt parameter zurück*/
    showIntro();
    deActivateSidebarLinks(); /*graut alle Sidebarlinks ein*/
    activateSidebarLink(linkI); /*hebt ausgewählten link hervor*/
}


/**
 * This Function shows the Intro, of the globalQuiz wich defined
 * in initQuiz() 
 */
function showIntro() {
    let quizName = globalQuiz[0]['quizname'];
    cardBody.innerHTML = getinnerHTMLIntro(quizName);
}


function startQuiz() {
    playAnySound('game-start');
    updateQuiz();
    sidebarLinksPointerNone(); /*verhindert das anklicken der Links während man im Quiz ist*/
    showCounter(0);
    updateCard(1);
    cardBody.innerHTML = getinnerHTMLQuiz(globalQuiz[0]);
}

/**
 * 
 * @param {number} position -position of the actual Question in the actual Quiz-Array
 * @param {string} solution -the right Answer.
 * @param {string} answer -answer, the user clicked.
 * @param {number} answerI -Id to get the Answer in the HTML.
 */
function proofAnswer(position, solution, answer, answerI) {
    let newPosition = position + 1; /*newPosition ist die Position der nächsten Frage*/

    if (avoidClickingTwice == 0) {
        if (solution == answer) {
            rightAnswerCounter++;
            playAnySound('correct');
            addClassRightAnswer(answerI);
            updateProgressBar('bg-success');
            setTimeout(function () { showNextQuestion(newPosition), avoidClickingTwice--; }, 1000);
        } else {
            playAnySound('wrong');
            showRightAnswerIfSet(position);
            addClassWrongAnswer(answerI);
            updateProgressBar('bg-danger');
            /* setTimeout(function () {}, 277) muss man so schreiben damit man variablen übergeben kann.*/
            setTimeout(function () { showNextQuestion(newPosition), avoidClickingTwice--; }, 1000);
        }
        avoidClickingTwice++;
    }

}


function disableAnswers() {
    for (let i = 1; i < 5; i++) {
        let anwers = document.getElementById(`answerlink${i}`);
        anwers.classList.add('disabled');
    }

}


/**
 * 
 * @param {number} newPosition -the position of the Next Question in the actual Quiz-Array.
 */
function showNextQuestion(newPosition) {
    if (newPosition < globalQuiz.length) { /*überprüft ob noch eine Frage übrig ist, ansonsten wird das Ergebnis angezeigt*/
        showCounter(newPosition);
        cardBody.innerHTML = getinnerHTMLQuiz(globalQuiz[newPosition]);
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

    cardBody.innerHTML = getinnerHTMLResult();
}


function shareResult() {
    let shareButton = document.getElementById('share-button');
    shareButton.innerHTML = '<span class="copy-check" >Ergebnis kopiert!</span>'
    /*Schreibt den vorgegebenen Text in die Zwischenablage des users*/
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
    updateOptionsStatus(options);
}


/**
 * This function proofs if the HTML-Element has the class 'show-options',
 * to be sure if options open or not. The Result get Saved in a Var,
 * called optionsVisible.
 * 
 * @param {element} options -Options-div.
 */
function updateOptionsStatus(options) {
    if (options.classList.contains('show-options')) {
        optionsVisible++;
    } else { optionsVisible--; }
}


/**
 * This function shows and update the Questions Counter.
 * 
 * @param {number} newPosition -position of the Next Question.
 */
function showCounter(newPosition) {
    let counterDiv = document.getElementById(`counter-div`);
    let Counter = document.getElementById(`current`);
    let number = globalQuiz[newPosition]['position'];
    let quizLength = document.getElementById('quizlength')

    counterDiv.classList.remove('d-none');
    Counter.innerHTML = number + 1; /*hier plus 1 weil position mit 0 beginnt*/
    quizLength.innerHTML = globalQuiz.length;
}


function updateCard(i) {
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
function addClassRightAnswer(i) {
    let answerLink = document.getElementById(`answerlink${i}`);
    let answerLetter = document.getElementById(`answerletter${i}`);
    answerLink.classList.add('right-answer-link');
    answerLetter.classList.add('right-answer-letter');
}


/*färbt falsche Antwort per Klassenänderung rot ein*/
function addClassWrongAnswer(i) {
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

    bar.innerHTML += getinnerHTMLProgressBar(trueFalse, width);
}


function clearProgressBar() {
    let bar = document.getElementById('bar-div');
    bar.innerHTML = '';
}


/*zeigt richtige Antworten immer an wenn eingestellt*/
function showRightAnswerIfSet(position) {
    if (showRightAnswer == 1) {
        addClassRightAnswer(globalQuiz[position]['rightAnswerId']);
    }
}


/*stellt ein ob richtige Fragen immer angezeigt werden sollen*/
function setShowRightAnswer() {
    playAnySound('switch');
    if (showRightAnswer == 0) {
        showRightAnswer++;
        saveUserSetting('setting');
        setTimeout(showOptions, 277);
    } else {
        showRightAnswer--;
        saveUserSetting('setting')
        setTimeout(showOptions, 277);
    }
}


function saveUserSetting(key) {
    localStorage.setItem(key, JSON.stringify(showRightAnswer));
}


function getUserSetting(key) {
    let settingString = localStorage.getItem(key);
    if (settingString) {
        showRightAnswer = settingString;
    }
    setSwitchToggler();
}


function setSwitchToggler() {
    let switchToggler = document.getElementById('options-switch');
    if (showRightAnswer == 0) {
        switchToggler.checked = false;
    }
    if (showRightAnswer == 1) {
        switchToggler.checked = true;
    }
}


function showImpressumOrPrivacyPolicy(imp_pri) {
    let impPri = document.getElementById(`${imp_pri}`);
    impPri.classList.remove('d-none');
}


function closeImpressumOrPrivacyPolicy(imp_pri) {
    let impPri = document.getElementById(`${imp_pri}`);
    impPri.classList.add('d-none');
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
    cheerSound.load();
    cheerSound.play();
}


function playFailureSound() {
    let failureSound = document.getElementById('failure-sound');
    failureSound.volume = 0.4;
    failureSound.load();
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
