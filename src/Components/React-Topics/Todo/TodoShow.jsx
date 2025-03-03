/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import TodoEdit from './TodoEdit';

const TodoShow = ({ todo, removeTodo, changeTodo }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDoubleClick = () => {
    changeTodo(todo.id, todo.title, !todo.completed);
  };

  const handleSubmit = (id, title) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  if (showEdit) {
    return (
      <li className="p-4 bg-gray-100 rounded-lg shadow-md">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }

  return (
    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition" onDoubleClick={handleDoubleClick}>
      <p className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>{todo.title}</p>

      <div className="flex gap-2">
        <button onClick={handleDelete} className="p-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white">
          <TrashIcon className="h-5 w-5" />
        </button>
        <button onClick={handleEdit} className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white">
          <PencilSquareIcon className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

export default TodoShow;
