// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() = {
    // length: length,
    // lowercase: lowercase,
    // uppercase: uppercase,
    // numbers: numbers,
    // specialCharacter: specialCharacter,
  };

// creating options for password generator? - can i use split string on a proporty in a variable or must it be used on a variable?
  length: ,
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOP",
  numbers: "0123456789",
  specialCharacter: "!@#$&"


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  for (var i = 0; i <= length; i++) {
    password = 
  }
//   generate password with lowercase characters
  if (lowercase === y) {
    
  }
}

// create variable for password length
// Add event listener to generate button
generateBtn.addEventListener("click", function(writePassword) {
    var lengthStr = prompt("What length do you want your password?");
    var length = Number(lengthStr);
 if(length >= 1) {
    var lowercase = prompt("Do you want lowercase characters? y/n");
} if (lowercase) {
    var uppercase = prompt("Do you want uppercase characters? y/n");
} if (uppercase) {
    var numbers = prompt("Do you want numbers? y/n");
} if (numbers) {
    var specialCharacter = prompt("Do you want special characters? y/n")
}
});

// write code changing uppercase input to lowercase
// include error when incorrect user input (not y/n)