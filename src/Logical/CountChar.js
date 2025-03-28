function countChar(inputList) {
  let myObj = {};
  for (const char of inputList) {
    if (char in myObj) {
      myObj[char]++;
    } else {
      myObj[char] = 1;
    }
  }
  return myObj;
}

const inputList = ["A", "B", "d", "A", "a", "D", "D"];
const response = countChar(inputList);
console.log(response);
