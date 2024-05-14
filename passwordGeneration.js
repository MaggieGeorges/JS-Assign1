/*Password Generation:
 
This function helps users create secure passwords based on their names. It takes the user's first and last names
and combines the first 3 characters of the first name with the last 3 characters of the last name, then adds "@2024" 
to the end. For example, if the user's name is "John Doe", the generated password would be "JohDoe@2024". */

let firstName = "Margaret";
let lastName = "Wangari";

function myPassword (firstName, lastName){
    return firstName.slice(0,3) + lastName.slice(-3) + "@2024"
}

let password = myPassword(firstName, lastName)
console.log(password)

