// All JavaScript objects inherit properties and methods from a prototype.
// The JavaScript prototype property allows you to add new properties to object constructors:

function Animal(name,color,age){
    this.animalName = name;
    this.animalColor = color;
    this.animalAge = age;
}

const dog = new Animal("Dog","black","12")
console.log("🚀 ~ dog:", dog)
Animal.prototype.wheit = "25kg"
const dog1 = new Animal("Dog","black","12")
console.log("🚀 ~ dog1:", dog1)
