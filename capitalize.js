/* Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string. */

let text = "Her name is Jane Kuria from Nairobi County, but she prefers being called Janey."
let Words = text.split(" ");

console.log(Words)

for (let i = 0; i < Words.length; i++){
    Words[i] = Words[i] .charAt(0).toUpperCase() + Words[i] .slice(1);
}

let mytext = Words.join(" ");


console.log(mytext);

