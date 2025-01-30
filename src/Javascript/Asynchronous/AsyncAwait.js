// async and await provide a way to work with promises more easily. async functions return a promise,
// and await is used to wait for a promise to resolve before continuing with the execution.
// This makes asynchronous code look and behave more like synchronous code.
// Here is an example of how to use async and await with promises:

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched from server");
    }, 1000);
  });
}

async function handleData() {
  try {
    const data = await fetchData();
    console.log(data);
    console.log("Processing data...");
    console.log("Displaying data...");
  } catch (error) {
    console.log("Error", error);
  }
}

handleData();
