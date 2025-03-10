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

let value = 0 ?? 'default';
console.log("🚀 ~ value:", value)
