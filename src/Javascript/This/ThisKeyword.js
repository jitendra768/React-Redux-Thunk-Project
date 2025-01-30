//In javascript the 'this' keyword refer to an object.
//alone this refer to the global object
//In a function this refer to the global object
//In a function in strict mode this is undefined
//Method like call(), apply(), bind() can refer this to any object

console.log(this); //this refer to the window object

function saySomething() {
  console.log(this); //this refer to the window object
}

saySomething();

const person = {
  firstName: "John",
  lastName: "Doe",
  sayHello: function () {
    return this;
  },
};
console.log("this in object method", person.sayHello());

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("this in object method", person1.getFullName());

//A note about arrow function
// In arrow functions, JavaScript sets the this lexically.
// This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.

const show = () => this;
console.log(show()); //this refer to the window object

const person3 = {
  name: "Pedro",
  surname: "Sanchez",
  sayName: () => this.name + " " + this.surname,
};
console.log(person3.sayName());
