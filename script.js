// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password
// get length of password from user
function generatePassword() {
  var pwLength = genPasswordLength();  //call function to get password length from user
  var charType = [];
  var charAvail = ["UPPERCASE", "lowercase", "numb3r5", "$peci@l"];
  //loop to accept input until charAvail array has been exhausted
  for (var i = 0; i < charAvail.length; i++) {
    var userChoice = confirm("Confirm if " + charAvail[i] + " should be included in new password.");
    localStorage.setItem.userChoice;
    console.log(userChoice);
    //populate charType array with user's choices
    if (userChoice === true) {
      charType.push(charAvail[i]);
      console.log(charType);
    }
    //if they don't choose any character types end program
    else if (userChoice === false && charAvail[i] === charAvail[charAvail.length - 1] && !charType.length) {
      alert("Please try again");
      return;
    }
    else { 
    }
  }
  //generating password
  var randomChar = "";
  var newPassword = "";
  while (newPassword.length < pwLength) {
    randomCharSet = charType[(Math.floor(Math.random() * charType.length))];
    console.log(randomCharSet);
    if (randomCharSet === "UPPERCASE") {
      randomChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('')[(Math.floor(Math.random() * 26))];
      console.log(randomChar);
    }
    else if (randomCharSet === "lowercase") {
      randomChar = ("abcdefghijklmnopqrstuvwxyz").split('')[(Math.floor(Math.random() * 26))];
      console.log(randomChar);
    }
    else if (randomCharSet === "numb3r5") {
      randomChar = ("1234567890").split('')[(Math.floor(Math.random() * 10))];
      console.log(randomChar);
    }
    else if (randomCharSet === "$peci@l") {
      randomChar = ("!@#%^&*()+-=:").split('')[(Math.floor(Math.random() * 13))];
      console.log(randomChar);
    }
    newPassword += randomChar;
    randomChar = "";
  }
  return newPassword;
}
//prompts user to specify how many characters long the password should be, returns numerics length
function genPasswordLength() {
  var pwLength = prompt("Please enter the number of characters the new password should contain. (Enter a number between 8-128)");
  parseInt(pwLength);
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Entry invalid. Please enter within the range of 8 - 128.");
  }
  console.log(pwLength);
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

