function findIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// Test
const input1 = [1, 2, 3, 4];
const input2 = [3, 4, 5, 6];
console.log(findIntersection(input1, input2)); // Output: [3, 4]
