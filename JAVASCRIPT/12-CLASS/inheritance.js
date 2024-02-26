// Superclass
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method of the superclass
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  // Subclass (inherits from Animal)
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the superclass using super()
      super(name);
      this.breed = breed;
    }
  
    // Override the makeSound method of the superclass
    makeSound() {
      console.log("Woof! Woof!");
    }
  
    // New method specific to Dog
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  // Creating instances of the classes
  const genericAnimal = new Animal("Generic Animal");
  const dog1 = new Dog("Buddy", "Golden Retriever");
  
  // Using methods of the classes
  genericAnimal.makeSound(); // Output: Some generic sound
  
  dog1.makeSound(); // Output: Woof! Woof!
  dog1.fetch(); // Output: Buddy is fetching the ball.
  