// Creating a new Set
let mySet = new Set();

// Adding new elements to the Set
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');

// Checking if a value exists in the Set
console.log("Has 'apple'?", mySet.has('apple')); // Output: Has 'apple'? true
console.log("Has 'grape'?", mySet.has('grape')); // Output: Has 'grape'? false

// Removing an element from the Set
mySet.delete('banana');

// Iterating over elements in the Set
console.log("Elements:");
mySet.forEach(value => {
    console.log(value);
});

// Output:
// Elements:
// apple
// orange

// Getting an iterator with all the values in the Set
let iterator = mySet.values();

// Logging the iterator values
console.log("Iterator Values:");
for (let value of iterator) {
    console.log(value);
}

// Output:
// Iterator Values:
// apple
// orange

// Getting the number of elements in the Set
console.log("Size:", mySet.size); // Output: Size: 2
