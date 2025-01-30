// In React, controlled components and uncontrolled components refer to two different approaches to handling form inputs.

// A controlled component is a component where the form data is handled by the React component state.
// React has full control over the value of the input fields.

// An uncontrolled component is a component where the form data is handled by the DOM itself.
// React doesn't manage the value of the input fields. Use refs to access the form data.

import { useRef, useState } from "react";

const ControlComponents = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submited value ${input}`);
  };
  return (
    <div>
      <form
        className="space-y-4 mt-10px font-[sans-serif] max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold border-b-2 inline-block border-[#007bff] pb-1 capitalize">
          Controlled Component
        </h2>
        <input
          type="email"
          value={input}
          onChange={handleClick}
          placeholder="Enter Email"
          className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
        />
        <button
          type="submit"
          className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <Uncontrolled />
    </div>
  );
};

export default ControlComponents;

const Uncontrolled = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submited input, ${inputRef.current.value}`);
  };
  return (
    <div className="mt-5">
      <form
        className="space-y-4 mt-10px font-[sans-serif] max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold border-b-2 inline-block border-[#007bff] pb-1 capitalize">
          Uncontrolled Component
        </h2>
        <input
          type="email"
          ref={inputRef}
          placeholder="Enter Email"
          className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
        />
        <button
          type="submit"
          className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
