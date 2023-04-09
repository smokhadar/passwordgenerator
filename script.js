// defining generate button
var generateBtn = document.querySelector("#generate");

// variable for characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C",'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!", "@", " ",'"',"#",'$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','[',']','^','_','`','{','|','}','~'];

// variables for user confirm windows
var wantsUppercase
var wantsLowercase
var wantsNumber
var wantsSpecial

// Add event listener to generate button
// Series of prompts soliciting user info to use for password
generateBtn.addEventListener("click", function() {

//  prompt requesting length of password
  var lengthStr = prompt("What length do you want your password between 8-128 characters?");
    console.log(lengthStr);
     console.log(typeof lengthStr);
    // converts user input string to number
  var length = parseInt(lengthStr);
    console.log(length);
     console.log(typeof length);

 // confirm requesting lowercase letters
  // Verifies user enters value between 8 and 128
if(length >=8 & length <= 128) {
  wantsLowercase = confirm("Confirm if you want lowercase characters.");
  console.log(wantsLowercase);
// alert if password length not within range
} else {
  alert("Please enter a valid number");
  return;
};
  // confirm requesting uppercase letters
    wantsUppercase = confirm("Confirm if you want uppercase characters.");
    console.log(wantsUppercase);

  // confirm reqwuesting numbers
    wantsNumber = confirm("Confirm if you want numbers.");
    console.log(wantsNumber);

  // confirm requesting special characters
    wantsSpecial = confirm("Confirm if you want special characters.");
    console.log(wantsSpecial);

  // create alert if doesnt say yes once - needs to select at least 1 character type to use
   if (!wantsLowercase && !wantsUppercase  && !wantsNumber && !wantsSpecial) {
    alert("Please select at least one character type to use in the password."); };
  writePassword();
});

var options = {
  wantsUppercase: wantsUppercase,
  wantsLowercase: wantsLowercase,
  wantsNumber: wantsNumber,
  wantsSpecial: wantsSpecial,
};

console.log(options);

 // create empty array to add definite values user requeste
const definitePassword = [];
console.log(definitePassword);

// Write password to the #password input
function writePassword() {
  if (options.wantsUppercase) {
    var upper = Math.floor(Math.random() * uppercase.length);
    console.log(upper, uppercase[upper]);
  } 
  if (options.wantsLowercase) {
    var lower = Math.floor(Math.random() * lowercase.length);
    console.log(lower, lowercase[lower]);
  } if (options.wantsNumber) {
    var num = Math.floor(Math.random() * numbers.length);
    console.log(num, numbers[num]);
  } if (options.wantsSpecial) {
    var spec = Math.floor(Math.random() * specialCharacter.length);
    console.log(spec, specialCharacter[spec]);
  }
// for (i=0; i < length; i++) {
  definitePassword = upper.concat(lower, num, spec);
  console.log(definitePassword);
  // must guarantee ALL selected characters included in array
};

// feed to math floor random
const possiblePassword = [];
var possibleLength = length - definitivePassoword

// combine definite and possible password

  // take global uppercase array and put into definite password
  // use math.floor.random to randomly pick
// concat uppercase into empty array
// only pull one value from each array
    // concat lowercase into same array that was once blank

// variable for numbers

var passwordText = document.querySelector("#password");
passwordText.value = "";