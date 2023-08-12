 const passwordBox = document.getElementById("password");
 const length = 12;

//  add the different characters allowed in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol ="@#$^&*()_+~|{}[]<>/-=";

// declare a combination of random characters
const allChars = upperCase + lowerCase + number + symbol;

// function to generate the random password
function createPassword(){
    let password ="";
    // a random uppercase, lowercase letter , number or symbol will be added to the password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // if the password is less than the required number(12) add random generated characters
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // if the password length is 12, you can display the password
    passwordBox.value = password;
}

// introduce function to copy password
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
