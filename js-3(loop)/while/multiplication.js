/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/

let number = 5;
let i = 1; // Start from 1

console.log("Multiplication Table of 5:");

while (i <= 10) {
    let result = number * i;
    console.log(number + " x " + i + " = " + result);
    i++; // Move to the next number
}