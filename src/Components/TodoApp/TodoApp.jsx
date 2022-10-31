import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: todo,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodoHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.isComplete = !selectTodo.isComplete;
    const updateTodo = [...todos];
    updateTodo[index] = selectTodo;
    setTodos(updateTodo);
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      flexDirection={"column"}>
      <Typography variant='h1' mb={5}>
        Todo-application
        <Typography textAlign={"center"} borderTop={1} pt={1}>
          APP FOR MANAGE YOU WORK AND TASKS{" "}
        </Typography>
      </Typography>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodoHandler} />
    </Grid>
  );
};

export default TodoApp;
