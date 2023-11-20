// Arrow functions (lambda functions) in JavaScript are a concise way to define functions.

// Example 1: Define a constant variable 'greeting' that holds an arrow function
const greeting = () => console.log("Hello");

// Example 2: Arrow function expression to add two numbers
let addNumbers = (a, b) => a + b;

// Using the arrow function expression: Call the 'addNumbers' function with arguments '3' and '7'
let result = addNumbers(3, 7);

// Logging the result to the console
console.log("Result:", result);

// Example 3: Arrow function with multiple statements
let multiplyNumbers = (x, y) => {
    let product = x * y;
    return product;
};

// Using the arrow function: Call the 'multiplyNumbers' function with arguments '4' and '5'
let productResult = multiplyNumbers(4, 5);

// Logging the product result to the console
console.log("Product Result:", productResult);

// Example 4: Arrow function with no parameters
let getRandomNumber = () => Math.random();

// Using the arrow function: Call the 'getRandomNumber' function
let randomResult = getRandomNumber();

// Logging the random result to the console
console.log("Random Result:", randomResult);

//
let numbers = [1, 2, 3, 4, 5];

// Example 5: Using arrow function with map to square each element
let squaredNumbers = numbers.map(num => num ** 2);
console.log("Squared Numbers:", squaredNumbers);

// Example 6: Using arrow function with filter to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Example 7: Using arrow function with forEach to log each element
numbers.forEach(num => console.log("Current Number:", num));

// Example 8: Using arrow function with reduce to calculate the sum
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Example 9: Using arrow function with some to check if any element is greater than 3
let isGreaterThanThree = numbers.some(num => num > 3);
console.log("Any Number Greater Than Three?", isGreaterThanThree);

// Example 10: Using arrow function with every to check if all elements are less than 10
let isAllLessThanTen = numbers.every(num => num < 10);
console.log("All Numbers Less Than Ten?", isAllLessThanTen);

