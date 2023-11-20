// The inner function has access to the variables and parameters 
// of the outer function, creating a closure.

// Outer function
function outerFunction(x) {
    // Inner function
    function innerFunction(y) {
        return y * y;
    }

    // Using the inner function within the outer function
    let result = innerFunction(x);

    // Returning the result
    return result;
}

// Calling the outer function with argument '4'
let outerResult = outerFunction(4);

// Logging the result to the console
console.log("Result:", outerResult);
