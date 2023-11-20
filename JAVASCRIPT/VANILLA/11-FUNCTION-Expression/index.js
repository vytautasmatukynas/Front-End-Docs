// Basically use LAMBDA instead...

// A function expression in JavaScript is a way to define a function as 
// an expression rather than a declaration.

// Define a constant variable 'greeting' that holds an anonymous function
const greeting = function () {
    console.log("Hello");
}

// Function expression: Define a variable 'addNumbers' that holds an anonymous function
let addNumbers = function (a, b) {
    // The function returns the sum of the two parameters 'a' and 'b'
    return a + b;
};

// Using the function expression: Call the 'addNumbers' function with arguments '3' and '7'
let result = addNumbers(3, 7);

// Logging the result to the console
console.log("Result:", result);