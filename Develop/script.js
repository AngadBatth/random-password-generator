// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Setting Global variables for all the letters, numbers and symbols available in the password.
var password = "";
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersList = "0123456789";
var symbolsList = "!#$%&'()*_+,-[\\]./:;=<>?@^`{|}~";

function generatePassword() {
  var passLength = prompt("How many Characters would you like the password to be? (Please choose between 8 - 128 characters)");

  if (passLength < 8 || passLength > 128) {
    alert("Error: Invalid input. Please choose a number between 8 - 128 characters");
    return;
  }
}
