/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={handleChange} 
        className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        className="p-2 rounded-lg bg-green-500 hover:bg-green-600 transition text-white">
        <CheckIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

export default TodoEdit;
