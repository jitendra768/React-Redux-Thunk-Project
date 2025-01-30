// A callback is a function that is passed as an argument to another function and is executed when the operation is complete.
// Callbacks are typically used for asynchronous tasks like reading files, making HTTP requests, or setting timeouts.

function fetchData(cb) {
  setTimeout(() => {
    console.log("fetched data");
    cb(); //Execute the callback once the data is fetched
  }, 1000);
}
function displayData() {
  console.log("displaying data");
}

fetchData(displayData); // fetchData is called, and displayData is passed as a callback

// Callback Hell
// One downside of callbacks is that they can lead to callback hell (or "pyramid of doom"), where callbacks
// are nested inside one another, making code harder to read and maintain.
// Asynchronous code gets difficult to manage as the complexity grows, especially when multiple callbacks are involved.

fetchData(function () {
  fetchData(function () {
    fetchData(function () {
      console.log("data is fetch");
    });
  });
});
