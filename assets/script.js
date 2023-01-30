var startBtn =document.querySelector(".start-button")

var questioncontainer = document.querySelector(".question-container");
var question = document.querySelector("#question");
var buttons = document.querySelector("#buttons");
startBtn.addEventListener("click", startQuiz)
var currentQuestions = 0;

function startQuiz () {
var questionIndex = quizQuestions[currentQuestions]
question.textContent = questionIndex.question;
buttons.innerHTML = "";
  questionIndex.answers.forEach(answer => {
    var button = document.createElement("button");
    button.setAttribute("class", "btn")
    button.setAttribute("value", answer)
    button.textContent = answer;
    button.onclick = newQuestion;
    buttons.appendChild(button);
      })
}

var newQuestion = function() {
    currentQuestions++;
    startQuiz()
}
var quizQuestions= [
    {
        question: "How many cups equal a gallon?",
        answers: ["16 cups", "8 cups", "18 cups"],
        correct: "16 cups"
    },
    {
        question: "At what temperature does water boil?",
        answers: ["110 degrees", "212 degrees", "750 degrees"],
        correct: "212 degrees"
    },
    {
        question: "How many teaspoons equal a tablespoon?",
        answers: ["3", "7", "4"],
        correct: "3"
    },
    
]