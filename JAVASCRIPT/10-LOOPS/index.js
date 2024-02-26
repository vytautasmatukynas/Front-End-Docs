
// Use a for loop to iterate from 1 to 5 (inclusive)
for (let i = 1; i <= 5; i++) {
    // Log the current value of 'i'
    console.log("Current value of i in for loop:", i);
}


// Use a for loop to iterate from 1 to 5 (inclusive)
for (let i = 1; i <= 5; i++) {
    // Use a break statement to exit the loop when i is 3
    if (i === 3) {
        console.log("Encountered 'break' at i =", i);
        break;
    }

    // Use a continue statement to skip the iteration when i is 2
    if (i === 2) {
        console.log("Skipped 'continue' at i =", i);
        continue;
    }

    // Log the current value of 'i'
    console.log("Current value of i:", i);
}


// Define the size of the multiplication table (e.g., 5x5)
const tableSize = 5;

// Use a nested for loop to generate the multiplication table
for (let i = 1; i <= tableSize; i++) {
    // Outer loop: Iterate through the rows
    for (let j = 1; j <= tableSize; j++) {
        // Inner loop: Iterate through the columns

        // Calculate the product of i and j
        let product = i * j;

        // Log the multiplication expression and result
        console.log(`${i} * ${j} = ${product}`);
    }

    // Add a separator line after each row for better readability
    console.log("-".repeat(15));
}


// Declare a variable 'counter' and initialize it to 1
let counter = 1;

// Execute the loop while 'counter' is less than or equal to 5
while (counter <= 5) {
    // Log the current value of 'counter'
    console.log("Current value of counter in while loop:", counter);

    // Increment 'counter' by 1 in each iteration
    counter++;
}


// Declare a variable 'num' and initialize it to 1
let num = 1;

// Execute the loop at least once and continue while 'num' is less than or equal to 5
do {
    // Log the current value of 'num'
    console.log("Current value of num in do-while loop:", num);

    // Increment 'num' by 1 in each iteration
    num++;
} while (num <= 5);


