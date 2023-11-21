// Sample string
let myString = "Hello, World!";

// String indexOf(searchValue, fromIndex) - Returns the index of the first occurrence of a specified value in a string, starting from a specified index.
console.log("Index of 'o':", myString.indexOf("o"));

// String lastIndexOf(searchValue, fromIndex) - Returns the index of the last occurrence of a specified value in a string, starting from a specified index.
console.log("Last Index of 'o':", myString.lastIndexOf("o"));

// String search(regexp) - Searches for a specified pattern in a string and returns the index of the first match.
console.log("Search for 'World':", myString.search("World"));

// String match(regexp) - Searches a string for a specified pattern and returns the first match as an array.
console.log("Match 'o' using RegExp:", myString.match(/o/));

// String matchAll(regexp) - Returns an iterator of all matched substrings of a string against a regular expression.
console.log("Match all 'o' using RegExp:", [...myString.matchAll(/o/g)]);

// String includes(searchValue, fromIndex) - Checks if a string contains a specified value and returns true or false.
console.log("Includes 'World':", myString.includes("World"));

// String startsWith(searchString, position) - Checks if a string starts with a specified value and returns true or false.
console.log("Starts with 'Hello':", myString.startsWith("Hello"));

// String endsWith(searchString, length) - Checks if a string ends with a specified value and returns true or false.
console.log("Ends with 'World!':", myString.endsWith("World!"));

// Console log the original string for reference
console.log("Original string:", myString);
