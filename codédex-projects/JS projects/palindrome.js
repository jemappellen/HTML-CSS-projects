// Using split(), reverse(), and join()

function isPalindrome(word) {
    let lowerCaseWord = word.toLowerCase();
    let reversedWord = lowerCaseWord.split('').reverse().join('');
    return reversedWord === lowerCaseWord;
  }
  
console.log(isPalindrome('madaM'));

  // Using a Loop
  
function isPalindrome(word) {
    let reversedWord = "";
    
    let lowerCaseWord = word.toLowerCase();
    
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
      reversedWord += lowerCaseWord[i];
    }
    
    return reversedWord === lowerCaseWord;
}
  
console.log(isPalindrome("Racecar"));