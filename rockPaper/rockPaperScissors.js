//defining choices 
let choiceArray = ["rock", "paper", "scissors"]
// defining user choice
const userChoice = prompt("Choose rock, paper or scissors!")
if(userChoice=="rock"||userChoice=="paper"||userChoice||"scissors"){
    console.log("You chose "+userChoice)
}
else console.log("Not a valid answer. Try again.");
// defining computer choice
const compChoice = choiceArray[Math.floor(Math.random() *3)]
console.log("Computer chose "+compChoice)
if(Math.random >= 0.33 && Math.random < 0.66){
    compChoice == "rock"
}
else if(Math.random>=0.67){
    compChoice == "paper"
}
else compChoice == "scissors";
// function for user win
gameRound(userChoice, compChoice)
// function to play a round
function gameRound(userChoice, compChoice){
    if(userChoice == "rock" && compChoice == "scissors" 
    || userChoice == "paper" && compChoice == "rock"
    || userChoice == "scissors" && compChoice == "paper"){
       console.log("You win")
    }
    else if(compChoice == "rock" && userChoice == "scissors" 
    || compChoice == "paper" && userChoice == "rock"
    || compChoice == "scissors" && userChoice == "paper"){
       console.log("You lose")
    }
    else console.log("It's a tie.")
}
