// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
// In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.

console.log("start");
setTimeout(() => {
  console.log("this run after 2 second");
}, 2000);

console.log("end");
