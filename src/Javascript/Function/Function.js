// Function Declaration: A function defined using the function keyword followed by a
// name. It is hoisted, meaning it can be called before its definition in the code.

function greet() {
  console.log("Hello");
}
greet();

// Function Expression: A function defined within an expression, often assigned to a
// variable. It is not hoisted, meaning it can only be called after its definition.

const greett = function () {
  console.log("Hello");
};
greett();

// Anonymous Function
// Anonymous functions are often used as callback functions in higher-order functions like setTimeout, map, filter, etc.
// Anonymous function is a function that does not have any name associated with it
// Anonymous function has only on expression

var greeting = function (greet) {
  console.log("Namaste", greet);
};
greeting("javascript");


// First-Class Function
// A first-class function refers to the behavior of functions in JavaScript—they are treated as "first-class citizens."
//  It means functions can:

// Be stored in variables.
// Be passed as arguments to other functions.
// Be returned from other functions.



// Pure Function 
// A pure function always produces the same output for the same input, regardless of external factors.
// Array methods like map and filter are commonly used with pure functions.

//let x = 10; // external state
function pureMultiply(a, b) {
    return a * b; // does not modify x or other states
}
console.log(pureMultiply(2, 3)); // Output: 6


// impure function 

let count = 0;
function increment() {
    count++; // Modifies the external state
}
increment();
increment();
increment();
console.log(count); // Impure: modifies `count`



