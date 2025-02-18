/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from "react";

const PureFunction = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MyComponent name="John" />
    </>
  );
};

export default PureFunction;

const MyComponent = React.memo(({ name }) => {
  console.log("Rendered");
  return <h1>{name}</h1>;
});
