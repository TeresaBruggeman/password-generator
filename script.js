// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password
function generatePassword() {
  var pwLength = genPasswordLength();  //call function to get password length from user
  var charType = [];
  var charAvail = ["UPPERCASE", "lowercase", "numb3r5", "$peci@l"];
 
  //loop to accept input until charAvail array has been exhausted
  for (var i = 0; i < charAvail.length; i++) {
    var userChoice = confirm("Confirm if " + charAvail[i] + " should be included in new password.");
    
    //populate charType array with user's choices
    if (userChoice === true) {
      charType.push(charAvail[i]);
    }
    
    //if no character types chosen end program
    else if (userChoice === false && charAvail[i] === charAvail[charAvail.length - 1] && !charType.length) {
      alert("Please try again");
      return;
    }
  }

  //generating password
  var randomChar = "";
  var newPassword = "";
  
  while (newPassword.length < pwLength) {
    randomCharSet = charType[(Math.floor(Math.random() * charType.length))];
        if (randomCharSet === "UPPERCASE") {
      randomChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('')[(Math.floor(Math.random() * 26))];
    }
    else if (randomCharSet === "lowercase") {
      randomChar = ("abcdefghijklmnopqrstuvwxyz").split('')[(Math.floor(Math.random() * 26))];
    }
    else if (randomCharSet === "numb3r5") {
      randomChar = ("1234567890").split('')[(Math.floor(Math.random() * 10))];
    }
    else if (randomCharSet === "$peci@l") {
      randomChar = ("!@#%^&*()+-=:").split('')[(Math.floor(Math.random() * 13))];
    }
    newPassword += randomChar;
    randomChar = "";
  }
  return newPassword;
}
//prompts user to specify how many characters long the password should be, returns numerics length
function genPasswordLength() {
  var pwLength = prompt("Please enter the number of characters the new password should contain. (Enter a number between 8-128)");
  
  //verify entry was within the range
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Entry invalid. Please enter within the range of 8 - 128.");
  }
  return pwLength;
}
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

