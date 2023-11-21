// Creating a new Map
let myMap = new Map();

// Setting values for keys in the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('isAdmin', true);

// Getting values for keys in the Map
console.log("Name:", myMap.get('name')); // Output: Name: John
console.log("Is Admin?", myMap.get('isAdmin')); // Output: Is Admin? true

// Checking if a key exists in the Map
console.log("Has 'age'?", myMap.has('age')); // Output: Has 'age'? true
console.log("Has 'email'?", myMap.has('email')); // Output: Has 'email'? false

// Removing a Map element specified by the key
myMap.delete('isAdmin');

// Iterating over key/value pairs in the Map
console.log("Entries:");
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Output:
// Entries:
// name: John
// age: 30

// Getting an iterator with [key, value] pairs in the Map
let iterator = myMap.entries();

// Logging the iterator values
console.log("Iterator Values:");
for (let entry of iterator) {
    console.log(entry);
}

// Output:
// Iterator Values:
// [ 'name', 'John' ]
// [ 'age', 30 ]

// Getting the number of elements in the Map
console.log("Size:", myMap.size); // Output: Size: 2
