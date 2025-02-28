// 1. what is hoisting
console.log(myMessage);
var myMessage = "Greeting";

sayHello();

function sayHello() {
  console.log("Hello world");
}

// hoisting with local scope

function performTask() {
  result = 100;
  console.log("🚀 ~ performTask ~ result:", result);
  var result;
}
performTask();
