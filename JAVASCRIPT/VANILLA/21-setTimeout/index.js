// This is async and won't stop execution

function delayedFunction() {
  console.log("This function was delayed.");
}

// Using setTimeout to schedule the execution of delayedFunction after 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);

console.log("This message appears first.");

// Output:
// This message appears first.
// This function was delayed. (after 2 seconds)
