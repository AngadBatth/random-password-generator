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


// The function that will actually generate the Password
function generatePassword() {
  var passLength = prompt("How many Characters would you like the password to be? (Please choose between 8 - 128 characters)");

  // Makes sure Password length is not below 8 or exceeds 128
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
  
    // Checking boolean values and if true, concatenating lists to includeThese variable.
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
  
    // Using a While loop to ensure atleast 1 type is included. Keeps user in infinite loop of prompts unless selecting 1 attribute as true
    while (!includeLower && !includeUpper && !includeNums && !includeSymbol) {
      alert("Please select 1 type to include");
  
      includeLower = confirm("Would you like to include Lower Case characters in the password?");
      includeUpper = confirm("Would you like to include Upper Case characters in the password?");
      includeNums = confirm("Would you like to include Numbers in the password?");
      includeSymbol = confirm("Would you like to include special Symbols in the password?");
  
    }
  
    // This for loops takes the given password length by the user + all the lists in the includeThese variable and then randomly generates
    // a password with the given criteria from the User. This is done by using the Math.floor and Math.random methods
    for (i = 0; i < passLength; i++) {
      password += includeThese[Math.floor(Math.random() * includeThese.length)];
    }
  
    return password;
    
  }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);