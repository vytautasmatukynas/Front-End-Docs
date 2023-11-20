// Basically use 'let' always... and not 'var'...

// Declare a variable 'num' using the 'var' keyword
// var is function-scoped function scope refers to the visibility and 
// accessibility of variables within a specific function. 
// Variables declared with var are function-scoped, meaning they are 
// only visible and accessible within the function where they are defined.
var num;

// Declare a variable 'age' using the 'let' keyword
// block scope refers to the visibility and accessibility of variables within a specific block of code, 
// such as within curly braces {}. A block can be a function, a loop, or any code enclosed in curly braces. 
// Block scope ensures that variables declared within a block are only accessible within that block and its 
// nested blocks.
let age;

// Declare a constant variable 'name' and assign the value "Jonas" to it
const NAME = "Jonas"; // String

// Declare a variable 'hasChickens' without using var, let, or const (global variable)
hasChickens = true; // Bool

// Assign the value 20 to the variable 'age'
age = 20; // Number

// Update the HTML content of an element with the id "p1"
document.getElementById("p1").innerHTML = age + " years old " + NAME + " has 15 chickens - " + hasChickens;


// Example to illustrate the scoping difference:
function example() {
    // Check the global variable 'hasChickens'
    if (hasChickens) {
        // Declare a variable 'age' with the value 25 (block-scoped)

        let age = 25; // block-scoped

    } else {
        // If 'hasChickens' is false, declare a variable 'age' with the value 26 (block-scoped)
        // change type from "let" to "var"
        
        var age = 26; // function-scoped
    }
  
    // Update the HTML content of an element with the id "p2"
    document.getElementById("p2").innerHTML = age + " years old " + NAME + " has 5 chickens - " + hasChickens;
}

// Call the example function
example();
