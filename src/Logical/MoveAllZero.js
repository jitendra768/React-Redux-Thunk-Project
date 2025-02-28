function moveZeroToEnd(arr) {
  let n = arr.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(moveZeroToEnd(arr));
