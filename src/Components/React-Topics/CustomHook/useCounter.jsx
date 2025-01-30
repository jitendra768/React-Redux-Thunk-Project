import { useState } from "react";

const useCounter = (initialvalue = 0) => {
  const [count, setCount] = useState(initialvalue);

  const Increment = () => setCount((prevCount) => prevCount + 1);
  const Decrement = () => setCount((prevCount) => prevCount - 1);
  const Reset = () => setCount(initialvalue);

  return {count, Increment, Decrement, Reset};
};

export default useCounter;
