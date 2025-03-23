// Debounce ensures that a function is executed only after a specified time has
// passed since it was last invoked. This is helpful when you want to avoid running a function too
// frequently, such as during user input.

// Real-Life Example: Imagine you are typing in a search box. You don’t want to search every
// time a letter is typed; instead, you want the search to occur after you stop typing for a moment.

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const search = debounce(() => {
  console.log("...searching");
}, 1000);

console.log("typing in search box");
search();
search();
search();
