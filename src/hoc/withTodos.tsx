import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ITodo from "../interfaces/todo.interface";

interface WithTodosProps {
  todos?: ITodo[];
}

const withTodos = <T,>(
  Component: FunctionComponent<T & WithTodosProps>
): FunctionComponent<T & WithTodosProps> => {
  return (props: T) => {
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
    return <Component todos={todos} {...props} />;
  };
};

export default withTodos;
