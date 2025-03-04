import React, { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <TextField
        inputRef={inputRef}
        label="Nhập công việc..."
        variant="outlined"
        size="small"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Thêm
      </Button>
    </form>
  );
};

export default TodoForm;
