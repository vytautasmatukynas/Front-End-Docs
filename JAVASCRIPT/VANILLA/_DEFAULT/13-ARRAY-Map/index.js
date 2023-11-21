// In JavaScript, the map method is a higher-order function that is 
// available for arrays. It is used to create a new array by applying 
// a provided function to each element of the existing array. The map 
// method does not modify the original array; instead, it returns 
// a new array containing the results of applying the provided function 
// to each element.

// Executes a provided callback function once for each element
// callback: The function that will be called once for each element in 
// the array.

// It receives three arguments:
//     element: The current element being processed in the array.
//     index: The index of the current element being processed.
//     array: The array map was called upon.
let students = ["patrick", "jonas", "petras"];

// Function to convert a string to uppercase
function square(element) {
    return element.toUpperCase();
}

// Using map to create a new array with uppercase student names
let upperStudents = students.map(square);

// Function to print each element in the array
function print(element) {
    console.log(element);
}

// Using forEach to print each element of the new array
upperStudents.forEach(print);