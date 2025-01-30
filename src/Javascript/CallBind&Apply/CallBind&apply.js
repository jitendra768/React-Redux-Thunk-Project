const person = {
  name: "John Doe",
  age: 30,
  getFullName: function (hometown) {
    return this.name + " " + this.age + " " + hometown;
  },
};

const person1 = {
  name: "Jane ",
  age: 40,
};

// Call Apply Bind are predefined methods in javascript;
// call method allows an object to use method into another object
// you can pass arguments indivisualy seperated by comma
const res = person.getFullName.call(person1, "Lucknow");
console.log("🚀 ~ res:", res);

//Apply
// The apply() method is similar to call(), but it takes an array of arguments instead of listing them individually.
const res1 = person.getFullName.apply(person1, ["Delhi"]);
console.log("🚀 ~ res1:", res1);

//Bind
// bind make a copy of function and invoke later
const res2 = person.getFullName.bind(person1, ["Mumbai"]);
const h = res2();
console.log("🚀 ~ res2:", h);
