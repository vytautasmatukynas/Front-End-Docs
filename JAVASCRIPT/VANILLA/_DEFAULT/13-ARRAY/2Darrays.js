// Creating a 2D array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements in a 2D array
console.log('Element at row 1, column 2:', matrix[0][1]); // Output: 2
console.log('Element at row 2, column 3:', matrix[1][2]); // Output: 6

// Modifying elements in a 2D array
matrix[1][1] = 10;
console.log('Modified Matrix:', matrix);

// Iterating over a 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at row ${i + 1}, column ${j + 1}:`, matrix[i][j]);
    }
}

// Adding a new row to the 2D array
let newRow = [11, 12, 13];
matrix.push(newRow);
console.log('Matrix after adding a new row:', matrix);
