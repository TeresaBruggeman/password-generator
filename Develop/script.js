// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password
// get length of password from user
function generatePassword() {
  var pwLength = prompt("How many characters should the password contain? Enter a number between 8 and 128");
  parseInt(pwLength);
  if (pwLength < 8 || pwLength > 128) {
    pwLength=prompt("Entry invalid. Please enter with the range of 8 - 128.");
  }
  console.log(pwLength);

//get character sets from user
// define the array
var charType = [];
//loop to accept input until user indicates done
while (charType.indexOf("done") == -1 ){
  var userCharChoice = prompt("What character type(s) should the password contain? Enter uppercase, lowercase, numbers, or special. Type Done if done chosing.");
  // all entries to lower case for error handling
  userCharChoice = userCharChoice.toLowerCase();
  // verify entry is legal
  while (userCharChoice !== "uppercase" && userCharChoice !== "lowercase" && userCharChoice !== "numbers" && userCharChoice !== "special" && userCharChoice !== "done"){
    userCharChoice = prompt("Please enter only uppercase, lowercase, numbers, or special! Or Done if you are done chosing." );
  }

    console.log(userCharChoice);
    charType.push(userCharChoice);
    for (var i = 0; i < charType.length; i++) {
      console.log(charType[i]);
          }
  }


  //generating password
  var newPassword = "";
  var randomChar ="";

  while (newPassword.length < pwLength){
    randomCharSet = charType[(Math.floor(Math.random() * charType.length))];
    console.log(randomCharSet);
    if (randomCharSet === "uppercase") {
      randomChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('')[(Math.floor(Math.random() * 26 ))];
      console.log(randomChar);
    }
    else if (randomCharSet === "lowercase") {
      randomChar = ("abcdefghijklmnopqrstuvwxyz").split('')[(Math.floor(Math.random() * 26 ))];
      console.log(randomChar);
    }
    else if (randomCharSet === "numbers") {
      randomChar = ("1234567890").split('')[(Math.floor(Math.random() * 10 ))];
      console.log(randomChar);
    }
    else if (randomCharSet === "special") {
      randomChar = ("!@#%^&*()+-=:").split('')[(Math.floor(Math.random() * 13 ))];
      console.log(randomChar);
    }
    newPassword += randomChar;
    randomChar = "";
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
