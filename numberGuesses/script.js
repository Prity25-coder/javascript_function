let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return `${Math.floor(Math.random() * 9)}`;
};

const compareGuesses = (humanGuess, computerGuess, seceretNumber) => {
    if ((humanGuess - computerGuess) <= 2 && (humanGuess - computerGuess) >= 0) {
        return true;
    } else if ((computerGuess - humanGuess) <= 2 && (computerGuess - humanGuess) >= 0) {
        return true;
    } else{
      return false;
    }
};
const updateScore = winner => {
    if (winner) {
        if (winner === 'human') {
            humanScore++;
        } else {
            computerScore++;

        }
    }
};

const advanceRound = () => {
    currentRoundNumber++;
}



