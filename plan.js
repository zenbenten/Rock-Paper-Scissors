/**
The program will repeatedly apply a game loop.
Rounds of rock paper scissors will be player until either player
has won two total victories, which makes them the winner of the game.
The cpu will make their own selection at random of rock, paper or scissors.
Then will take user's input of the same three options.  
Then calculate who the winner of the round is accordingly. 
Increment the score of the winner
If either player has two total round wins, they win the game
Display the selections of each opponent and the winner of the round, or
of the game if applicable 

STEP 1: Set up project structure ----------------------DONE
STEP 2: Write the logic to get the computer choice ----DONE
STEP 3: Write the logic to get the human choice--------DONE
STEP 4: Declare the players score variables------------DONE
STEP 5: Write the logic to play a single round---------DONE
STEP 6: Write the logic to play entire game------------DONE
**/


/*


let humanScore = 0;
let computerScore = 0;


//Randomly choose for computer out of rock, paper or scissors
FUNCTION getComputerChoice
    console.log(Math.random() * 3);
    GET random number from 0 - 2
    
    IF number is 0
        choice is rock
    IF number is 1
        choice is paper 
    IF number is 2
        choice is scissors

    RETURN choice
END FUNCTION

//Take user's input for their selection
FUNCTION getHumanChoice
    // Get input
    DISPLAY "Enter your choice (R, P, S): "
    INPUT human_input

    //Process input
    choice <- TO_LOWER(human_input)

    //Map to full word
    IF choice is r THEN
        result <- "Rock"
    ELSE IF choice is p THEN
        result <- "Paper"
    ELSE choice is s THEN
        result <- "Scissors"
    END IF

    RETURN result 
END FUNCTION

FUNCTION playRound(humanChoice, computerChoice)


    //Check for draw first
    IF humanChoice = computerChoice THEN
        DISPLAY "It's a draw!"

    //Check for all human win conditions
    ELSE IF (humanChoice = "Rock" AND computerChoice = "Scissors") OR \
            (humanChoice = "Paper" AND computerChoice = "Rock") OR \
            (humanChoice = "Scissors" AND computerChoice = "Paper") THEN
        DISPLAY "Round won!" 
        humanScore <- humanScore + 1

    //All remaining conditions must be a loss (computer wins)
    ELSE
        DISPLAY "Round lost!"
        computerScore <- computerScore + 1

END FUNCTION

FUNCTION playGame
    WHILE humanScore < 5 AND computerScore < 5
        playRound(getHumanChoice(), getComputerChoice)
    END WHILE

    IF humanScore > computerScore THEN
        DISPLAY "Game over! You won!"
    ELSE 
        DISPLAY "Game over! You lost!"

END FUNCTION
*/

