import React from "react";
import Typography from "@mui/material/Typography";
import SingleTodo from "../SingleTodo/SingleTodo";

const TodoList = ({ todos, onComplete }) => {
  if (todos.length === 0) return <Typography>Add Some Todo</Typography>;
  return (
    <>
      {todos.map((item) => (
        <SingleTodo
          todo={item}
          key={item.id}
          onComplete={() => onComplete(item.id)}
        />
      ))}
    </>
  );
};

export default TodoList;
