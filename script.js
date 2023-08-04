const questions =[

    {

        question: "Which is largest animal in the world?",
        answers: [
            { text:"Shark", correct: false},
            { text:"Blue Whale", correct: true},
            { text:"Elephant", correct: false},
            { text:"giraffe", correct: false},
        ]
    },

    
    {

        question: "Which planet has the most moons?",
        answers: [
            { text:"Mars", correct: false},
            { text:"Jupiter", correct: false},
            { text:"Saturn", correct: true},
            { text:"Earth", correct: false},
        ]
    },

    
    {

        question: "How many bones do we have in an ear? ",
        answers: [
            { text:"1", correct: false},
            { text:"2", correct: false},
            { text:"3", correct: true},
            { text:"4", correct: false},
        ]
    },

    
    {

        question: "What Netflix show had the most streaming views in 2021?",
        answers: [
            { text:"Squid Game", correct: true},
            { text:"Candy Crush", correct: false},
            { text:"Pubg", correct: false},
            { text:"Bgmi", correct: false},
        ]
    },

    
    {

        question: "What software company is headquartered in Redmond, Washington?",
        answers: [
            { text:"Google", correct: false},
            { text:"Apple", correct: false},
            { text:"Amazon", correct: false},
            { text:"Microsoft", correct: true},
        ]
    },

    
    {

        question: "Which is the biggest continent in the world?",
        answers: [
            { text:"Australia", correct: false},
            { text:"Asia", correct: true},
            { text:"Africa", correct: false},
            { text:"America", correct: false},
        ]
    },

    
    {

        question: "Which is the longest river in the world?",
        answers: [
            { text:"Niger", correct: false},
            { text:"Great Ganga", correct: false},
            { text:"Amazon", correct: false},
            { text:"Nile", correct: true},
        ]
    },

    
    {

        question: "Which bank is called bankers Bank of India?",
        answers: [
            { text:"State Bank of India", correct: false},
            { text:"Punjab National Bank", correct: false},
            { text:"Reserve Bank of India", correct: true},
            { text:"ICICI Bank", correct: false},
        ]
    },

    
    {

        question: "Which is the 29th state of India?",
        answers: [
            { text:"Andhra Pradesh", correct: false},
            { text:"Telangana", correct: true},
            { text:"Bihar", correct: false},
            { text:"Maharastra", correct: false},
        ]
    },

    
    {

        question: "Which continent is known as Dark Continent?",
        answers: [
            { text:"Asia", correct: true},
            { text:"Africa", correct: false},
            { text:"Australia", correct: false},
            { text:"Europe", correct: false}
        ]
    }


];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");


const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("Correct");
        score++;
    }
    else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        
            button.disabled = true;
        
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function HandlenextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}else{
    showScore();
}
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        HandlenextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();

