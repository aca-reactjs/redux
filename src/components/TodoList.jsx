import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import store from "../store";
import { getTodoItems } from "../store/features/todo/todo";

export default function TodoList() {
  const todoList = useSelector((state) => getTodoItems(state));

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
      <Typography variant="h5" component="h3">
        To Do List
      </Typography>
      <List>
        {todoList.map((item, idx) => {
          return (
            <ListItem key={idx}>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
