// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+{}[]";
var finalOptions = "" 
// Created variables to store the characters and numbers
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
// This function helps generates the password   


var input = prompt("How many characters do you want in your password? " + "Password must be between 8 and 128 characters");

if ((input < 8 || input > 128)) {
  alert("You did not return how many characters you want in your password");
  generatePassword(); // This if statement prints out an alert if the characters is less than 8 or greater than 128
}
var upperCase = confirm("Do you want uppercase letters?")
var lowerCase = confirm("Do you want lowercase letters?") // The confirms asks the user which options they want to use
var numbers = confirm("Do you want numbers letters?")
var specialCharacters = confirm("Do you want special characters?")
if( upperCase === false && lowerCase === false && numbers === false && specialCharacters === false) {
  alert ("You must choose at least one option"); // This prints if the user says no to all options
  generatePassword();
}
if(upperCase === true) {
  finalOptions += upperCaseChar
}
if(lowerCase === true) {
  finalOptions += lowerCaseChar // Adds the characters according to the user's choices
}
if(numbers === true) {
  finalOptions += numbers
}
if(specialCharacters === true) {
  finalOptions += specialCharacters
}

var password = ""
for (var i = 0; i < input; i++) {
  var randomIndex = Math.floor(Math.random()*finalOptions.length);
  var randomChar = finalOptions[randomIndex];
  password += randomChar;
}
return password;
} 
// The for loop generates the characters and prints out the final result











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
