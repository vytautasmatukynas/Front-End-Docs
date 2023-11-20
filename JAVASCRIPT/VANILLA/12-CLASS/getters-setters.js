class Circle {
    constructor(radius) {
      this._radius = radius; // Note: conventionally, a leading underscore is used to indicate a private variable
    }
  
    // Getter for radius
    get radius() {
      return this._radius;
    }
  
    // Setter for radius
    set radius(newRadius) {
      if (newRadius > 0) {
        this._radius = newRadius;
      } else {
        console.error("Radius must be greater than 0");
      }
    }
  
    // Getter for area
    get area() {
      return Math.PI * this._radius ** 2;
    }
  }
  
  // Creating an instance of the Circle class
  const myCircle = new Circle(5);
  
  // Using the getter
  console.log(myCircle.radius); // Output: 5
  
  // Using the setter
  myCircle.radius = 8;
  console.log(myCircle.radius); // Output: 8
  
  // Trying to set an invalid radius
  myCircle.radius = -2; // Output: Radius must be greater than 0
  
  // Using the getter for area
  console.log(myCircle.area); // Output: 201.06192982974676
  