const arr = [
  [1, 10, 15],
  [20, 5, 30],
  [40, 50, 2],
];

const filtered = arr.map((item) => item.filter((num) => num > 10));
console.log("🚀 ~ filtered:", filtered);

// Sum of All Numbers in a 2D Array
const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let totalSum = 0;

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    totalSum += arr1[i][j];
  }
}

console.log("Sum of all numbers:", totalSum);

// Find the Largest Number in Each Subarray
const arr3 = [
  [2, 5, 8], // Row 0
  [12, 7, 3], // Row 1
  [9, 14, 1], // Row 2
];

const largestNumbers = [];

for (let i = 0; i < arr3.length; i++) {
  let max = arr3[i][0];

  for (let j = 1; j < arr3[i].length; j++) {
    if (arr3[i][j] > max) {
      max = arr3[i][j];
    }
  }

  largestNumbers[largestNumbers.length] = max;
}

console.log("Largest numbers in each subarray:", largestNumbers); // Output: [8, 12, 14]

// Flatten a 3D Array into 1D
const arr5 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

const flattened = []; // Array to store the flattened values

for (let i = 0; i < arr5.length; i++) {
  // First level loop
  for (let j = 0; j < arr5[i].length; j++) {
    // Second level loop
    for (let k = 0; k < arr5[i][j].length; k++) {
      // Third level loop
      flattened[flattened.length] = arr5[i][j][k]; // Store values in the flattened array
    }
  }
}

console.log(flattened);
