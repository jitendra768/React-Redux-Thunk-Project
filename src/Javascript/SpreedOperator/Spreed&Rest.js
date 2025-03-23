// The spread operator is used to "spread" or expand elements of an iterable (like an array or object) into individual elements.
// It is commonly used for:

// Copying arrays or objects.

// Merging arrays or objects.

// Passing elements of an array as arguments to a function.

const fruits = ["apple", "banana"];
const vegitables = ["carrot", "potato"];
const groceries = [...fruits, ...vegitables];
console.log("🚀 ~ groceries:", groceries);

const person = { name: "John", age: 30 };
const updatedPerson = { ...person, age: 31 }; // Copy and update age

console.log(updatedPerson); // Output: { name: "John", age: 31 }

// The rest operator is used to collect multiple elements into a single array or object. It is commonly used in:

// Function parameters to accept an indefinite number of arguments.

// Destructuring arrays or objects to capture the remaining elements.

function calculateTotalPrice(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}
const total = calculateTotalPrice(10, 20, 30, 40);
console.log("🚀 ~ total:", total);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // Capture remaining elements

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// combine example
function addItemToCart(item, ...existingItem) {
  const updateCart = [...existingItem, item];
  return updateCart;
}

const cart = addItemToCart("apple", "banana", "carrot");
console.log("🚀 ~ cart:", cart);

// merging object
const profile1 = { name: "John", age: 30 };
const profile2 = { city: "New York", country: "USA" };

// Merge objects using the spread operator
const mergedProfile = { ...profile1, ...profile2 };

console.log(mergedProfile);
// Output: { name: "John", age: 30, city: "New York", country: "USA" }
