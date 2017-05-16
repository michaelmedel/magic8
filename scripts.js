var answers = [ "It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not \nso good",
"Very doubtful"]



var f = document.getElementById("text");
var t = document.getElementById("answerText");
var q = document.getElementById("question");
var s = document.getElementById("submit");
var r = document.getElementById("reset");

function askQuestion() {
s.addEventListener('click', function(){

var answer = answers[Math.floor(Math.random()*answers.length)];
	var question = "";
	question = f.value;
  t.innerHTML = answer;
  q.innerHTML = question;
  f.value = "";
})
r.addEventListener('click', function(){
	f.value = "";
  q.innerHTML = "";
  t.innerHTML = "";
})
}
askQuestion();
