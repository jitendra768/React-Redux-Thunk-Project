const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const productName = products.map((product) => product.name.toUpperCase());
console.log("🚀 ~ productName:", productName);
