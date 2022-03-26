import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./store/features/todo/todo";
import NewTodoItemForm from "./components/NewTodoItemForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <NewTodoItemForm />
      <TodoList />
    </div>
  );
}

export default App;
