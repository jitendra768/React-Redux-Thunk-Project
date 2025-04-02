const products = [
  {
    id: 1,
    name: "Laptop",
    specs: {
      ram: "16GB",
      storage: "512GB",
      features: [
        { feature: "Touchscreen", enabled: true },
        { feature: "Backlit Keyboard", enabled: false },
      ],
    },
  },
  {
    id: 2,
    name: "Phone",
    specs: {
      ram: "8GB",
      storage: "128GB",
      features: [
        { feature: "5G", enabled: true },
        { feature: "Waterproof", enabled: false },
      ],
    },
  },
];
console.log("🚀 ~ products:", products);

// Enable "Backlit Keyboard" on the Laptop

const updatedProduct = products.map((product) =>
  product.id === 1
    ? {
        ...product,
        specs: {
          ...product.specs,
          features: product.specs.features.map((feat) =>
            feat.feature === "Backlit Keyboard"
              ? { ...feat, enabled: true }
              : feat
          ),
        },
      }
    : product
);

console.log(updatedProduct);
