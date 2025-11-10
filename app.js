let humanScore = 0;
let computerScore = 0;

//Randomly choose for computer out of rock, paper or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice = "";

    if (number === 0) {
        choice = "Rock";
    }
    else if (number === 1) {
        choice = "Paper";
    }
    else if (number === 2) {
        choice = "Scissors";
    }

    return choice;
}

//Take user's input for their selection
function getHumanChoice() {
    //Get input
    let input = prompt("Enter your choice (R, P, S): ")

    //Process input
    let choice = input.toLowerCase();

    //Map to full word
    let result = "";
    if (choice === "r") {
        result = "Rock"
    }
    if (choice === "p") {
        result = "Paper"
    }
    if (choice === "s") {
        result = "Scissors"
    }

    return result;
}