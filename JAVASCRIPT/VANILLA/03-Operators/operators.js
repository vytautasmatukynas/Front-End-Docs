// Declare variables for demonstration
let a = 5;
let b = 3;

// Addition and assignment using +=
let sum = a + b; // sum = 8

// Subtraction and assignment using -=
let difference = a - b; // difference = 2

// Multiplication and assignment using *=
let product = a * b; // product = 15

// Division and assignment using /=
let quotient = a / b; // quotient = 1.666...

// Modulus (remainder after division)
let remainder = a % b; // remainder = 2

// Increment
a++; // Increment 'a' by 1 (a = 6)

// Decrement
b--; // Decrement 'b' by 1 (b = 2)

// Exponentiation and assignment using **=
let exponentiation = a ** b; // exponentiation = 5^3 = 125

// Shorthand addition and assignment using +=
a += 3; // Equivalent to a = a + 3

// Shorthand subtraction and assignment using -=
b -= 1; // Equivalent to b = b - 1

// Shorthand multiplication and assignment using *=
a *= 2; // Equivalent to a = a * 2

// Shorthand division and assignment using /=
b /= 2; // Equivalent to b = b / 2

// Shorthand modulus and assignment using %=
a %= 4; // Equivalent to a = a % 4

// Display the results in the console
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
console.log("Incremented 'a': " + a);
console.log("Decremented 'b': " + b);
console.log("Exponentiation: " + exponentiation);
console.log("Updated 'a' with shorthand addition: " + a);
console.log("Updated 'b' with shorthand subtraction: " + b);


// x &&= y; is equivalent to x = x && y;. It checks if x is truthy, 
// and if so, assigns the value of y to x. If x is falsy, it keeps its 
// original value.
let x = 2;
let y = 3;

// This is equivalent to: x = x && y;
x &&= y;

console.log(x); // Output: 3

// a ||= b; is equivalent to a = a || b;. It checks if a is falsy, and 
// if so, assigns the value of b to a. If a is truthy, it keeps its original
// value.
let e = 0;
let r = 5;

// This is equivalent to: a = a || b;
e ||= r;

console.log(e); // Output: 5




