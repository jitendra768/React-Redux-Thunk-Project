// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It is a cleaner and more powerful way to work with asynchronous code compared to callbacks. Promises can be in one of three states:

// Pending: The initial state before the operation is completed.
// Fulfilled: The operation was successful and completed.
// Rejected: The operation failed.

function fetchData() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("data fetched succesfuly");
      } else {
        reject("data fetching failed");
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise Chaining
// You can chain .then() methods to handle multiple asynchronous operations one after another.
// If any promise is rejected, the .catch() block will handle the error.

fetchData()
  .then((data) => {
    console.log(data);
    return fetchData();
  })
  .then((data) => {
    console.log("second fetch", data);
  })
  .catch((err) => console.log(err));

// Promise All
// Promise.all() is used to run multiple promises concurrently and wait for all of them to resolve or any of them to reject

const promise1 = fetchData();
const promise2 = fetchData();

Promise.all([promise1, promise2])
  .then((results) => {
    console.log("All data fetched:", results); // Resolves when both promises are fulfilled
  })
  .catch((error) => {
    console.error("Error in one of the promises:", error); // Rejects if any promise fails
  });
