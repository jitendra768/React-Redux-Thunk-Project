/* eslint-disable react/prop-types */
import { useState } from "react";

const ChildComponents = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your name"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChildComponents;
