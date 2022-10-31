import { Grid, Typography } from "@mui/material";
import TodoForm from "./Components/TodoForm/TodoForm";
function App() {
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
      <TodoForm /> {/* FormComponent importe */}
    </Grid>
  );
}

export default App;
