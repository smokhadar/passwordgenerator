// defining generate button
var generateBtn = document.querySelector("#generate");

// define passwordtext to update with random password
var passwordText = document.querySelector("#password");

// arrays for characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C",'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!", "@", " ",'"',"#",'$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','[',']','^','_','`','{','|','}','~'];
var allCharacters = []

// variables for user confirm windows
var wantsUppercase
var wantsLowercase
var wantsNumber
var wantsSpecial

 // create empty array to add definite values user requested 
 var definitePassword = [];
 console.log(definitePassword, "definitePassword");

//  create empty array for possible characters to include in password
 var possiblePassword = [];
 console.log(possiblePassword);

 var finalPassword = []
 console.log(finalPassword, "finalPassword");

 // Add event listener to generate button
// Series of prompts soliciting user info to use for password
generateBtn.addEventListener("click", function() {

  //  prompt requesting length of password
    var lengthStr = prompt("What length do you want your password between 8-128 characters?");
      console.log(lengthStr, "lengthStr");
       console.log(typeof lengthStr);
      // converts user input string to number
      lengthStr = parseInt(lengthStr);
      console.log(lengthStr, "lengthStr");
       console.log(typeof lengthStr);
  
   // confirm requesting lowercase letters
    // Verifies user enters value between 8 and 128
  if(lengthStr >=8 & lengthStr <= 128) {
      wantsLowercase = confirm("Confirm if you want lowercase characters.");
      console.log(wantsLowercase, "wantsLowercase");
      // add value to definite array
        if (wantsLowercase) {
          wantsLowercase = Math.floor(Math.random() * lowercase.length);
          definitePassword = definitePassword.concat(lowercase[wantsLowercase]);
          console.log(wantsLowercase, lowercase[wantsLowercase]);

          // add array to possible array
          possiblePassword = possiblePassword.concat(lowercase);
          console.log(possiblePassword, "possiblePassword");
      }
  // alert if password length not within range
  } else {
      alert("Please enter a valid number");
    return;
  };
    // confirm requesting uppercase letters
      wantsUppercase = confirm("Confirm if you want uppercase characters.");
      console.log(wantsUppercase, "wantsUppercase");
      // add value to definite array
        if (wantsUppercase) {
          wantsUppercase = Math.floor(Math.random() * uppercase.length);
          definitePassword = definitePassword.concat(uppercase[wantsUppercase]);
          console.log(wantsUppercase, uppercase[wantsUppercase]);

          // add array to possible array
          possiblePassword = possiblePassword.concat(uppercase);
          console.log(possiblePassword, "possiblePassword");
        }

    // confirm requesting numbers
      wantsNumber = confirm("Confirm if you want numbers.");
      console.log(wantsNumber, "wantsNumber");

        // add value to definite array
        if (wantsNumber) {
          wantsNumber = Math.floor(Math.random() * numbers.length);
          definitePassword = definitePassword.concat(numbers[wantsNumber]);
          console.log(wantsNumber, numbers[wantsNumber]);

          // add array to possible array
          possiblePassword = possiblePassword.concat(numbers);
          console.log(possiblePassword, "Possible password")
        }

    // confirm requesting special characters
      wantsSpecial = confirm("Confirm if you want special characters.");
      console.log(wantsSpecial, "wantsSpecial");

          // add value to definite array
          if (wantsSpecial) {
            wantsSpecial = Math.floor(Math.random() * specialCharacter.length);
            definitePassword = definitePassword.concat(specialCharacter[wantsSpecial]);
            console.log(wantsSpecial, specialCharacter[wantsSpecial]);

            // add array to possible array
            possiblePassword = possiblePassword.concat(specialCharacter);
            console.log(possiblePassword, "possible password");
          }

    // create alert if doesnt say yes once - needs to select at least 1 character type to use
    if (!wantsLowercase && !wantsUppercase  && !wantsNumber && !wantsSpecial) {
        alert("Please select at least one character type to use in the password."); };

    console.log(definitePassword, "definitePassword");
    // create varable to pull remaining length of password to meet user criteria
    var remainingLength = lengthStr - definitePassword.length;
    console.log(remainingLength, "remainingLength");
    
    // for loop to pull random characters into possible password
    for (i=0; i < remainingLength; i++) {
       let value = Math.floor(Math.random() * possiblePassword.length);
       possiblePassword = possiblePassword.concat(value)
    }
      console.log(possiblePassword, "possiblePassword");

    // reduce possible password length
    possiblePassword.length = remainingLength;
    console.log(possiblePassword.length, "possiblePassword length");

  // combine definite and possible password
    finalPassword = finalPassword.concat(possiblePassword,definitePassword);
    console.log(finalPassword, "finalPassword");
    final = finalPassword.toString();

  passwordText.value = final;
  });