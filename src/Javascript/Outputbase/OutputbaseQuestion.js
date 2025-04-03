/* eslint-disable no-constant-condition */
// 1.
// let randomValue = { name: "Dimple" };
// randomValue = 23;

// eslint-disable-next-line no-constant-binary-expression
// if (!typeof randomValue === "string") {
//   console.log("randomValue is not a string");
// } else {
//   console.log("randomValue is a string");
// }

// 2.
// const user = {
//   email: "my@gmail.com",
//   updateEmail: (email) => {
//     this.email = email;
//   },
// };

// user.updateEmail("new@gmail.com");
// console.log(user.email);

// 3.
// const body = ["💕", "👁️", "❤️"];
// body.slice(0, 1);
// body.splice(0, 1);
// body.unshift("🦌");
// console.log("🚀 ~ body:", body);

// 4.

// class Calc {
//   constructor() {
//     this.count = 0;
//   }
//   increase() {
//     this.count++;
//   }
// }

// const calc = new Calc();
// new calc().increase();
// console.log(calc.count);

// 5.

let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  console.log(num)
   count = count + 1;
});

console.log(count);

// 6.
// class Bird {
//   constructor() {
//     console.log("i am bird🐦");
//   }
// }

// class Flamingo extends Bird {
//   constructor() {
//     console.log("i am pink 🐥");
//     super();
//   }
// }

// const pet = new Flamingo();
