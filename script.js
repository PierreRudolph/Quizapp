function startQuiz() {
    sidebarLinkActive(1);
    changeBackground();
    let cardBody = document.getElementById('card-body');

    cardBody.innerHTML = getCardinnerHTML();
}

function getCardinnerHTML() {
    return /*html*/ `

<span>Dies wird eine knifflige Frage</span>

    <div class="list-group">
     
        <a href="#" class="question-link list-group-item">
            <div class="question-letter">A</div>
            <span>Die erste Antwort</span>
        </a>
       
        <a href="#" class="question-link list-group-item ">
            <div class="question-letter"><span>B</span></div>    
            <span>Die zweite Antwort</span>
        </a>
        
        <a href="#" class="question-link list-group-item ">
            <div class="question-letter">C</div>
            <span>Die dritte Antwort</span>
        </a>
  
        <a href="#"  class="question-link list-group-item ">
            <div class="question-letter">D</div>
            <span>Die vierte Antwort</span>
        </a>

    </div>
    `;
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