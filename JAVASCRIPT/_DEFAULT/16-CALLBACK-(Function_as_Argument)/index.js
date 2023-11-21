// callback is function passed as argument to another function.

let total = sum(2, 3);
display(total);

function sum(x, y) {
    let result = x + y;
    return result;
}

function display(output) {
    console.log(output);
}

// OR using callback

// Callbacks in JavaScript ensure asynchronous and non-blocking 
// behavior. In JavaScript, callbacks are commonly used in asynchronous 
// operations such as handling events, making API requests, or reading 
// files.

sumWithCallback(2, 3, displayWithCallback);

function sumWithCallback(x, y, callBack) {
    let result = x + y;

    callBack(result);
}

function displayWithCallback(output) {
    console.log(output);
}