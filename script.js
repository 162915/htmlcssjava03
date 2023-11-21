var characterLength = 10;
var choiceArr = []

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','/','?','<','>','\',',];
var lowerCasearr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasearr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
function generatePassword(){ 
  var allChars = new Array();
  var newPassword = "";
  var passwdLength = prompt("How many characters do you want your password to have?");
  if(passwdLength > 128){
    return "Password length exceeds the limit of 128!";
  }
  if(passwdLength < 8){
    return "Password has to be at least 8 characters!"
  }

  var upperCase = confirm("Do you want to include upper case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var number = confirm("Do you want to include a number?");
  var specialChar = confirm("Do you want to include special character?");

  if(upperCase){
    newPassword += upperCasearr[Math.floor(Math.random() * upperCasearr.length)];
    allChars = allChars.concat(upperCasearr);
  }
  if(lowerCase){
    newPassword += lowerCasearr[Math.floor(Math.random() * lowerCasearr.length)];
    allChars = allChars.concat(lowerCasearr);
  }
  if(number){
    newPassword += numberArr[Math.floor(Math.random() * numberArr.length)];
    allChars = allChars.concat(numberArr);
  }
  if(specialChar){
    newPassword += specialCharArr[Math.floor(Math.random() * specialCharArr.length)];
    allChars = allChars.concat(specialCharArr);
  }

  // while the new password length is less than the desired length (given by the user)
  while(newPassword.length < passwdLength){
    // then we run this code
    newPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }


  console.log(newPassword.length, "New Password length");  
  console.log(allChars, "allChars", allChars.length, "allchars.length");  
  
    return newPassword;
    // where is the new password stored (what variable?)
      // newPassword
    // where is the desired length of the password stored (what variable?)
      // characterLength
    // how do we compare them
  // add 1 new character to the new password
    


    
  

}
