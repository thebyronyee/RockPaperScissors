//Testing if js file linked to html file - console log will display "Hello World!"
console.log("Hello World!");

//getComputerChoice: 
    //getComputerChoice will randomly RETURN a string of "rock", "paper", or "scissors"
    //Random Number: Use Math.random to generate random number 1-3
    //Variable string: Assign random number; 1 = rock, 2 = paper 3 = scissors
    //Console will return string result

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber === 1) {return "rock"}
        else if(randomNumber === 2) {return "paper"}
        else{return "scissors"}
    }
    
//getHumanChoice: 
    //Prompt human to choose b/t rock/paper/scissors
    //If typed selection is one of those 3 options, console will return human choice
    //If not, then prompt user to try again
    function getHumanChoice() {
        let text;
        let selection = prompt("Please type one of the following letter options: 'rock', 'paper', or 'scissors'.")
        switch(selection) {
        case  "rock":
            console.log("You chose rock");
            break;
        case  "paper":
            console.log("You chose paper");
            break;
        case  "scissors":
            console.log("You chose scissors");
            break;
        default: 
            console.log("I'm sorry, I don't recognize that option. Please choose again from the following options by typing: 'rock', 'paper', or 'scissors'.")
        }
    }

