// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

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

    // Setting variables for boolean prompts asking to include list variables.
    var includeLower = confirm("Would you like to include Lower Case characters in the password?");
    var includeUpper = confirm("Would you like to include Upper Case characters in the password?");
    var includeNums = confirm("Would you like to include Numbers in the password?");
    var includeSymbol = confirm("Would you like to include special Symbols in the password?");
    var includeThese = "";
  
    if (includeLower == true) {
      includeThese += lowerCaseList;
    }
  
    if (includeUpper == true) {
      includeThese += upperCaseList;
    }
  
    if (includeNums == true) {
      includeThese += numbersList;
    }
  
    if (includeSymbol == true) {
      includeThese += symbolsList;
    }
  
    while (!includeLower && !includeUpper && !includeNums && !includeSymbol) {
      alert("Please select 1 type to include");
  
      includeLower = confirm("Would you like to include Lower Case characters in the password?");
      includeUpper = confirm("Would you like to include Upper Case characters in the password?");
      includeNums = confirm("Would you like to include Numbers in the password?");
      includeSymbol = confirm("Would you like to include special Symbols in the password?");
  
    }
  
    for (i = 0; i < passLength; i++) {
      password += includeThese[Math.floor(Math.random() * includeThese.length)];
    }
  
    return password;
    
  }
