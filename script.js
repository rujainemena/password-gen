// Assignment Code
var generateBtn = document.querySelector("#generate");
// defined the variables for the prompts
var character = "!@#$%^&*()";
var number = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


/*
Pseudo Code based on criteria:

- first prompt (WINDOW.PROMPT), ask user for length of password. must be between 8-128 only.
-- alert user if character legnth is under 8 or over 128 with "invalid entry"

- second prompt (WINDOW.CONFIRM - this is a boolean - true / false), ask user the character type: lowercase, uppercase, numeric, special characters.
-- add window.confirm  lowercase
-- add window.confirm  uppercase
-- add window.confirm  special characters
-- add window.confirm  numbers

- must create variables to tell the computer what it is.
-- to save special characters
-- to save numbers
-- lowercase for A-Z
-- uppercase for A-Z

- display password on the page

*/

function generatePassword() {
  var savePassword = ""
  var userLength = window.prompt("Enter your preferred password length.")

  if (userLength >= 8 && userLength <= 128) {
    var isLowerCase = window.confirm("Do you want to include lower case letters?");
    var isUpperCase = window.confirm("Do you want to include capital letters?");
    var addNumber = window.confirm("Do you want to include numbers?");
    var addCharacter = window.confirm("Do you want to include special characters?");

    if (isLowerCase === true) {
      var randomIndex = Math.floor(Math.random() * lowerCase.length)
      savePassword = savePassword + lowerCase[randomIndex]
    }

    if (isUpperCase === true) {
      var randomIndex = Math.floor(Math.random() * upperCase.length)
      savePassword = savePassword + upperCase[randomIndex]
    }

    if (addNumber === true) {
      var randomIndex = Math.floor(Math.random() * number.length)
      savePassword = savePassword + number[randomIndex]
    }

    if (addCharacter === true) {
      var randomIndex = Math.floor(Math.random() * character.length)
      savePassword = savePassword + character[randomIndex]
    }

    if (isLowerCase === false && isUpperCase === false && addCharacter === false && addNumber === false) {
      window.alert("You must choose at least two character types.")
    }

  } else {
    window.alert("Invalid Entry")
  }

for (let i = 0; i < generatePassword.length; i++) {
  const finalPass = generatePassword[i];
  savePassword += finalPass
  break
}
  return savePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
