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

  useEffect(()=>{
   refFocus.current.focus();
  },[])
  return (
    <div>
      <h1>Useref Hook</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divRefrence} className="hello">
        Hello world
      </div>
      <input className="px-4 py-3 bg-gray-600 w-full text-sm outline-none border-b-2 border-blue-500 rounded" ref={refFocus} type="text" placeholder="enter something"/>
      <br/>
    </div>
  );
};

export default UseRefhooks;
