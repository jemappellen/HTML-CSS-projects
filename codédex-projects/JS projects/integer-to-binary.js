
// With for loop

const myNumber = 3;
let binary = '';

for (let i = myNumber; i >= 1; i = Math.floor(i/2)) {
  if (i % 2 === 0) {
    binary += '0';
  } else {
    binary += '1';
  }
}

console.log('With for loop: ' + binary);

// With while loop

let i = myNumber
binary = "";

while (i >= 1) {
  if (i % 2 === 0) {
    binary += '0';
  } else {
    binary += '1';
  }
  i = Math.floor(i/2);
}

console.log('With while loop: ' + binary);