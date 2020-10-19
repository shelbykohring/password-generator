// My Password Generator provides a password with 8-128 characters including the criteria the user chooses.

//Assignment Code + Event Listener to prompt character confirms
document.querySelector("#generate").addEventListener("click", writePassword);

// Character Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration for length, special characters, numbers, lowercase and upper case.
var confirmLength = "";
var confirmSpecial;
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;

// Prompt to confirm how many characters the user would like in their password.
function generatePassword() {
  var confirmLength = (prompt("Welcome to My Password Generator, where you can choose the criteria for your password. Let's start with length. How many characters would you like your password to be? (Enter a number between 8-128.)"));

  // Only allow answer inside length parameters.
  while(confirmLength < 8 || confirmLength > 128) {
      alert("Password length must be between 8-128 characters. Please try again!");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      
      // Tell use how many charactes their password will have based on their input.  
      alert("Your password will have " + confirmLength + " characters.");

      // Confirm special characters, numbers, lowercase and uppercase. 
      var confirmSpecial = confirm("Click 'OK' to include special characters in your password.");
      var confirmNumber = confirm("Click 'OK' to include numbers in your password.");    
      var confirmLowerCase = confirm("Click 'OK' to include lowercase letters in your password.");
      var confirmUpperCase = confirm("Click 'OK' to include uppercase letters in your password.");
      
      // User must select one. Loop back if none are confirmed.
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumber === false) {
        alert("You must confirm at least one of the following to include in your password.");
        var confirmSpecial = confirm("Click 'OK' to include special characters.");
        var confirmNumber = confirm("Click 'OK' to include numbers.");    
        var confirmLowerCase = confirm("Click 'OK' to include lowercase letters.");
        var confirmUpperCase = confirm("Click 'OK' to include uppercase letters.");   
      } 

    // Create Password Characters Array based on users confirmed parameters.
    var passwordCharacters = []

        if (confirmSpecial) {
          passwordCharacters = passwordCharacters.concat(special)
        }

        if (confirmNumber) {
          passwordCharacters = passwordCharacters.concat(number)
        }

        if (confirmLowerCase) {
          passwordCharacters = passwordCharacters.concat(lowerCase)
        }

        if (confirmUpperCase) {
          passwordCharacters = passwordCharacters.concat(upperCase)
        }

    console.log(passwordCharacters)

    // Use for loop to fill password based on criteria entered
    var randomPassword = ""

      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }

      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}