import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ITodo from "../interfaces/todo.interface";

const Basic: FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Data fetching error", error);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default Basic;
