function getinnerHTMLQuiz(currentQuiz) {
    return /*html*/ `
    <span class="question">${currentQuiz['question']}</span>

    <div class="list-group">
     
        <a href="#" id="answerlink1" class="answer-link list-group-item" 
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerA']}',1)">
            
            <div id="answerletter1"  class="answer-letter">A</div>
            <div class="answer-div">
                <span>${currentQuiz['answerA']}</span>
            </div>
        </a>
       
        <a href="#" id="answerlink2" class="answer-link list-group-item"  
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerB']}',2)">
            
            <div id="answerletter2" class="answer-letter">B</div>    
            <div class="answer-div">
                <span>${currentQuiz['answerB']}</span>
            </div>
        </a>
        
        <a href="#" id="answerlink3" class="answer-link list-group-item"  
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerC']}',3)">
            
            <div id="answerletter3" class="answer-letter">C</div>
            <div class="answer-div">
                <span>${currentQuiz['answerC']}</span>
            </div>
        </a>
  
        <a href="#"  id="answerlink4" class="answer-link list-group-item" 
                onclick="proofAnswer(${currentQuiz['position']},'${currentQuiz['solution']}','${currentQuiz['answerD']}',4)">
            
            <div id="answerletter4" class="answer-letter">D</div>
            <div class="answer-div">
                <span>${currentQuiz['answerD']}</span>
            </div>
        </a>

    </div>
    `;
}


function getinnerHTMLResult() {
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


function getinnerHTMLProgressBar(trueFalse, width) {
    return /*html*/`
    <div class="progress-bar ${trueFalse} border-end" role="progressbar"  style="width: ${width}%">
        </div>
        `;
}