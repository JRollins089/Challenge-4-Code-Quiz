const Questions = [{
    q: "Iside which HTML element do we put the JavaScript",
    a: [{ text: "<scripting>", isCorrect: false },
    { text: "<javascript>", isCorrect: false},
    { text: "<js>", isCorrect: false},
    { text: "<script>", isCorrect: true},
]
},
{
    q: "What is the correct JavaScript syntax to write Hello World?",
    a: [{ text: "(Hello World);", isCorrect: false },
    { text: "response.write(Hello World);", isCorrect: false},
    { text: "echo Hello World;", isCorrect: false},
    { text: "document.write(Hello World);", isCorrect: true},
]

},
]

let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

var count = 10;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === -2){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);