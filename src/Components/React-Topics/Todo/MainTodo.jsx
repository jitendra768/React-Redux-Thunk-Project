import { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    const updatedTodo = [...todos, newTodo];
    setTodos(updatedTodo);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeTodo = (id, title, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <main className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">React Todo</h1>
        <p className="text-gray-500 mb-4">
          Streamline Your Day, the React Way!
        </p>
        <TodoCreate createTodo={createTodo} />
        <TodoList
          removeTodo={removeTodo}
          changeTodo={changeTodo}
          todos={todos}
        />
      </main>
    </div>
  );
};

export default MainTodo;
