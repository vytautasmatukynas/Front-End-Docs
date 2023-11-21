// Creating an array with values
let fruits = ['Apple', 'Banana', 'Orange'];

// Creating an empty array
let numbers = [];

// Creating an array with a predefined size
let emptyArrayWithSize = new Array(5);

// Accessing array elements
console.log(fruits[0]); // Accessing the first element (index 0)
console.log(fruits[1]); // Accessing the second element (index 1)
console.log(fruits.length); // Getting the length of the array

// Modifying array elements
fruits[1] = 'Mango'; // Modifying the second element (index 1)
fruits.push('Grapes'); // Adding an element to the end of the array

// Iterating over arrays
for (let i = 0; i < fruits.length; i++) {
    console.log((fruits.indexOf(fruits[i]) + 1) + ". " + fruits[i])
}
// Iterating over arrays
// for...of: Used for iterating over the values of an iterable (like arrays).
// for...in: Used for iterating over the keys (indices) of an object. It's not 
// recommended for arrays due to potential issues with inherited properties 
// and non-enumerable properties.
for (let fruit of fruits) {
    console.log((fruits.indexOf(fruit) + 1) + ". " + fruit);
}

fruits = fruits
for (let fruit in fruits) {
    console.log((fruits.indexOf(fruit) + 1) + ". " + fruit);
}

// Iterating over arrays reverse
for (let i = fruits.length - 1; i >= 0 ; i--) {
    console.log((fruits.indexOf(fruits[i]) + 1) + ". " + fruits[i])
}

// Using forEach method
fruits.forEach(function (fruit) {
    console.log((fruits.indexOf(fruit) + 1) + ". " + fruit)
});

// Sort arrays
fruits = fruits.sort();
for (let fruit of fruits) {
    console.log((fruits.indexOf(fruit) + 1) + ". " + fruit);
}

// Reverse sort arrays
fruits = fruits.sort().reverse();
for (let fruit of fruits) {
    console.log((fruits.indexOf(fruit) + 1) + ". " + fruit);
}

// Removing elements
let removedElement = fruits.pop(); // Removes the last element and returns it
let removedFirstElement = fruits.shift(); // Removes the first element and returns it

// Adding elements
fruits.push('Pineapple'); // Adds an element to the end of the array
fruits.unshift('Cherry'); // Adds an element to the beginning of the array

// Searching and Filtering
let index = fruits.indexOf('Banana'); // Returns the index of the element
let filteredFruits = fruits.filter(function (fruit) {
    return fruit.length > 5;
});

// Slicing and Splicing
let slicedFruits = fruits.slice(1, 3); // Creates a new array by slicing a portion of the original array
let splicedFruits = fruits.splice(1, 2, 'Kiwi', 'Peach'); // Removes elements from the array and optionally adds new elements

// Concatenating Arrays
let moreFruits = ['Grapes', 'Watermelon'];
let combinedArray = fruits.concat(moreFruits); // Concatenates two arrays

// Additional Array Methods
let reversedFruits = fruits.reverse(); // Reverses the order of elements in the array
let joinedFruits = fruits.join(', '); // Joins array elements into a string with a specified separator

// Array iteration methods

// every() method: Check if all fruits have a length greater than 4
let allFruitsAreLong = fruits.every(function (fruit) {
    return fruit.length > 4;
});

// some() method: Check if at least one fruit has a length greater than 6
let someFruitsAreLong = fruits.some(function (fruit) {
    return fruit.length > 6;
});

// map() method: Create a new array with the lengths of each fruit
let fruitLengths = fruits.map(function (fruit) {
    return fruit.length;
});

// reduce() method: Calculate the total length of all fruits
let totalLength = fruits.reduce(function (accumulator, fruit) {
    // The accumulator is the running total, and fruit is the current element
    return accumulator + fruit.length;
}, 0);

// Output
console.log('Fruits:', fruits);
console.log('Combined Array:', combinedArray);
console.log('Reversed Fruits:', reversedFruits);
console.log('Joined Fruits:', joinedFruits);
console.log('Are all fruits long?', allFruitsAreLong);
console.log('Are some fruits long?', someFruitsAreLong);
console.log('Lengths of Fruits:', fruitLengths);
console.log('Total Length of Fruits:', totalLength);
