// Using Callbacks:
// Define a function that simulates fetching data asynchronously with a callback
function fetchData(callback) {
  // Simulate a delay using setTimeout
  setTimeout(function() {
    const data = "This is some asynchronous data!";
    // Call the provided callback with the fetched data
    callback(data);
  }, 2000);
}

// Define a callback function to process the fetched data
function processData(data) {
  console.log("Processing data:", data);
}

// Call the fetchData function with the processData callback
fetchData(processData);

// This line is executed immediately because JavaScript does not block while waiting for asynchronous operations.


// Using Promises:
// Define a function that returns a Promise for asynchronous data fetching
function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulate a delay using setTimeout
    setTimeout(function() {
      const success = true;

      if (success) {
        const data = "This is some asynchronous data!";
        // Resolve the Promise with the fetched data
        resolve(data);
      } else {
        // Reject the Promise with an error
        reject(new Error("Failed to fetch data."));
      }
    }, 2000);
  });
}

// Use the fetchData function with Promise's then and catch methods to handle success and error cases
fetchData()
  .then(function(data) {
    console.log("Data fetched:", data);
  })
  .catch(function(error) {
    console.error("Error:", error.message);
  });

// This line is executed immediately.


// Using async and await:
// Define a function that returns a Promise for asynchronous data fetching
function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulate a delay using setTimeout
    setTimeout(function() {
      const success = true;

      if (success) {
        const data = "This is some asynchronous data!";
        // Resolve the Promise with the fetched data
        resolve(data);
      } else {
        // Reject the Promise with an error
        reject(new Error("Failed to fetch data."));
      }
    }, 2000);
  });
}

// Define an asynchronous function that uses the await keyword to wait for the completion of the fetchData Promise
async function processData() {
  try {
    const data = await fetchData();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the asynchronous processData function
processData();

// This line is executed immediately.
