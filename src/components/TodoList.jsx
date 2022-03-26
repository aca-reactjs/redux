import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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

      {todoList?.length ? (
        <Paper>
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
      ) : null}
    </Paper>
  );
}
