// let word = "arara"

function isItPalindrome(word) {
  let palindrome = "";

  for (let index = word.length - 1; index >= 0; index -= 1) {
    palindrome += word[index];
  }

  if (word == palindrome) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isItPalindrome("melancia");
