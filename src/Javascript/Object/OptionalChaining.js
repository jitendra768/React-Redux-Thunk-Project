let user = {
  profile: {
    name: "john",
    address: {
      city: "new york",
    },
  },
};

console.log(user.profile?.name)
console.log(user.profile?.address?.city)

// eslint-disable-next-line no-constant-binary-expression
let value = 0 ?? 'default';
console.log("🚀 ~ value:", value)
