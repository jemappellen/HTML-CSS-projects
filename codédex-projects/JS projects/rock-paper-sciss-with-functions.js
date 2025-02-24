//Get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error. Please type "rock", "paper" or "scissors".');
    }
  };
  
  //Get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  //Compare the two choices and determine a winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } 
  
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Sorry, computer won!';
        } else {
          return 'Congratulations, you won!';
        }
    }
  
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Sorry, computer won!';
        } else {
          return 'Congratulations, you won!';
        }
    }
  
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Sorry, computer won!';
        } else {
          return 'Congratulations, you won!';
        }
    }
  
    if (userChoice === 'bomb') {
        return 'Congratulations, you definitely won!'
    }
  };
  
  //Start the program and display the results.
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}.`);
    console.log(`The computer threw: ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();