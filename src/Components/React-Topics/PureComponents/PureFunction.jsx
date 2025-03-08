/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState } from "react";
import UserProfile from "./UserProfile";

const PureFunction = () => {
  const [name] = useState("John Doe");
  const [age] = useState(25);
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <UserProfile name={name} age={age} />
      <button onClick={incrementCounter}>Increment Counter: {counter}</button>
    </div>
  );
};

export default PureFunction;
