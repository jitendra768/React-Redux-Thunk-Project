import Listing from "./Fetch/Listing";
import useCounter from "./useCounter";

// Custom hooks are user-defined functions in React that start with the prefix use.
// They allow you to reuse stateful logic across components without duplicating code.
// Custom hooks encapsulate reusable logic and can utilize other React hooks internally.

const Counter = () => {
  const { count, Increment, Decrement, Reset } = useCounter(0);
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="p-6">
        <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
          <h1>Count: {count}</h1>
          <button
            type="button"
            onClick={Increment}
            className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={Decrement}
            className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
          >
            Decrement
          </button>
          <button
            type="button"
            onClick={Reset}
            className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-red-800 active:bg-red-700"
          >
            Reset
          </button>
        </div>
        <Listing/>
      </div>
    </div>
  );
};

export default Counter;
