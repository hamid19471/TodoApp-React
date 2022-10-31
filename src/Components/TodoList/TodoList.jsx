import Box from "@mui/material/Box";
import React from "react";

const TodoList = () => {
  return (
    <Box
      bgcolor={"#f4f4f4"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      mt={5}
      borderRadius={2}
      fontSize={22}
      border={1}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        p={2}>
        TodoList
      </Box>
    </Box>
  );
};

export default TodoList;
