// 1.
// let newList = [1, 2, 3].push(4);
// console.log(newList.push(5));

// 2.
// const name = 'dimple';
// 3.
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);

// 4.
// const colorConfig = {
//     red: true,
//     green: false,
//     blue: true,
//     black: true,
//     yellow: false
// }

// const colors = ['pink','red','blue'];
// console.log(colorConfig.colors[1])

// 5.

// let name = "Dimple";
// function getName() {
//   console.log(name);
//   let name = "twinkle";
// }
// getName();

// 6.
// let config = {
//   alert: setInterval(() => {
//     console.log("Hello");
//   }, 1000),
// };
// config = null;

// 7.

const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};
add(4)(5)(6);

// 8.
const myPromise = Promise.resolve("wow some cool data");

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error("opps did not work");
  } finally {
    console.log("oh finaly");
  }
})();

// 9.
// const handler = {
//     set: ()=>console.log('Added a new property!'),
//     get: ()=>console.log('access a property')
// }

// const person = new Proxy({},handler)
// person.name = 'dimple'
// person.name