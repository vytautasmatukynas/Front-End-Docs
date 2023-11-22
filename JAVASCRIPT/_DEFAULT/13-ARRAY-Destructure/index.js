// Example array
let fruits = ['apple', 'banana', 'orange'];

// Array destructuring
let [firstFruit, secondFruit, thirdFruit] = fruits;

// Logging the results
console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(thirdFruit);  // Output: 'orange'


// Example array
let numbers = [1, 2, 3, 4, 5];

// Array destructuring with rest
let [firstNumber, secondNumber, ...restNumbers] = numbers;

// Logging the results
console.log(firstNumber);   // Output: 1
console.log(secondNumber);  // Output: 2
console.log(restNumbers);   // Output: [3, 4, 5]
