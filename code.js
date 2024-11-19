//Testing if js file linked to html file - console log will display "Hello World!"
console.log("JS file connection confirmed");

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let round = 1;


//getComputerChoice: 
    //getComputerChoice will randomly RETURN a string of "rock", "paper", or "scissors"
    //Random Number: Use Math.random to generate random number 1-3
    //Variable string: Assign random number; 1 = rock, 2 = paper 3 = scissors
    //computerChoice: string of the computer choice: rock/paper/scissors
    //Console will return string result "the computer chose..."

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber === 1) {
            computerChoice = "rock";
            //return "The computer chose rock"
            }
        else if(randomNumber === 2) {
            computerChoice = "paper";
            //return "The computer chose paper"
            }
        else{
            computerChoice = "scissors";
            //return "The computer chose scissors"
            }
        //console.log(computerChoice);
        }
    
//getHumanChoice: 
    //Prompt human to choose b/t rock/paper/scissors
    //If typed selection is one of those 3 options, console will return human choice
    //Make human response case-insensitive
    //If not, then prompt user to try again
    function getHumanChoice() {
        let entry = prompt("Please type one of the following letter options: 'rock', 'paper', or 'scissors'.")
        humanChoice = entry.toLowerCase();
        //switch(humanChoice) {
        //case  "rock":
           // console.log("You chose rock");
            //break;
        //case  "paper":
            //console.log("You chose paper");
            //break;
        //case  "scissors":
            //console.log("You chose scissors");
            //break;
        //default: 
            //console.log("Sorry, I don't recognize that option. Please try again.");
        //console.log(humanChoice);
        //}
        //how can I loop this back to the original prompt?
    }

//Declaring Score Variables:
    //humanScore keeps track of human points
    //computerScore keeps track of computer points
    //Initialize variables with starting value of 0
   


 //playRound: function that has 2 parameters: humanChoice, computerChoice
        //Determine who wins each round: paper > rock, rock > scissors, scissors > paper; state winner of round "x beats y, human/computer scores 1 point!"
        //If human wins, add 1pt to human score
        //If computer wins, add 1 pt to computer score
        //Display scoreCard at the end of each round
function playRound(humanChoice, computerChoice) {
    let selection;
    let result;
    let scoreCard;

    if (humanChoice === 'rock' & computerChoice === 'paper') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Paper beats rock, computer scored 1 point."
        computerScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        alert(selection + "\n" + result + "\n" + scoreCard)
        }
    if (humanChoice === 'rock' & computerChoice === 'scissors') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Rock beats scissors, you scored 1 point."
        humanScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        alert(selection + "\n" + result + "\n" + scoreCard)
        }
    if (humanChoice === 'rock' & computerChoice === 'rock') {
        result = "Tie, play another round."
        alert(result)
        }
    if (humanChoice === 'paper' & computerChoice === 'scissors') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Scissors beats paper, computer scored 1 point."
        computerScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        alert(selection + "\n" + result + "\n" + scoreCard)
        }
    if (humanChoice === 'paper' & computerChoice === 'rock') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Paper beats rock, you scored 1 point."
        humanScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        alert(selection + "\n" + result + "\n" + scoreCard)
        }
    if (humanChoice === 'paper' & computerChoice === 'paper') {
        result = "Tie, play another round"
        alert(result)
        }
    if (humanChoice === 'scissors' & computerChoice === 'rock') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Rock beats scissors, computer scored 1 point."
        computerScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        alert(selection + "\n" + result + "\n" + scoreCard)
        }
    if(humanChoice === 'scissors' & computerChoice === 'paper') {
        selection = "You chose " + humanChoice + ". The computer chose " + computerChoice + "."
        result = "Scissors beats paper, you scored 1 point."
        humanScore += 1
        scoreCard = "Current Score: Human: " + humanScore + " , Computer: " + computerScore
        alert(selection + "\n" + result + "\n" + scoreCard)
        }
    if (humanChoice === 'scissors' & computerChoice === 'scissors') {
        result = "Tie, play another round."
        alert(result)
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanChoice, computerChoice);

