/* eslint-disable react/display-name */
// forwardRef is a React utility that allows you to pass a ref from a parent component to a child component.
// Normally, ref is not passed through components automatically because ref is not a prop.
// forwardRef solves this problem by forwarding the ref to a child component.

import { forwardRef, useRef } from "react";

function ParentComponent() {
  const inputRef = useRef(null);

  const handleInputRef = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <InputField ref={inputRef} placeholder="Type something..." />
      <button onClick={handleInputRef}>Focus Input</button>
    </div>
  );
}

export default ParentComponent;

const InputField = forwardRef((props, ref) => {
  console.log("🚀 ~ InputField ~ ref:", ref);
  console.log("🚀 ~ InputField ~ props:", props);
  return <input type="text" ref={ref} {...props} />;
});
