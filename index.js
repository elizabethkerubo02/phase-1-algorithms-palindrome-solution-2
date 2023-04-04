function isPalindrome(word) {
  //loops through string halfway
  for (let startStringIndex = 0; startStringIndex < word.length / 2; startStringIndex++) {
    const endStringIndex = word.length - 1 - startStringIndex;
    //comparing the firstletter with the last letter
    if (word[startStringIndex] !== word[endStringIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
