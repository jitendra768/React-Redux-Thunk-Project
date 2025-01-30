// A useReducer is a hook in React that allows you add a reducer to your component.
// It takes in the reducer function and an initialState as arguments.
// The useReducer also returns an array of the current state and a dispatch function.

// const [state, dispatch] = useReducer(reducer, initialState);

// state: represents the current value and is set to the initialState value during the initial render.
// dispatch: is a function that updates the state value and always triggers a re-render, just like the updater function in useState.
// reducer: is a function that houses all the logic of how the state gets updated. It takes state and action as arguments and returns the next state.
// initialState: houses the initial value and can be of any type.

import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
      >
        INCREMENT
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-sky-600 hover:bg-sky-700"
      >
        DECREMENT
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "RESET" })}
        className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-red-600 hover:bg-red-700"
      >
        RESET
      </button>
    </>
  );
};

export default CounterReducer;
