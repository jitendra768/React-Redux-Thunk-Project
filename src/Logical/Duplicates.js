function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const input = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(input));

function removeDuplicatesArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicatesArray(input));
