const data = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      {
        id: 101,
        name: "Mobiles",
        products: [
          { id: 1001, name: "iPhone", price: 999 },
          { id: 1002, name: "Samsung Galaxy", price: 799 },
        ],
      },
      {
        id: 102,
        name: "Laptops",
        products: [
          { id: 1003, name: "MacBook", price: 1299 },
          { id: 1004, name: "Dell XPS", price: 1199 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Clothing",
    subcategories: [
      {
        id: 201,
        name: "Men",
        products: [
          { id: 2001, name: "T-Shirt", price: 20 },
          { id: 2002, name: "Jeans", price: 40 },
        ],
      },
    ],
  },
];

const addProduct = (data, subcategoryId, newProduct) => {
  data.forEach((category) => {
    category.subcategories.forEach((sub) => {
      if (sub.id === subcategoryId) {
        sub.products.push(newProduct);
      }
    });
  });
};

const newProduct = { id: 1005, name: "OnePlus", price: 699 };
addProduct(data, 101, newProduct);
console.log(data);
