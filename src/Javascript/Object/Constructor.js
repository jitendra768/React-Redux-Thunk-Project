// A constructor function is used to create and initialize objects.
// It acts as a blueprint for creating objects of the same type.
// To Create an object from a constructor function we use the new keyword

function Person(name,age){
    this.name=name;
    this.age=age;
}

const boy = new Person("AMit",40)
console.log("🚀 ~ boy:", boy)
