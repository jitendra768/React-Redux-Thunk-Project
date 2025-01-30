class Animal {
  constructor(name) {
    this.name = name;
  }
  speek() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}
const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speek();
dog1.bark();
