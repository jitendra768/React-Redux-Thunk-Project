// The map method creates a new array by applying a function to each element of the original array.
// It is useful when you want to transform data.
// const newArray = array.map(callback(currentValue, index, array), thisArg);
// Parameters:
// callback: A function that is called for every element in the array. It takes three arguments:

// currentValue: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The original array being traversed.

// thisArg (optional): A value to use as this when executing the callback.

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const productName = products.map((product) => product.name.toUpperCase());
console.log("🚀 ~ productName:", productName);

const prices = [100, 200, 300, 400];
const discountedPrices = prices.map((price) => price * 0.9);
console.log("🚀 ~ discountedPrices:", discountedPrices);

// The filter method creates a new array with only the elements that pass a certain condition.
// It is useful for selecting specific data.
// const newArray = array.filter(callback(currentValue, index, array), thisArg);
// Parameters:
// callback: A function that tests each element in the array. It takes three arguments:

// currentValue: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The original array being traversed.

// thisArg (optional): A value to use as this when executing the callback.

const products1 = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
  { name: "Monitor", inStock: false },
];

const inStockProduct = products1.filter((product) => product.inStock);
console.log("🚀 ~ inStockProduct:", inStockProduct);

// The reduce method reduces an array to a single value by applying a function to each element and accumulating the result.
// It is useful for calculations like summing up values.
// const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// Parameters:
// callback: A function that is called for every element in the array. It takes four arguments:

// accumulator: The accumulated value from previous iterations (or the initialValue for the first iteration).

// currentValue: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The original array being traversed.

// initialValue (optional): The initial value of the accumulator. If not provided, the first element of the array is used as the initial value.

const orders = [50, 100, 150, 200];
const totalRevenue = orders.reduce(
  (accumulator, order) => accumulator + order,
  0
);
console.log("🚀 ~ totalRevenue:", totalRevenue);

// combine example

const products2 = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

// Step 1: Apply 10% discount

const discountedProducts = products2.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));

// Step 2: Filter products with price > 100
const filteredProducts = discountedProducts.filter(
  (product) => product.price > 100
);
// Step 3: Calculate total price of filtered products
const totalPrice = filteredProducts.reduce(
  (total, product) => total + product.price,
  0
);
console.log("🚀 ~ totalPrice:", totalPrice);
