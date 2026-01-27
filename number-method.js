let num = "10";
let numbers = Number(num);
console.log(numbers);

// Number() function in JavaScript is a global function used to convert its argument to a number primitive value. If the value cannot be converted into a valid number, it returns NaN (Not a Number)

let x = "10.66";
let xa = parseInt(x);
console.log(xa);

// parseInt() function in JavaScript parses a string argument and returns the first integer found. It is a global function, also available as Number.parseInt()


let y = "15.17";
let ya = parseFloat(y);
console.log(ya);


// parseFloat() function in JavaScript parses a string argument and returns the first floating-point number found within it. This global function is commonly used to convert user inputs, which are often strings, into numerical values for calculations


let num2 = 4.5758;
console.log(num2.toFixed(2));
// keeping a specified number of digits after the decimal point