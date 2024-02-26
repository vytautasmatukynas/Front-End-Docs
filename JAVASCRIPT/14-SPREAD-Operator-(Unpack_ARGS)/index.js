// The spread syntax (...) in JavaScript is used to unpack elements from 
// arrays or properties from objects. 
// Same as python *args by using "*" to unpack collection or string.

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 7, 9];

// Log the array
console.log('Original Array:', numbers);

// Log the array elements using the spread operator
console.log('Spread Array Elements:', ...numbers);

// Find the maximum value in the array using the spread operator and Math.max
let maxValue = Math.max(...numbers);
console.log('Max Value in Array:', maxValue);

// String variable
let userName = "Jonas Jonaitis";

// Log the string
console.log('Original String:', userName);

// Log the string characters using the spread operator
console.log('Spread String Characters:', ...userName);

// Additional examples with the spread operator

// Concatenating arrays using the spread operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = [...array1, ...array2];
console.log('Concatenated Array:', concatenatedArray);

// Copying an array using the spread operator
let originalArray = [10, 20, 30];
let copiedArray = [...originalArray];
console.log('Copied Array:', copiedArray);

// Combining objects using the spread operator
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObject = { ...obj1, ...obj2 };
console.log('Combined Object:', combinedObject);
