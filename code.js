//Testing if js file linked to html file - console log will display "Hello World!"
console.log("Hello World!");

//getComputerChoice: 
    //getComputerChoice will randomly RETURN a string of "rock", "paper", or "scissors"
    //Random Number: Use Math.random to generate random number 1-3
    //Variable string: Assign random number to rock/paper/scissors

//function getComputerChoice () {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    let randomNumber = getRandomIntInclusive(1, 3);
    console.log(randomNumber);

