const question = [
    {
        question: "Which is the largest animal in the worls",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct:true},
            {text: "Girafee", correct:false},
            {text: "Elephant", correct:false}
        ]
    },
    {
        question: "What is capital of Chhatisgarh",
        answers:[
            {text: "Raigarh", correct: false},
            {text: "Raipur", correct:true},
            {text: "Bilaspur", correct:false},
            {text: "Durg", correct:false}
        ]
    },
    {
        question: "Who won the 2023 ICC Cricket World cup",
        answers:[
            {text: "India", correct: false},
            {text: "Australia", correct:true},
            {text: "New Zealand", correct:false},
            {text: "England", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn =document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let curr = 0
let score = 0


function startQuiz(){
    currIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    console.log(currIndex);
    let currentQues = question[currIndex]
    let quesNo = currIndex + 1;
    questionElement.innerHTML = quesNo + ". "+ currentQues.question;

    currentQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    
    }
    Arrray.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });
    nextBtn.style.display = "block";
}
function handleNextButton(){
    currIndex++;
    if(currIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}
nextBtn.addEventListener("click",, ()=>{
    if(currIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
