/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };
  
  return (
    <div className="w-full max-w-lg mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a todo"
          value={title}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoCreate;
