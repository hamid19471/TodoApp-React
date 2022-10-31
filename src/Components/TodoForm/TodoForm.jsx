import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const onChangeHandler = (event) => {
    setTodo(event.target.value);
    console.log(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      gap={2}
      component='form'
      onSubmit={onSubmitHandler}>
      <TextField
        label='ADD TODOS HERE...'
        variant='filled'
        value={todo}
        onChange={onChangeHandler}
        fullWidth
      />
      <Button variant='contained' sx={{ padding: "4px" }} type={"submit"}>
        ADD TODO
      </Button>
    </Box>
  );
};

export default TodoForm;
