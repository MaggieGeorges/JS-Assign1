/* Password Validation:
 
Imagine a program where users create accounts. You want to make sure their passwords are strong and not easily guessed. This function checks if a password follows these guidelines:
 
It cannot be blank (empty).
It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
Optionally, you can add a list of common words that users shouldn't use as passwords (like "password" or "123456"). */


let password = "Abel@987!";
let commonWords = ["password", "123456", "987654321", ""];

function validatePassword(password, commonWords) {
    if (password.trim() === '') {
        console.log("Password cannot be blank.");
        return false;
    }

    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            console.log("Password cannot contain repeated characters in a row.");
            return false;
        }
    }

    for (let word of commonWords) {
        if (password.toLowerCase().includes(word.toLowerCase())) {
            console.log("Password cannot contain common words.");
            return false;
        }
    }

    console.log("Password is valid.");
    return true;
}

let isValid = validatePassword(password, commonWords);
console.log(isValid);