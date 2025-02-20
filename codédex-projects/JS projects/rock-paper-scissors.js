let player = 'Rock';
let playerPick = '';

if (player === 'Rock' || player === 'rock') {
  playerPick = 0;
} else if (player === 'Paper' || player === 'paper') {
  playerPick = 1;
} else if (player === 'Scissors' || player === 'scissors'){
  playerPick = 2;
} else {
  console.log('Wrong input. Select rock, paper or scissors.');
}

let computer = '';
let computerPick = Math.floor(Math.random()*3);

if (computerPick === 0) {
  computer = 'Rock';
} else if (computerPick === 1) {
  computer = 'Paper';
} else if (computerPick === 2) {
  computer = 'Scissors';
} else {
  console.log('Error in computer pick generation.');
}

console.log(`Player picked:     ${player}`)
console.log(`Computer picked:   ${computer}`)
console.log('');

if (playerPick === 0) {
  if (computerPick === 0) {
    console.log('Draw.');
  } else if (computerPick === 1) {
    console.log('Computer won!');
  } else if (computerPick === 2) {
    console.log('Player won!');
  } else {
    console.log('Error. Impossible to calculate the result.')
  }
} else if (playerPick === 1) {
  if (computerPick === 0) {
    console.log('Player won!');
  } else if (computerPick === 1) {
    console.log('Draw.');
  } else if (computerPick === 2) {
    console.log('Computer won!');
  } else {
    console.log('Error. Impossible to calculate the result.')
  }
} else if (playerPick === 2) {
  if (computerPick === 0) {
    console.log('Computer won!');
  } else if (computerPick === 1) {
    console.log('Player won!');
  } else if (computerPick === 2) {
    console.log('Draw');
  } else {
    console.log('Error. Impossible to calculate the result.')
  }
}