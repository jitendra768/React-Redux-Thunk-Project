//useCallback is a React Hook that is used to memoize a callback function.
// This helps prevent unnecessary re-creations of functions on every render, which can be important for performance optimization,
// especially when passing functions as props to child components that are wrapped in React.memo or when the callback is a dependency of other hooks.


import { useCallback, useState } from "react";
import Child from "./Child";

const Usecallback = () => {
  const [count, setCount] = useState(0);

  const learning= useCallback(()=>{

  },[])
  return (
    <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
    <Child learning={learning}/>
      <h1 className="text-3xl">Count: {count}</h1>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
      >
        Increment
      </button>
    </div>
  );
};

export default Usecallback;
