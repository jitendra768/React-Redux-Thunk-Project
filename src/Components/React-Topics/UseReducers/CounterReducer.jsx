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
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
        {/* Counter Display */}
        <p className="text-6xl font-bold text-gray-900 mb-8">{state.count}</p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* INCREMENT Button */}
          <button
            type="button"
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="px-8 py-3 rounded-xl text-white text-lg font-medium tracking-wide bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            INCREMENT
          </button>

          {/* DECREMENT Button */}
          <button
            type="button"
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="px-8 py-3 rounded-xl text-white text-lg font-medium tracking-wide bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            DECREMENT
          </button>

          {/* RESET Button */}
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
            className="px-8 py-3 rounded-xl text-white text-lg font-medium tracking-wide bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterReducer;
