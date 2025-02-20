let question = 'Will I master JS?';
let answer = '';

let randomNumber = Math.floor(Math.random() * 9) + 1;

switch (randomNumber) {
  case 1:
    answer = 'Yes - definitely.';
    break;
  case 2:
    answer = 'It is decidedly so.';
    break;
  case 3:
    answer = 'Without a doubt.';
    break;
  case 4:
    answer = 'Reply hazy, try again.';
    break;
  case 5:
    answer = 'Ask again later.';
    break;
  case 6:
    answer = 'Better not tell you now.';
    break;
  case 7:
    answer = 'My sources say no.';
    break;
  case 8:
    answer = 'Outlook not so good.';
    break;
  case 9:
    answer = 'Very doubtful.';
    break;
  default:
    answer = 'Program error.';
    break;
}

console.log(`Question: ${question}`);
console.log(`Magic 8 Ball: ${answer}`);