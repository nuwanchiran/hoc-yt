import React from "react";
import withTodos from "../hoc/withTodos";

interface TodoListProps {
  title: string;
}

const TodoList = React.memo(
  withTodos<TodoListProps>((props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.todos &&
          props.todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
      </div>
    );
  })
);

export default TodoList;
