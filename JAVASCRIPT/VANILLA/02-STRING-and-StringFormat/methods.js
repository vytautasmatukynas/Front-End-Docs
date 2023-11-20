// Sample string
let myString = "   Hello, World!   ";

// String length
console.log("Length of the string:", myString.length);

// String slice(start, end) - Extracts a portion of a string and returns it.
console.log("Slice from index 2 to 7:", myString.slice(2, 7));

// String substring(start, end) - Extracts the characters between two specified indices.
console.log("Substring from index 2 to 7:", myString.substring(2, 7));

// String substr(start, length) - Extracts a specified number of characters from a string, starting at a specified index.
console.log("Substr starting from index 2 with length 5:", myString.substr(2, 5));

// String replace(oldValue, newValue) - Replaces a specified value with another value in a string.
console.log("Replace 'Hello' with 'Hi':", myString.replace("Hello", "Hi"));

// String toUpperCase() - Converts all the characters in a string to uppercase.
console.log("Uppercase:", myString.toUpperCase());

// String toLowerCase() - Converts all the characters in a string to lowercase.
console.log("Lowercase:", myString.toLowerCase());

// String concat(string1, string2, ...) - Concatenates two or more strings.
console.log("Concatenation with ' - Concatenated!':", myString.concat(" - Concatenated!"));

// String trim() - Removes whitespace from both ends of a string.
console.log("Trimmed string:", myString.trim());

// String padStart(targetLength, padString) - Pads the start of a string with another string until it reaches the specified length.
console.log("Padded start with '*' to length 20:", myString.padStart(20, "*"));

// String padEnd(targetLength, padString) - Pads the end of a string with another string until it reaches the specified length.
console.log("Padded end with '#' to length 20:", myString.padEnd(20, "#"));

// String charAt(index) - Returns the character at a specified index in a string.
console.log("Character at index 4:", myString.charAt(4));

// String charCodeAt(index) - Returns the Unicode value of the character at a specified index in a string.
console.log("Unicode value of character at index 4:", myString.charCodeAt(4));

// String split(separator) - Splits a string into an array of substrings based on a specified separator.
console.log("Splitting by comma:", myString.split(","));

// Console log the original string for reference
console.log("Original string:", myString);

