const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

// forEach() modifies the original array directly.
// It does not create a new array.


products.forEach((product) => {
  if (product.id === 2) {
    product.price = 550;
  }
});
console.log("🚀 ~ products.forEach ~ products:", products);
