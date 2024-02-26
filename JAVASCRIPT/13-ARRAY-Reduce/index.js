// In JavaScript, the reduce method is a higher-order function that is 
// available for arrays. It is used to reduce the array to a single value 
// by applying a provided function to each element of the array.

// Executes a provided callback function once for each element
// callback: The function that will be called once for each element in 
// the array. It takes four arguments:
//     accumulator: The accumulated result of the previous callback 
//                  invocation or the initial value (if provided).
//     currentValue: The current element being processed in the array.
//     index: The index of the current element being processed.
//     array: The array reduce was called upon.

let prices = [1, 25, 85, 95];

// Function to calculate the sum of prices
function sumPrices(accumulator, currentValue) {
    return accumulator + currentValue;
}

// Using reduce to calculate the sum of all prices
let totalPrice = prices.reduce(sumPrices, 0);

// Log the result
console.log("Total Price:", totalPrice);