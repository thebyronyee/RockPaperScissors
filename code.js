//Testing if js file linked to html file - console log will display "Hello World!"
console.log("Hello World!");

//getComputerChoice: 
    //getComputerChoice will randomly RETURN a string of "rock", "paper", or "scissors"
    //Random Number: Use Math.random to generate random number 1-3
    //Variable string: Assign random number to rock/paper/scissors

//ComputerChoice
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber === 1) {return "Rock"}
        else if(randomNumber === 2) {return "Paper"}
        else{return "Scissors"}
    }
    




    

