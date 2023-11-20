// The forEach method in JavaScript is a higher-order function used to iterate 
// over elements in an array. It allows you to execute a provided function once 
// for each element in the array.

// Executes a provided callback function once for each element
// callback: The function to execute for each element in the array. 

// It receives three arguments:
//     element: The current element being processed in the array.
//     index: The index of the current element being processed.
//     array: The array that forEach is being applied to.

let students = ["patrick", "jonas", "petras"];

// Function to capitalize the first letter of a string and update the array
function capitalize(element, index, array) {
    // Capitalize the first letter of the current name
    array[index] = element[0].toUpperCase() + element.substring(1);
}

// Function to print each element in the array
function print(element) {
    // Log the current element (name) to the console
    console.log(element);
}

// Capitalize and print each student name using forEach
students.forEach(capitalize);
students.forEach(print);

// Example 1: Calculate and print the length of each name
students.forEach(function printLength(element) {
    console.log("Length of", element, "is", element.length);
});
  
// Example 2: Count and print the number of names starting with 'p'
let countPNames = 0;

students.forEach(function countP(element) {
if (element.startsWith('p')) {
    countPNames++;
}
});

console.log("Number of names starting with 'p':", countPNames);
  
// Example 3: Append ' - Student' to each name and print the modified array
students.forEach(function appendStudent(element, index, array) {
    array[index] = element + " - Student";
});

console.log("Modified Array:", students);