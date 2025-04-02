const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const updatedUsers = users.map((user) =>
  user.id === 2 ? { ...user, age: 32 } : user
);
console.log("🚀 ~ updatedUsers:", updatedUsers);
