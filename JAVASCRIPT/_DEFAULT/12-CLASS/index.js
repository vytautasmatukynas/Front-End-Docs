class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the Person class
  const person1 = new Person('John', 25);
  
  // Accessing properties
  console.log(person1.name); // Output: John
  console.log(person1.age);  // Output: 25
  
  // Calling a method
  person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
  
