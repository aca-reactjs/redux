import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import store from "../store";
import { deleteTodoItem, getTodoItems } from "../store/features/todo/todo";

export default function TodoList() {
  const todoList = useSelector((state) => getTodoItems(state));

  const dispatch = useDispatch();

  const handleItemDelete = (id) => () => {
    dispatch(deleteTodoItem({ id }));
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
      <Typography variant="h5" component="h3">
        To Do List
      </Typography>

      {todoList?.length ? (
        <Paper>
          <List>
            {todoList.map(({ text, id }) => {
              return (
                <ListItem
                  key={id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={handleItemDelete(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      ) : null}
    </Paper>
  );
}
