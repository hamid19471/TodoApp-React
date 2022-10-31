import React from "react";
import Grid from "@mui/material/Grid";
import TodoForm from "../TodoForm/TodoForm";
import { Typography } from "@mui/material";

const TodoApp = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      flexDirection={"column"}>
      <Typography variant='h1' mb={5}>
        Todo-pplication
        <Typography textAlign={"center"} borderTop={1} pt={1}>
          APP FOR MANAGE YOU WORK AND TASKS{" "}
        </Typography>
      </Typography>
      <TodoForm />
    </Grid>
  );
};

export default TodoApp;
