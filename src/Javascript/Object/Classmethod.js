// JavaScript introduced the class keyword in ES6 to make OOP more intuitive.
// A class is syntactic sugar over constructor functions and prototypes.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const person2 = new Person("bob", 30);
console.log("🚀 ~ person2:", person2);
