import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./SingleTodo.style.css";
const SingleTodo = ({ todo, onComplete }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={2}
      bgcolor={"#e9e9e9"}
      p={2}
      borderRadius={2}>
      <Box>
        <Typography variant='h5' className={todo.isComplete ? "complete" : ""}>
          {todo.title}
        </Typography>
      </Box>
      <Box display={"flex"} gap={1}>
        <Button variant='contained' onClick={onComplete}>
          COMPLETE
        </Button>
        <Button variant='contained'>EDITE</Button>
      </Box>
    </Box>
  );
};

export default SingleTodo;
