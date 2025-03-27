// A shallow copy creates a new object or array, but only copies the references of nested objects or arrays.
// Changes to nested properties in the copy will affect the original object (shared reference).

const original = {
  name: "Alice",
  age: 25,
  address: {
    city: "new york",
    zip: 10001,
  },
};

const shallowCopy = { ...original }; // Shallow copy using spread operator

console.log("🚀 ~ shallowCopy:", shallowCopy);
shallowCopy.name = "bob"; // Changes only the copy
shallowCopy.address.city = "Los angles"; // Changes both copy & original

console.log("🚀 ~ original:", original);
console.log("Shallow Copy:", shallowCopy);

// A deep copy creates an entirely new object or array, including all nested objects, without shared references.
// Changes to the copy do NOT affect the original object.

const original1 = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: 10001,
  },
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original1));

deepCopy.name = "Bob"; // Only affects the copy
deepCopy.address.city = "Los Angeles"; // Only affects the copy

console.log("Original:", original1);
// { name: "Alice", age: 25, address: { city: "New York", zip: 10001 } }

console.log("Deep Copy:", deepCopy);
// { name: "Bob", age: 25, address: { city: "Los Angeles", zip: 10001 } }
