// Defining a car object with properties (model, color, year)
const car = {
    model: "audi",
    color: "red",
    year: 2023,

    // Adding a drive method to the car object
    drive: function () {
        console.log("Drive");
    },

    // Adding a brake method to the car object
    brake: function () {
        console.log("Stop");
    }
};

// Accessing and logging the properties of the car object
console.log("Model:", car.model); // Output: Model: audi
console.log("Color:", car.color); // Output: Color: red
console.log("Year:", car.year);   // Output: Year: 2023

// Calling the drive method of the car object
car.drive(); // Output: Drive

// Calling the brake method of the car object
car.brake(); // Output: Stop


// Defining a person object with properties (firstName, lastName, id)
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
  
    // Adding a fullName method to the person object
    fullName : function() {
      // Using 'this' keyword to access properties within the object
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Accessing and logging properties of the person object
  console.log("First Name:", person.firstName); // Output: First Name: John
  console.log("Last Name:", person.lastName);   // Output: Last Name: Doe
  console.log("ID:", person.id);                 // Output: ID: 5566
  
  // Calling the fullName method of the person object
  const fullNameResult = person.fullName();
  console.log("Full Name:", fullNameResult);     // Output: Full Name: John Doe
  