// Debounce is a technique that delays funtion execution until after a specified time has passed since the last event.
// 1. prevent unnecessary API calls
// 2. improve performance
// 3. Enhance user experience

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

debounce()