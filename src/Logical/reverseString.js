function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Amit"));

function reverseString1(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString1("hello my"));

// what does split method
// split() method splits a string into an array of substrings, and returns the new array.
// The string is split at each occurrence of the specified separator (by default, whitespace). If the separator is not specified, the string is split at each whitespace character (such as at a
//  space, tab or newline).
// split take two parameter (seperator,limit)
let text = "How are you doing today?";
let words = text.split(" ");
console.log("🚀 ~ words:", words);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text1 = fruits.join();
console.log("🚀 ~ text:", text1);
