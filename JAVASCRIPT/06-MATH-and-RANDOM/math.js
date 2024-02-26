// Example 1: Generating a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random();
console.log("Random Number: " + randomNum);

// Example 2: Generating a random integer between a specified range (1 to 10)
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random Integer: " + randomInt);

// Example 3: Rounding numbers
let roundNum = Math.round(4.7);
console.log("Rounded Number: " + roundNum);

// Example 4: Ceiling and floor functions
let ceilNum = Math.ceil(4.3);
let floorNum = Math.floor(4.7);
console.log("Ceiled Number: " + ceilNum);
console.log("Floored Number: " + floorNum);

// Example 5: Absolute value
let absoluteValue = Math.abs(-7);
console.log("Absolute Value: " + absoluteValue);

// Example 6: Exponents (Power)
let powerResult = Math.pow(2, 3); // 2 raised to the power of 3
console.log("2^3 (Power): " + powerResult);

// Example 7: Square root
let sqrtResult = Math.sqrt(25);
console.log("Square Root: " + sqrtResult);

// Example 8: Trigonometric functions
let sinValue = Math.sin(Math.PI / 2); // Sine of 90 degrees (in radians)
let cosValue = Math.cos(Math.PI); // Cosine of 180 degrees (in radians)
let tanValue = Math.tan(Math.PI / 4); // Tangent of 45 degrees (in radians)
console.log("Sine Value: " + sinValue);
console.log("Cosine Value: " + cosValue);
console.log("Tangent Value: " + tanValue);

// Example 9: Constants
console.log("Value of PI: " + Math.PI);
console.log("Euler's Number (e): " + Math.E);
