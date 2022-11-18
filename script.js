let natureQuiz = [{
    'question':
        'Welches Land wird wegen seiner riesigen Waldfäche, auch als Lunge der Erde bezeichnet?',
    'answerA': 'China',
    'answerB': 'Monaco',
    'answerC': 'Grönland',
    'answerD': 'Russland',
    'solution': 'Russland'


}];

function startQuiz(actualQuiz) {
    sidebarLinkActive(1);
    changeBackground();

    let cardBody = document.getElementById('card-body');
    cardBody.innerHTML = getCardinnerHTML(actualQuiz);

}

function getCardinnerHTML(actualQuiz) {

    return /*html*/ `


    <span>${actualQuiz['question']}</span>

    <div class="list-group">
     
        <a href="#" class="question-link list-group-item" onclick="proofAnswer(actualQuiz,1)">
            <div id="answer1"  class="question-letter">A</div>
            <span>${actualQuiz['answerA']}</span>
        </a>
       
        <a href="#" class="question-link list-group-item"  onclick="proofAnswer(actualQuiz,2)">
            <div id="answer2" class="question-letter">B</div>    
            <span>${actualQuiz['answerB']}</span>
        </a>
        
        <a href="#" class="question-link list-group-item"  onclick="proofAnswer(actualQuiz,3)">
            <div id="answer3" class="question-letter">C</div>
            <span>${actualQuiz['answerC']}</span>
        </a>
  
        <a href="#"  class="question-link list-group-item" onclick="proofAnswer(actualQuiz,4)">
            <div id="answer4" class="question-letter">D</div>
            <span>${actualQuiz['answerD']}</span>
        </a>

    </div>
    `;
}

function proofAnswer(quiz, answer) {
    if (quiz = natureQuiz[0]) {
        renderRightAnswer(answer);
        /*if (quiz == natureQuiz[0]) {
            if (answer == 4) {
                renderRightAnswer(answer);
            } else {
                renderWrongAnswer(answer);
            }
        } else { }*/
    } else { }
}

function renderRightAnswer(i) {
    let answer = document.getElementById(`answer${i}`);
    answer.classList.add('question-link-focus');
    answer.classList.add('question-letter-focus');
}

function renderWrongAnswer(i) {
    let answer = document.getElementById(`answer${i}`);
    answer.classList.add('');
    answer.classList.add('');
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