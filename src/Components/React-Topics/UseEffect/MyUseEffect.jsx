import { useEffect, useState } from "react";

// useEffect is a powerful React hook used for handling side effects in functional components.
// It runs after the component renders and can be used in different scenarios.
// Without dependencies (useEffect(() => {...})) → Runs after every render.
// With an empty array (useEffect(() => {...}, [])) → Runs only once on mount.
// With dependencies (useEffect(() => {...}, [dep])) → Runs when dep changes.
// Cleanup function (return () => {...}) → Runs before unmount or before re-running the effect.

const MyUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is called");
  });
  useEffect(() => {
    console.log("useEffect is called second");
  }, []);

  useEffect(() => {
    console.log("useEffect is called third");
  }, [count]);
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-2xl bg-red-600 px-4 py-2 font-bold leading-none text-white"
          >
            Increment
          </button>
          <span>{count}</span>
          <button className="rounded-2xl bg-red-600 px-4 py-2 font-bold leading-none text-white">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUseEffect;
