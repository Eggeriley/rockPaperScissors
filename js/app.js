// Caching the DOM

let userScore = 0;
let computerScore = 0;
const form_div = document.getElementById('form');
var username = document.getElementById("username");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > h2");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const user_div = document.getElementById("user");
const comp_div = document.getElementById("comp");
const changing_text_div = document.getElementById("changing-text");
const choices_div = document.getElementById('choices');
const winLosePannel_div = document.getElementById('win-lose-pannel');
const actionMessage_div = document.getElementById('action-message');
const winOrLose = 4;

function greetings() {
  username = username.value;
  console.log(username);
  form_div.innerHTML = `Thank you! ${username}`


}

function getComputerChoice() {
  const choices = ['r','p', 's'];
  randomNumber = Math.floor(Math.random()* 3 );
  return choices[randomNumber]
} 

function convertLetter(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}


function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const changingText_div = document.getElementById("changing-text");

  if (userScore === winOrLose) {
    result_p.innerHTML = `<div>You deafeated the <span class="underline--magical animate__animated animate__bounceInUp animate__delay-3s animate_duration-1s" style="font-weight: bolder;">You are SuperSmart()</span><div class="animate__animated animate__hinge animate__delay-3s animate_duration-3s"><span class="underline--magical" style="font-weight: bolder;">SuperComputer<span style="font-family: monospace;">()</span></span> 💻🌐💻.</div> You are a #WINNER!!!!!`;
    winLosePannel_div.classList.add('success')
    winLosePannel_div.classList.add('animate__animated')
    winLosePannel_div.classList.add('animate__tada')
    user_div.innerHTML = `You deafeated the <span class="underline--magical">SuperComputer<span style="font-family: monospace;">()</span></span> with: ${convertLetter(userChoice)}. `;
    comp_div.style.display = "none"
    userScore++;
    userScore_span.innerHTML = userScore;
    choices_div.innerHTML = "<h2><a href='' class='btn-grad'>Want to Play Again? 🔄</a></h2>"
    choices_div.classList.add('win-lose');
    actionMessage_div.style.display = "none";
    choices_div.onclick = Program.restart();
    

  }
  else {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertLetter(userChoice)} beats ${convertLetter(computerChoice)}. YOU WIN! 🔥🔥🔥`;
  user_div.innerHTML = `You chose: ${convertLetter(userChoice)}.`;
  comp_div.innerHTML = `Computer chose: ${convertLetter(computerChoice)}.`;
  userChoice_div.classList.add('success');
  setTimeout(() => userChoice_div.classList.remove('success'), 1000);
  changingText_div.classList.add('success-text')
  setTimeout(() => changingText_div.classList.remove('success-text'), 1000);
  }
}


function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const changingText_div = document.getElementById("changing-text");
  
  if (computerScore === winOrLose) {
    result_p.innerHTML = `<div>You lost to the <span class="underline--magical" style="font-weight: bolder;">SuperComputer<span style="font-family: monospace;">()</span></span> 💻🌐💻. You are a #LOSER! 💩💩💩💩`;
    winLosePannel_div.classList.add('failure')
    winLosePannel_div.classList.add('animate__animated')
    winLosePannel_div.classList.add('animate_bounce')
    user_div.innerHTML = `You lost to the <span class="underline--magical">SuperComputer<span style="font-family: monospace;">()</span></span> by making the terrible decision of : ${convertLetter(userChoice)}. `;
    comp_div.style.display = "none";
    computerScore++;
    userScore_span.innerHTML = userScore;
    choices_div.innerHTML = "<h2><a href='' class='btn-grad'>Want to Try Again? 🔄</a></h2>"
    choices_div.classList.add('win-lose');
    actionMessage_div.style.display = "none";
    choices_div.onclick = Program.restart();
  }
  else {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertLetter(userChoice)} loses to ${convertLetter(computerChoice)}. YOU LOSE! 💩💩`
  document.getElementById(userChoice).classList.add('failure')
  user_div.innerHTML = `You chose: ${convertLetter(userChoice)}.`
  comp_div.innerHTML = `Computer chose: ${convertLetter(computerChoice)}.`
  setTimeout(() => userChoice_div.classList.remove('failure'), 1000);
  changingText_div.classList.add('failure-text')
  setTimeout(() => changingText_div.classList.remove('failure-text'), 1000);
  }
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const changingText_div = document.getElementById("changing-text");

  result_p.innerHTML = `${convertLetter(userChoice)} = ${convertLetter(computerChoice)}. DRAW`
  userChoice_div.classList.add('draw')
  setTimeout(() => userChoice_div.classList.remove('draw'), 1000);
  user_div.innerHTML = `You chose: ${convertLetter(userChoice)}.`
  comp_div.innerHTML = `Computer chose: ${convertLetter(computerChoice)}.`
  changingText_div.classList.add('draw-text')
  setTimeout(() => changingText_div.classList.remove('draw-text'), 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp": 
      draw(userChoice, computerChoice)

  }
}



function main(){
rock_div.addEventListener('click', function() {
  game("r");

})

paper_div.addEventListener('click', function() {
  game("p");

})

scissors_div.addEventListener('click', function() {
  game("s");

});

}

main();