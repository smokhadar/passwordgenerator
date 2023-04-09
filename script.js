// defining generate button
var generateBtn = document.querySelector("#generate");
// define passwordtext to update with random password
var passwordText = document.querySelector("#password");
passwordText.value = "";

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

// creates object to store user input in properties
var options = {
  wantsUppercase: wantsUppercase,
  wantsLowercase: wantsLowercase,
  wantsNumber: wantsNumber,
  wantsSpecial: wantsSpecial,
};
// log object
console.log(options);

 // create empty array to add definite values user requested 
 var definitePassword = [];
 console.log(definitePassword);
 
 // define variables for writePassword function
 var upper
 var lower
 var num
 var spec
 
 // Write password to the #password input
 function writePassword() {
   if (options.wantsUppercase) {
     upper = Math.floor(Math.random() * uppercase.length);
     console.log(upper, uppercase[upper]);
   } if (options.wantsLowercase) {
     lower = Math.floor(Math.random() * lowercase.length);
     console.log(lower, lowercase[lower]);
   } if (options.wantsNumber) {
     num = Math.floor(Math.random() * numbers.length);
     console.log(num, numbers[num]);
   } if (options.wantsSpecial) {
     spec = Math.floor(Math.random() * specialCharacter.length);
     console.log(spec, specialCharacter[spec]);
   }
 
 // for (i=0; i < length; i++) {
   definitePassword = definitePassword.concat(upper,lower, num, spec);
   console.log(definitePassword);
   // must guarantee ALL selected characters included in array
 };
 // feed to math floor random
var possiblePassword = [];
var possibleLength = length - definitePassword

// combine definite and possible password



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

  if (wantsLowercase || wantsUppercase || wantsNumber || wantsSpecial) {
      writePassword();
  }
});