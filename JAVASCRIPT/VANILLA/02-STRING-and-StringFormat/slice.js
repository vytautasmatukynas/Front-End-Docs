// slice(startIndex[, endIndex]) Method: Returns a portion of a string
let str3 = "JavaScript is awesome";

// Extract a portion from the beginning
let slicedBeginning = str3.slice(0, 10);
console.log("Sliced from the beginning:", slicedBeginning); // Output: JavaScript

// Extract a portion from the end using negative indices
let slicedEnd = str3.slice(-7);
console.log("Sliced from the end:", slicedEnd); // Output: awesome

// Extract a portion from the middle
let slicedMiddle = str3.slice(11, 15);
console.log("Sliced from the middle:", slicedMiddle); // Output: is a

// Use negative indices for a reversed portion
let slicedReversed = str3.slice(-15, -11);
console.log("Sliced with negative indices (reversed):", slicedReversed); // Output: crip

// Omit the second argument to slice until the end of the string
let slicedToEnd = str3.slice(11);
console.log("Sliced until the end:", slicedToEnd); // Output: is awesome

// Slice with a step (not directly supported, but you can achieve it with multiple slices)
let strWithStep = "abcdefgh";
let slicedWithStep = strWithStep.slice(0, 8, 2) + strWithStep.slice(1, 8, 2);
console.log("Sliced with step:", slicedWithStep); // Output: aceg

// Slicing with out-of-bounds indices returns an empty string
let outOfBounds = str3.slice(50, 60);
console.log("Out-of-bounds slice:", outOfBounds); // Output: ""