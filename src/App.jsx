import Paper from "@mui/material/Paper";

import NewTodoItemForm from "./components/NewTodoItemForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Paper
      sx={{
        display: "flex",
        border: "none",
        boxShadow: "none",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <NewTodoItemForm />
      <TodoList />
    </Paper>
  );
}

export default App;
