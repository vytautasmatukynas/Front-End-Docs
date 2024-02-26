// Basic example:
try {
    // Code that might throw an exception
    let result = someFunctionThatMightThrowAnException();
    console.log(result); // This line won't be executed if an exception occurs
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
  } finally {
    // Code that will be executed regardless of whether an exception occurred or not
    console.log("Finally block executed");
  }
  
// Custom error:
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Caught a custom error:", error.message);
  } else {
    console.error("An error occurred:", error.message);
  }
} finally {
  console.log("Finally block executed");
}
  
// Throw error:
function divide(x, y) {
  if (y === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return x / y;
}

try {
  const result = divide(10, 2);
  console.log("Result:", result); // Output: Result: 5

  // This will throw an exception
  const invalidResult = divide(8, 0);
  console.log("This line won't be executed");
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Finally block executed");
}
  