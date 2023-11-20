class MathOperations {
    // Static property
    static PI = 3.14;
  
    // Static method
    static add(x, y) {
      return x + y;
    }
  
    // Static method
    static multiply(x, y) {
      return x * y;
    }
  }
  
  // Accessing static property
  console.log(MathOperations.PI); // Output: 3.14
  
  // Calling static methods
  const sum = MathOperations.add(5, 3);
  console.log(sum); // Output: 8
  
  const product = MathOperations.multiply(4, 2);
  console.log(product); // Output: 8
  