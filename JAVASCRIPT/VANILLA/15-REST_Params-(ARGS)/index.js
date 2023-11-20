//Rest parameters in JavaScript allow a function to accept an indefinite 
// number of arguments as an array. 
// In python is when you have func variable (*numbers) and 
// in java is argvar variable (Integer...)

// Function that takes a variable number of arguments and calculates their sum
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example usage
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
console.log(sum()); // Output: 0 (no arguments)

// Function that takes a fixed parameter and a variable number of arguments
function greet(greeting, ...names) {
    console.log(greeting + " " + names.join(", "));
}

// Example usage
greet("Hello", "Alice", "Bob", "Charlie");
// Output: Hello Alice, Bob, Charlie

