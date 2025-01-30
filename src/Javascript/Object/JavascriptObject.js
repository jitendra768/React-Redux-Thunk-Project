const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log("🚀 ~ person:", person)


const person1={};
person1.firstName="John";
person1.lastName="Doe";
console.log("🚀 ~ person:", person1)

// Create an empty JavaScript object using new Object(), and add 4 properties:
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
console.log("🚀 ~ person2:", person2)

function Person(first,last,age,eye){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
console.log("🚀 ~ myFather:", myFather)
const myMother = new Person("Sally", "Rally", 48, "green");
console.log("🚀 ~ myMother:", myMother)
const mySister = new Person("Anna", "Rally", 18, "green");
console.log("🚀 ~ mySister:", mySister)
const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log("🚀 ~ mySelf:", mySelf)
