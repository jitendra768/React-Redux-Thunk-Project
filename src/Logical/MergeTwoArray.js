function mergeSortedArray(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

const input1 = [1, 3, 5];
const input2 = [2, 4, 6];
console.log(mergeSortedArray(input1, input2));
