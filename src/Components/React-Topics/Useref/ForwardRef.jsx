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
    <div className="p-5 font-sans">
      <InputField ref={inputRef} placeholder="Type something..." />
      <button
        onClick={handleInputRef}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Focus Input
      </button>
    </div>
  );
}

export default ParentComponent;

const InputField = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      {...props}
      className="w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
});
