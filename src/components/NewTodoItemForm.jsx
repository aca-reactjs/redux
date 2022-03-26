import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";

import { addTodoItem } from "../store/features/todo/todo";

export default function NewTodoItemForm() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoItem = () => {
    dispatch(addTodoItem({ text: inputValue }));

    setInputValue("");
  };

  return (
    <Paper
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: 400,
        margin: "1rem",
      }}
      elevation={24}
    >
      <TextField
        label="Standard"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        onClick={handleAddTodoItem}
        sx={{ height: 56 }}
        variant="outlined"
      >
        Click
      </Button>
    </Paper>
  );
}
