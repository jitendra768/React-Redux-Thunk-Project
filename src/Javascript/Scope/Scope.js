// Scope refers to the area where an item such as a function or variable are accessible to other code.
// Global scope means global space or a public space.
// Local scope means a local region or a restricted region.

const fullName = "Amit Kumar";

function profile() {
  function sayName() {
    function writeName() {
      console.log(fullName);
    }
    writeName();
  }
  sayName();
}

profile();
