// Sample number
let myNumber = 123.456;

// Number toString() - Returns a number as a string.
console.log("Number as a string:", myNumber.toString());

// Number toExponential(fractionDigits) - Returns a number written in exponential notation with a specified number of decimals.
console.log("Number in exponential notation:", myNumber.toExponential(2));

// Number toFixed(fractionDigits) - Returns a number written with a specified number of decimals.
console.log("Number with two decimals:", myNumber.toFixed(2));

// Number toPrecision(precision) - Returns a number written with a specified length.
console.log("Number with precision 5:", myNumber.toPrecision(5));

// Number valueOf() - Returns a number as a primitive value (number).
console.log("Number as a primitive value:", myNumber.valueOf());

// Console log the original number for reference
console.log("Original number:", myNumber);
