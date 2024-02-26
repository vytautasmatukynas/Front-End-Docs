// In JavaScript, the filter method is a higher-order function that is 
// available for arrays. It is used to create a new array containing 
// elements that satisfy a provided condition. The filter method does 
// not modify the original array; instead, it returns a new array 
// containing the elements that meet the specified condition.

// Executes a provided callback function once for each element
// callback: The function that will be called once for each element in 
// the array. It should return true if the element should be included 
// in the new array, and false otherwise.

// It receives three arguments:
//     element: The current element being processed in the array.
//     index: The index of the current element being processed.
//     array: The array filter was called upon.

let students = ["patrick", "jonas", "petras"];

// Function to check if a string starts with 'p'
function startsWithP(element) {
    return element.toLowerCase().startsWith('p');
}

// Using filter to create a new array with names starting with 'p'
let filteredStudents = students.filter(startsWithP);

// Function to print each element in the array
function print(element) {
    console.log(element);
}

// Using forEach to print each element of the new array
filteredStudents.forEach(print);
