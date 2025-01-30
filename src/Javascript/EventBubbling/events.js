// In JavaScript, event handling has two primary phases: event capturing and event bubbling.
// In the bubbling phase, an event starts from the target element and propagates upwards to its ancestors in the DOM hierarchy.
// In the capturing phase (or trickle-down phase), the event is propagated from the top-most ancestor down to the target element.

// stopPropagation
// This method stops the event from propagating further in either the bubbling or capturing phase.

const divElement = document.querySelector("div");
const btnElement = document.querySelector("button");


divElement.addEventListener("click", () => {
  console.log("div");
},true);



btnElement.addEventListener("click", () => {
  console.log("button");
},true);
