// Scope refers to the area where an item such as a function or variable are accessible to other code.
// there are main two type of scope
// 1. Global scope means global space or a public space.
// 2. Local scope means a local region or a restricted region.

var globalVar = "I am global";

function exampleFuntion() {
  console.log(globalVar);
}
exampleFuntion();
console.log(globalVar);

function example() {
  var localVar = "I am local";
  console.log(localVar);
}
example();
// console.log(localVar);

// Scope Chain
// the scope chain refer to the hierarchy of scope in a program.

var globalVar1 = 42;
function mainFUntion() {
  var localVar1 = 777;
  var innerFuntion1 = function () {
    console.log(localVar1);
  };
  // let globalVar1 ="hello"
  var innerFuntion2 = function () {
    console.log(globalVar1);
  };
  innerFuntion1();
  innerFuntion2();
}
mainFUntion();
