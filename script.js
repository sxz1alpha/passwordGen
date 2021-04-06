// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = tempPassword;
  var passwordText = document.querySelector("#password");

passwordText.value = password;
tempPassword = ''
}

// prompts to get paramaters
var tempPassword = ''

// get random characters by using math.random

function getLowerCase() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

function getCapitalLetters () {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getNumbers () {
 return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getSpecialCharacters () {
 return String.fromCharCode(Math.floor(Math.random() * 16) + 32);
};

//password criteria functions
var passwordCriteria = function() { 
  var lengthPrompt = parseInt(window.prompt("How long would you like your password? Pick between 8 and 128 characters"));
  // if one of the prompts has a cancel performed by the user the if tatments the directly follow each promp will end the password generation sequence
  if (lengthPrompt === null) {
    return
  }
  // this if statment will trigger a user alert if the password length is outside the prescribed criteria
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Password must be between 8 and 128 characters.")
}
  // if the password length is in the right criteria it will trigget the other criteria prompt 
  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    var capitalLettersPrompt = window.prompt("do you want capital letters in your password? If yes type y.");
    if (capitalLettersPrompt === null) {
      return
    }
    var specialCharactersPrompt = window.prompt("do you want special characters in your password? If yes type y.");
    if (specialCharactersPrompt === null) {
      return
    }
    var lowerCasePrompt = window.prompt("do you want lower case letters in your password? If yes type y.");
    if (lowerCasePrompt === null) {
      return
    }
    var numbersPrompt = window.prompt("do you want numbers in your password? If yes type y.");
    if (numbersPrompt === null) {
      return
    }  
    
    // once the other prompts values have been established by the user a loop will beggin randomly generating characters until the length value raches zero
    for (i = 0; i = lengthPrompt; i++) {

        if (lowerCasePrompt === "y" && lengthPrompt > 0) {
           lengthPrompt = lengthPrompt - 1
           getLowerCase.value
           // created a temporary password value to store the end results of the math.random functions. =tempPassword = tempPassword + X
           tempPassword = tempPassword + getLowerCase()
          }

         if (capitalLettersPrompt === "y" && lengthPrompt > 0) {
           lengthPrompt = lengthPrompt - 1
           tempPassword = tempPassword + getCapitalLetters()
         }

         if (specialCharactersPrompt === "y" && lengthPrompt > 0) {
           lengthPrompt = lengthPrompt - 1
           tempPassword = tempPassword + getSpecialCharacters()
         }

         if (numbersPrompt === "y" && lengthPrompt > 0) {
           lengthPrompt = lengthPrompt - 1
           tempPassword = tempPassword + getNumbers()
          }
          
          // if the user doesnt select atleast one criteria this if statment will trigger an alert.
         if (lowerCasePrompt != "y" && capitalLettersPrompt != "y" && specialCharactersPrompt != "y" && numbersPrompt != "y") {
           alert("you must select atleast one criteria")
           passwordCriteria()
          }

        }
      // this writes the password to the password block in the html
      writePassword()

    } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {passwordCriteria()});



