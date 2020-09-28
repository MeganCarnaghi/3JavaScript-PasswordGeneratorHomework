// An empty array to push all data into
var emptyArray = [];

// Arrays for password data
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "@", "$", "%", "&", "+", "=", "*", "^", "~"];

//var for user's final password
var finalPassword = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to show prompt list to user
function generatePassword() {
var passwordLength = prompt("How many characters do you want to use in your password? (Please choose a value between 8 and 128.)");
console.log(passwordLength);

// Alert in case user selects a number less than 8 or greater than 128
if(passwordLength < 8 || passwordLength > 128) {
  alert("Your password must be at least 8 characters and no more than 128 characters. Please try again.")
} else {

//Additional prompts to confirm the rest of the pw data for user
  var pwLowercase = confirm("Would you like to include lowercase letters in your password?");
  console.log(pwLowercase);
  var pwUppercase = confirm("Would you like to include uppercase letters in your password?");
  console.log(pwUppercase);
  var pwNumbers = confirm("Would you like to include numbers in your password?");
  console.log(pwNumbers);
  var pwSymbols = confirm("Would you like to include symbols in your password?");
  console.log(pwSymbols);
}
if(pwLowercase === true) {
  Array.prototype.push.apply(emptyArray, lowercase)}
  console.log(emptyArray);

if(pwUppercase === true){
  Array.prototype.push.apply(emptyArray, uppercase)}
  console.log(emptyArray);


if(pwNumbers === true) {
  Array.prototype.push.apply(emptyArray, numbers)}
  console.log(emptyArray);

if(pwSymbols === true) {
  Array.prototype.push.apply(emptyArray, symbols)}

else {
for (let index=0; index < passwordLength; index++) {
  let passwordCharacters = Math.floor(Math.random() * emptyArray.length)
  console.log(passwordCharacters)
  finalPassword += emptyArray[passwordCharacters]
  console.log(finalPassword)

  return finalPassword;
}
}
}
