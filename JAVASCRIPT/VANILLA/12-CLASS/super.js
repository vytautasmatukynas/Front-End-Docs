class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the superclass using super()
      super(name);
      this.breed = breed;
    }
  
    makeSound() {
      // Call the makeSound method of the superclass using super
      super.makeSound();
      console.log("Woof! Woof!");
    }
  
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  // Creating an instance of the subclass
  const dog1 = new Dog("Buddy", "Golden Retriever");
  
  // Using methods of the subclass
  dog1.makeSound();
  // Output:
  // Some generic sound
  // Woof! Woof!
  
  dog1.fetch();
  // Output:
  // Buddy is fetching the ball.
  