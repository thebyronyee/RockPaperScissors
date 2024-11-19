//Testing if js file linked to html file - console log will display "Hello World!"
console.log("JS file connection confirmed");

//Declaring variables and starting values
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let round = 0;

//getComputerChoice: 
    //getComputerChoice will randomly RETURN a string of "rock", "paper", or "scissors"
    //Random Number: Use Math.random to generate random number 1-3
    //Variable string: Assign random number; 1 = rock, 2 = paper 3 = scissors
    //computerChoice: string of the computer choice: rock/paper/scissors

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber === 1) {
            computerChoice = "rock";
            }
        else if(randomNumber === 2) {
            computerChoice = "paper";
            }
        else{
            computerChoice = "scissors";
            }
        }
    
//getHumanChoice: 
    //Prompt human to choose b/t rock/paper/scissors
    //toLowerCase: Make human response case-insensitive
    //If not, then prompt user to try again
    function getHumanChoice() {
        let entry = prompt("Please type one of the following letter options: 'rock', 'paper', or 'scissors'.")
        humanChoice = entry.toLowerCase();
        //alert ("Sorry, I don't recognize that option. Please try again.");
        //how can I loop this back to the original prompt?
    }

 //playRound: function that has 2 parameters: humanChoice, computerChoice
        //IF: Determine who wins each round: paper > rock, rock > scissors, scissors > paper; 
        //RESULT: State winner of round "x beats y, human/computer scores 1 point!"
        //If human wins, add 1pt to human score
        //If computer wins, add 1 pt to computer score
        //SCORECARD: Display updated scores at the end of each round

function playRound(humanChoice, computerChoice) {
    let selection;
    let result;
    let scoreCard;

    if (humanChoice === 'rock' & computerChoice === 'paper') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Paper beats rock, computer scored 1 point."
        computerScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        round += 1
        alert(selection + "\n" + result + "\n" + scoreCard + "\nEnd of Round " + round)
        }
    if (humanChoice === 'rock' & computerChoice === 'scissors') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Rock beats scissors, you scored 1 point."
        humanScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        round += 1
        alert(selection + "\n" + result + "\n" + scoreCard + "\nEnd of Round " + round)
        }
    if (humanChoice === 'rock' & computerChoice === 'rock') {
        result = "Tie, play another round."
        alert(result)
        console.log(round)
        }
    if (humanChoice === 'paper' & computerChoice === 'scissors') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Scissors beats paper, computer scored 1 point."
        computerScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        round += 1
        alert(selection + "\n" + result + "\n" + scoreCard + "\nEnd of Round " + round)
        }
    if (humanChoice === 'paper' & computerChoice === 'rock') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Paper beats rock, you scored 1 point."
        humanScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        round += 1
        alert(selection + "\n" + result + "\n" + scoreCard + "\nEnd of Round " + round)
        }
    if (humanChoice === 'paper' & computerChoice === 'paper') {
        result = "Tie, play another round."
        alert(result)
        console.log(round)
        }
    if (humanChoice === 'scissors' & computerChoice === 'rock') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Rock beats scissors, computer scored 1 point."
        computerScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        round += 1
        alert(selection + "\n" + result + "\n" + scoreCard + "\nEnd of Round " + round)
        }
    if(humanChoice === 'scissors' & computerChoice === 'paper') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Scissors beats paper, you scored 1 point."
        humanScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        round += 1
        alert(selection + "\n" + result + "\n" + scoreCard + "\nEnd of Round " + round)
        }
    if (humanChoice === 'scissors' & computerChoice === 'scissors') {
        result = "Tie, play another round."
        alert(result)
        console.log(round)
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanChoice, computerChoice);

//PLAYGAME: function to play 5 rounds (excluding ties)
    //ROUND: keeps track of # rounds; default starting with 1
    //IF: round = 1-4, re-run the playRound function.
    //IF: round = tie, re-run the playRound function; do NOT count as a new round
    //IF: round = 5; state final score and determine a winner. Resets scores and # rounds to play again.
function playGame(round) {
    if(result = "Tie, play another round.") {
        console.log(round)
        round -= 1
        getHumanChoice()
        getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log(round)
        }
    if(round = 1) {
        getHumanChoice()
        getComputerChoice()
        playRound(humanChoice, computerChoice)
        }
    if(round = 2) {
        getHumanChoice()
        getComputerChoice()
        playRound(humanChoice, computerChoice)
        }
    if(round = 3) {
        getHumanChoice()
        getComputerChoice()
        playRound(humanChoice, computerChoice)
        }
    if(round = 4) {
        getHumanChoice()
        getComputerChoice()
        playRound(humanChoice, computerChoice)
        }
    if(round = 5) {
        if(humanScore > computerScore) {
            alert("Congratulations, you won! Click OK to play again.")
        }
        if(humanScore < computerScore) {
            alert("Sorry, the computer won this time. Click OK to play again.")
        }
        //round = 0
        //humanScore = 0
        //computerScore = 0
        //getHumanChoice()
        //getComputerChoice()
        //playRound(humanChoice, computerChoice)
    }
}

playGame(round);