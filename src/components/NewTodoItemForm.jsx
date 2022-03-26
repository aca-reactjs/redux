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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodoItem({ text: inputValue }));

    setInputValue("");
  };

  return (
    <Paper
      sx={{
        padding: "1rem",
        width: 400,
        margin: "1rem",
      }}
      elevation={24}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Standard"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button sx={{ height: 56 }} variant="outlined">
          Click
        </Button>
      </form>
    </Paper>
  );
}
