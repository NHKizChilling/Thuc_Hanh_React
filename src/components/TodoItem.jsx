import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListItem
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        background: "#000",
        color : "#fff",
        borderRadius: "5px",
        margin: "5px 0",
      }}
    >
      <ListItemText primary={todo.text} onClick={() => toggleComplete(todo.id)} />
      <IconButton onClick={() => toggleComplete(todo.id)} color="success">
        <CheckCircleIcon />
      </IconButton>
      <IconButton onClick={() => deleteTodo(todo.id)} color="error">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
