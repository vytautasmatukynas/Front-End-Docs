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


// Define an array of objects representing animals with their names and sounds
const animals = [
    {name: "cat", sound: "meow"},
    {name: "dog", sound: "woof"}
]

// Log the entire array of animals to the console
console.log(animals);

// Destructure the 'animals' array to extract the first and second objects into variables 'cat' and 'dog'
const [cat, dog] = animals;

// Destructure the 'cat' object to extract its 'name' and 'sound' properties
const {name, sound} = cat;

// Destructure the 'dog' object to extract its 'name' and 'sound' properties with aliasing
const {name: dogName, sound: dogSound} = dog;

// // If variable in object is undefined you can set default value
// const {name = "Steve", sound = "Brrrr"} = dog;

// Log the 'cat' object to the console
console.log(cat);

// Log the 'name' property of the 'cat' object to the console
console.log(name);

// Log the 'dogSound' property, which is the 'sound' property of the 'dog' object, to the console
console.log(dogSound);


// Define an array of objects representing animals with additional nested 'food' properties
const animals2 = [
    {name1: "cat", sound1: "meow", food: {eat: "Meat", drink: "Water"}},
    {name1: "dog", sound1: "woof", food: {eat: "Meat", drink: "Water"}},
]

// Destructure the 'animals2' array to extract the first and second objects into variables 'cat1' and 'dog1'
const [cat1, dog1] = animals2;

// Destructure the 'cat1' object to extract its 'name1', 'sound1', and nested 'food' properties
const {name1, sound1, food: {eat, drink}} = cat1;

// Log the 'eat' property from the nested 'food' object to the console
console.log(eat);

// Log the 'drink' property from the nested 'food' object to the console
console.log(drink);