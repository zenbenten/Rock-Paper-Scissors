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
of the game if applicable **/

/*
FUNCTION getComputerChoice
    GET random number from 0 - 2
    
    IF number is 0
        choice is rock
    IF number is 1
        choice is paper 
    IF number is 2
        choice is scissors

    RETURN choice
*/
console.log(Math.random() * 100);