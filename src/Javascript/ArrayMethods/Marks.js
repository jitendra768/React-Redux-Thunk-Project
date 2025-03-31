let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of marks) {
  sum += val;
}

const avg = sum / marks.length;
console.log(`avg marks of the class: ${avg}`);

let items = [250, 645, 900, 50, 400];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}

console.log(items);
