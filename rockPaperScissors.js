const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Your Input is wrong Please try agian!');
    }
  };
  
  const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    // console.log(random);
    if(random === 0){
      return 'rock';
    } else if (random === 1){
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  
  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice) {
      return `YOU Both are tied!`;
    } else if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return `Computer won. Because paper covers the rock!!`;
      } else {
        return `YOU won . Because rock breaks the scissors`;
      }
    } else if (userChoice === 'paper') {
      if(computerChoice === 'rock'){
        return `You won . Because paper covers the rock`;
      } else {
        return `Computer won. Because scissors cuts the paper`;
      }
    } else if (userChoice === 'scissors') {
      if(coputerChoice === 'paper') {
        return `You won. because scissors cuts the paper`;
      } else {
        return `Computer won. Because rock breaks the scissors`;
      }
    }
  }
  const playGame = () => {
    const userGame = getUserChoice('rock');
    console.log(userGame);
    const computerChice = getComputerChoice();
    console.log(computerChice);
    const winner = determineWinner(userGame, computerChice);
    console.log(winner);
  }
  
  // console.log();
  playGame();
  
  
  
  