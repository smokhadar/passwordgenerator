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
 console.log(definitePassword);

//  create empty array for possible characters to include in password
 var possiblePassword = [];
 console.log(possiblePassword);

 var finalPassword = []
 console.log(finalPassword);

 // Add event listener to generate button
// Series of prompts soliciting user info to use for password
generateBtn.addEventListener("click", function() {

  //  prompt requesting length of password
    var lengthStr = prompt("What length do you want your password between 8-128 characters?");
      console.log(lengthStr);
       console.log(typeof lengthStr);
      // converts user input string to number
      lengthStr = parseInt(lengthStr);
      console.log(lengthStr);
       console.log(typeof lengthStr);
  
   // confirm requesting lowercase letters
    // Verifies user enters value between 8 and 128
  if(lengthStr >=8 & lengthStr <= 128) {
      wantsLowercase = confirm("Confirm if you want lowercase characters.");
      console.log(wantsLowercase);
      // add value to definite array
        if (wantsLowercase) {
          wantsLowercase = Math.floor(Math.random() * lowercase.length);
          definitePassword = definitePassword.concat(lowercase[wantsLowercase]);
          console.log(wantsLowercase, lowercase[wantsLowercase]);
      }
  // alert if password length not within range
  } else {
      alert("Please enter a valid number");
    return;
  };
    // confirm requesting uppercase letters
      wantsUppercase = confirm("Confirm if you want uppercase characters.");
      console.log(wantsUppercase);
      // add value to definite array
        if (wantsUppercase) {
          wantsUppercase = Math.floor(Math.random() * uppercase.length);
          definitePassword = definitePassword.concat(uppercase[wantsUppercase]);
          console.log(wantsUppercase, uppercase[wantsUppercase]);
        }

    // confirm reqwuesting numbers
      wantsNumber = confirm("Confirm if you want numbers.");
      console.log(wantsNumber);

        // add value to definite array
        if (wantsNumber) {
          wantsNumber = Math.floor(Math.random() * numbers.length);
          definitePassword = definitePassword.concat(numbers[wantsNumber]);
          console.log(wantsNumber, numbers[wantsNumber]);
        }

    // confirm requesting special characters
      wantsSpecial = confirm("Confirm if you want special characters.");
      console.log(wantsSpecial);

          // add value to definite array
          if (wantsSpecial) {
            wantsSpecial = Math.floor(Math.random() * specialCharacter.length);
            definitePassword = definitePassword.concat(specialCharacter[wantsSpecial]);
            console.log(wantsSpecial, specialCharacter[wantsSpecial]);
          }

    // create alert if doesnt say yes once - needs to select at least 1 character type to use
    if (!wantsLowercase && !wantsUppercase  && !wantsNumber && !wantsSpecial) {
        alert("Please select at least one character type to use in the password."); };

    console.log(definitePassword);
    var remainingLength = lengthStr - definitePassword.length;
    console.log(remainingLength);
    
    // for loop to pull random characters into possible password
    for (i=0; i < remainingLength; i++) {
      if (wantsLowercase) {
          Math.floor(Math.random() * lowercase.length);
          possiblePassword.push(i);
      } if (wantsUppercase) {
          Math.floor(Math.random(``) * uppercase.length);
          possiblePassword.push(i);
      } if (wantsNumber) {
          Math.floor(Math.random() * numbers.length);
          possiblePassword.push(i);
      } if (wantsSpecial) {
          Math.floor(Math.random() * specialCharacter.length);
          possiblePassword.push(i);
      }
    }
      console.log(possiblePassword);

    // reduce possible password length
    possiblePassword.length = remainingLength;
    console.log(possiblePassword.length);

  // combine definite and possible password
    finalPassword = finalPassword.concat(possiblePassword,definitePassword);
    console.log(finalPassword);
    final = finalPassword.toString();

  passwordText.value = final;
  });