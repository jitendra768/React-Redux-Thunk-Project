// Currying is a functional programming technique where a function is transformed into a sequence of functions,
//  each taking a single argument. Instead of taking all arguments at once,
//   the function takes the first argument and returns another function that takes the second argument, and so on,
//    until all arguments are provided.

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(1)(2)(2))

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6

const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Clothing", price: 30 },
  { name: "Shoes", category: "Clothing", price: 50 },
];

const filterProduct = (category) => (minPrice) => (maxPrice) => (products) => {
  return products.filter(
    (product) =>
      product.category === category &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );
};

const electronicsUnder1000 = filterProduct("Electronics")(0)(1000);
const clothingBetween20and60 = filterProduct("Clothing")(20)(60);
console.log("🚀 ~ clothingBetween20and60:", clothingBetween20and60(products));
console.log("🚀 ~ electronicsUnder1000:", electronicsUnder1000(products));
