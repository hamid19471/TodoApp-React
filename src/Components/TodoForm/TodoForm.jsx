import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TodoForm = () => {
  return (
    <Box alignItems={"center"} display={"flex"} gap={2}>
      <TextField label='ADD TODOS HERE...' variant='filled' fullWidth />
      <Button variant='contained' sx={{ padding: "4px" }}>
        ADD TODO
      </Button>
    </Box>
  );
};

export default TodoForm;
