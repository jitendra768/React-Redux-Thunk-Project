const myArray = [
  { name: "A", age: 26, gender: "M", graduation: "B.Tech" },
  { name: "B", age: 23, gender: "F", graduation: "BCA" },
  { name: "C", age: 30, gender: "M", graduation: "BA" },
  { name: "D", age: 35, gender: "M", graduation: "B.Tech" },
  { name: "E", age: 20, gender: "F", graduation: "BA" },
];

const grouped = {};
for (let i = 0; i < myArray.length; i++) {
  const graduation = myArray[i].graduation;
  console.log("🚀 ~ graduation:", graduation);

  if (!grouped[graduation]) {
    grouped[graduation] = [];
  }
  grouped[graduation] =  myArray.filter((item)=>item.graduation===graduation);
}
console.log(grouped);
