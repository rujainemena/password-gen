// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables I'm using for password
var character = "!@#$%^&*()".split("");
var number = "1234567890".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// an array to collect the user's answers
var savePassword = [];

// function to generate random password.
function generatePassword() {

  // prompt for the user to choose password length. 
  var userLength = window.prompt("Enter your preferred password length. (Between 8 and 128 characters)")
  if (userLength < 8 || userLength > 128) {
    window.alert("Invalid Entry. Please enter a number between 8 and 128.")
    return;
  }
  // confirm prompts for users to style their password. 
  if (userLength >= 8 && userLength <= 128) {
    var isLowerCase = window.confirm("Do you want to include lower case letters?");
    var isUpperCase = window.confirm("Do you want to include capital letters?");
    var addNumber = window.confirm("Do you want to include numbers?");
    var addCharacter = window.confirm("Do you want to include special characters?");

    // if statements to proceed with custom characters for password
    if (isLowerCase === true) {
      savePassword = savePassword.concat(lowerCase);
    }

    if (isUpperCase === true) {
      savePassword = savePassword.concat(upperCase);
    }

    if (addNumber === true) {
      savePassword = savePassword.concat(number);
    }

    if (addCharacter === true) {
      savePassword = savePassword.concat(character);
    }

    if (isLowerCase === false && isUpperCase === false && addCharacter === false && addNumber === false) {
      window.alert("Please try again.");
    }
  }

  // variable to store final password
  var finalPass = "";
  for (let i = 0; i < userLength; i++) {
    finalPass = finalPass + savePassword[Math.floor(Math.random() * savePassword.length)];
  }
  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
