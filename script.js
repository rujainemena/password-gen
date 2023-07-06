// Assignment Code
var generateBtn = document.querySelector("#generate");

/*

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
