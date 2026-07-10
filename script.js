const questions = [
{
question:"What does VPN stand for?",
options:[
"Virtual Private Network",
"Very Personal Network",
"Visual Public Network",
"Virtual Public Node"
],
answer:"Virtual Private Network"
},

{
question:"Which one is a strong password?",
options:[
"123456",
"password",
"Pr@nAv@2026!",
"qwerty"
],
answer:"Pr@nAv@2026!"
},

{
question:"Phishing is mainly used to:",
options:[
"Steal Information",
"Increase Internet Speed",
"Install Windows",
"Create Passwords"
],
answer:"Steal Information"
},

{
question:"Which software protects your computer from viruses?",
options:[
"Antivirus",
"Calculator",
"Paint",
"Notepad"
],
answer:"Antivirus"
},

{
question:"HTTPS is more secure than:",
options:[
"HTTP",
"FTP",
"SMTP",
"POP3"
],
answer:"HTTP"
},

{
question:"Firewall is used to:",
options:[
"Protect Network",
"Increase RAM",
"Charge Battery",
"Print Documents"
],
answer:"Protect Network"
},

{
question:"Which one is malware?",
options:[
"Trojan",
"Chrome",
"Excel",
"Photos"
],
answer:"Trojan"
},

{
question:"Two-factor authentication provides:",
options:[
"Extra Security",
"More Storage",
"Internet Access",
"Free VPN"
],
answer:"Extra Security"
},

{
question:"Which file is suspicious?",
options:[
"invoice.exe",
"photo.jpg",
"notes.pdf",
"music.mp3"
],
answer:"invoice.exe"
},

{
question:"Cyber Security protects:",
options:[
"Data and Systems",
"Food",
"Clothes",
"Furniture"
],
answer:"Data and Systems"
}
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {

startScreen.classList.add("hidden");

quizScreen.classList.remove("hidden");

loadQuestion();

});

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question-number").innerHTML =
"Question " + (currentQuestion+1) + " / " + questions.length;

questionText.innerHTML = q.question;

optionButtons.forEach((button,index)=>{

button.innerHTML = q.options[index];

button.disabled=false;

button.style.background="#21262d";

button.onclick = function(){

if(button.innerHTML===q.answer){

score++;

button.style.background="green";

}
else{

button.style.background="red";

optionButtons.forEach(btn=>{

if(btn.innerHTML===q.answer){

btn.style.background="green";

}

});

}

optionButtons.forEach(btn=>btn.disabled=true);

};

});

}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}
else{

quizScreen.classList.add("hidden");

resultScreen.classList.remove("hidden");

document.getElementById("score").innerHTML =
"Score : "+score+" / "+questions.length;

}

});