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

function playRound(humanChoice, computerChoice) {
    //Check for draw first
    if (humanChoice === computerChoice) { 
        console.log("It's a draw!")
    }
    //Check for all human win conditions
    else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") || 
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log("Round won!")
        humanScore++;
        console.log("You: " + humanScore);
        console.log("CPU: " + computerScore);
    }
    //All remaining conditions must be a loss (computer wins)
    else {
        console.log("Round lost!")
        computerScore++;
        console.log("You: " + humanScore);
        console.log("CPU: " + computerScore);
    }
}

function playGame() { 
    while (humanScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Game over! You won!");
    }
    else {
        console.log("Game over! You lost!")
    }

}

playGame();