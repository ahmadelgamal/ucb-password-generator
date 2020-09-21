// declares variables to hold possible characters to use for password generation
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~";

// declares variables to hold collected user input
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumbers;
var passwordSpecial;

// declares variable to hold all possible characters for password
var passwordPool;

var collectPasswordLength = function () {
  passwordLength = prompt(
    "Please enter the number of characters for the password. \r\n (Between 8 and 128)"
  );
  // if user chooses number within range, then alert with choice
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Chosen number of characters = " + passwordLength);
    // else prompt again for correct entry
  } else {
    alert("Your entry is invalid. Please try again.");
    collectPasswordLength();
  }
};

var collectPasswordLowerCase = function () {
  passwordLowerCase = confirm("Should the password include lowercase letters?");
  alert("Password includes lowercase letters: " + passwordLowerCase);
};

var collectPasswordUpperCase = function () {
  passwordUpperCase = confirm("Should the password include uppercase letters?");
  alert("Password includes uppercase letters: " + passwordUpperCase);
};

var collectPasswordNumbers = function () {
  passwordNumbers = confirm("Should the password include numbers?");
  alert("Password includes numbers: " + passwordNumbers);
};

var collectPasswordSpecial = function () {
  passwordSpecial = confirm(
    "Should the password include special characters? \r\n Special characters are: !\"#$%&'()*+,-./:;<=>?@[]^_{|}~"
  );
  alert("Password includes special characters: " + passwordSpecial);
};

// if no characters are selected, then user is alerted to start again
var checkPasswordCriteria = function () {
  if (
    !passwordLowerCase &&
    !passwordUpperCase &&
    !passwordNumbers &&
    !passwordSpecial
  ) {
    alert(
      "You have not selected any characters to include in the password. \r\n Please try again."
    );
    collectPasswordPool();
  }
};

var collectPasswordPool = function () {
  collectPasswordLowerCase();
  collectPasswordUpperCase();
  collectPasswordNumbers();
  collectPasswordSpecial();
  checkPasswordCriteria();
};

// concatenate selected characters to include in password
var concatPasswordPool = function () {
  passwordPool = "";
  if (passwordLowerCase) {
    passwordPool = lowerCase;
  }
  if (passwordUpperCase) {
    passwordPool = passwordPool.concat(upperCase);
  }
  if (passwordNumbers) {
    passwordPool = passwordPool.concat(numbers);
  }
  if (passwordSpecial) {
    passwordPool = passwordPool.concat(specialCharacters);
  }
};

var makePassword = function () {
  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    var characterPosition = Math.floor(Math.random() * passwordPool.length);
    var character = passwordPool.charAt(characterPosition);
    password = password.concat(character);
  }
  return password;
};

// generate password based on the criteria collected from the user
var generatePassword = function () {
  collectPasswordLength();
  collectPasswordPool();
  concatPasswordPool();
  var password = makePassword();
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordEl = document.querySelector("#password");

  passwordEl.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
