function secondLargestElement(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== arr[i - 1]) {
      return arr[i];
    }
  }
  return -1;
}

const arr = [2, 45, 56, 8, 23, 90];
console.log(secondLargestElement(arr));

function thirdLargest(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  return arr[n - 3];
}
console.log(thirdLargest(arr));
