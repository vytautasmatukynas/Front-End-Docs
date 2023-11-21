// This is async and won't stop execution

function repeatedFunction() {
  console.log("This function will be repeated every 3 seconds.");
}

// Using setInterval to repeatedly execute repeatedFunction every 3000 milliseconds (3 seconds)
const intervalId = setInterval(repeatedFunction, 3000);

// Stop the interval after 10 seconds (10000 milliseconds)
setTimeout(function() {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds.");
}, 10000);
