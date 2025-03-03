/* eslint-disable react/prop-types */
import TodoShow from "./TodoShow";

const TodoList = ({ todos, removeTodo, changeTodo }) => {
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoShow
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        changeTodo={changeTodo}
      />
    );
  });

  return (
    <ul className="w-full max-w-lg mx-auto mt-6 p-4 bg-white rounded-lg shadow-md divide-y divide-gray-200">
      {renderedTodos.length > 0 ? (
        renderedTodos
      ) : (
        <li className="text-center text-gray-500 py-4">No tasks available</li>
      )}
    </ul>
  );
};

export default TodoList;
