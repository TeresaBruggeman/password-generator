// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password
function generatePassword() {
  var length = prompt("How many characters should the password contain? Enter a number between 8 and 128");
  parseInt(length);
  if (length < 8 || length > 128) {
    length=prompt("Entry invalid. Please enter with the range of 8 - 128.");
  }
  console.log(length);
  var charType = prompt("What character type should the password contain? Enter uppercase, lowercase, numbers, or special");
  charType = charType.toLowerCase();
  if (charType !== "uppercase" || charType !== "lowercase" || charType !== "numbers" || charType !== "special"{
    charType = prompt("Please enter only uppercase, lowercase, numbers, or special!" );
  }
  console.log(charType);


  var newPassword = "";
  var charUse = "";
  for (var i = 0; i <= length; i++) {
    if (charType === "uppercase") {
      charUse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else if (charType === "lowercase") {
      charUse = "abcdefghijklmnopqrstuvwxyz";
    }
    else if (charType === "numbers") {
      charUse = "1234567890";
    }
    else if (charType === "special") {
      charUse = "!@#$%^&*()_+-=;:";
    }
    newPassword += charUse.charAt(Math.floor(Math.random() * charUse.length));
  }
  return newPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
