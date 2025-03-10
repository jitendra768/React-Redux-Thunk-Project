// It can be used to access a DOM element directly.
// It can be used to store a mutable value that does not cause a re-render when updated.
// useRef() only returns one item. It returns an Object called current.

import { useEffect, useRef } from "react";

const UseRefhooks = () => {
  const countvalue = useRef(0);
  const divRefrence = useRef();
  const refFocus = useRef();

  const handleClick = () => {
    countvalue.current++;
    console.log(countvalue.current);
  };

  useEffect(() => {
    const divref = divRefrence.current;
    console.log(divref);
  }, []);

  useEffect(() => {
    refFocus.current.focus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useRef Hook</h1>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
      >
        Click me
      </button>
      <div
        ref={divRefrence}
        className="mt-6 p-4 bg-white rounded-lg shadow-md text-gray-700"
      >
        Hello world
      </div>
      <input
        ref={refFocus}
        type="text"
        placeholder="Enter something"
        className="mt-6 px-4 py-3 bg-gray-200 w-64 text-sm outline-none border-b-2 border-blue-500 rounded-lg focus:bg-white focus:border-blue-600 transition-all duration-200"
      />
    </div>
  );
};

export default UseRefhooks;
