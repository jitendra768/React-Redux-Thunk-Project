// Throttle ensures that a function is executed at most once in a specified period
// of time. This is useful for events that can occur continuously, such as scrolling or resizing a
// window.

// Real-Life Example: Think about a traffic light. It changes color at set intervals, regardless of
// whether cars are still arriving. Throttling means allowing an action to happen at a limited rate.

function throttle(func, limit) {
  let lastExecution = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecution >= limit) {
      func(...args);
      lastExecution = now;
    }
  };
}

const logScroll = throttle(() => {
  console.log("you are scrolling");
}, 1000);
console.log("Scrolling on the web page");
window.addEventListener("scroll", logScroll);
