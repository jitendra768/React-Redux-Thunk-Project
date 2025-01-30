// The React useState Hook allows us to track state in a function component.
// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="p-6">
        <p>Count:{count}</p>
        <button
          type="button"
          onClick={handleClick}
          className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;
