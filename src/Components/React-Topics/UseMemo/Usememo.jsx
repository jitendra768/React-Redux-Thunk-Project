// The useMemo hook memoizes the return value of an expensive calculation between renders.
// Memoizing means storing the value as a cached value so that the value need not be calculated again (unless it's required).
// when you declare a variable inside a component, it gets re-created on every render.
//  If it stores the return value of a function, then the function gets called every time your component renders.

// const value = useMemo(expensiveFunction, [...dependencyArray])

import { useMemo, useState } from "react";

function calculate() {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

const Usememo = () => {
  const [count, setCount] = useState(0);

  const value = useMemo(calculate,[]);
  return (
    <div>
      <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
        {console.log(value)}
        <h1>Count: {count}</h1>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Usememo;
