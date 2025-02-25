import React, { useEffect, useReducer, useMemo } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Container, Typography, Paper, List } from "@mui/material";

// Khởi tạo danh sách công việc từ localStorage
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

// Reducer quản lý danh sách công việc
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // Lưu danh sách công việc vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Hàm thêm công việc
  const addTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  // Hàm đổi trạng thái hoàn thành
  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  // Hàm xóa công việc
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  // Sử dụng useMemo để tối ưu danh sách lọc
  const completedTodos = useMemo(() => todos.filter(todo => todo.completed), [todos]);
  const uncompletedTodos = useMemo(() => todos.filter(todo => !todo.completed), [todos]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>

        {/* Form thêm công việc */}
        <TodoForm addTodo={addTodo} />

        {/* Danh sách công việc chưa hoàn thành */}
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Chưa hoàn thành
        </Typography>
        <List>
          {uncompletedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </List>

        {/* Danh sách công việc đã hoàn thành */}
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Đã hoàn thành
        </Typography>
        <List>
          {completedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TodoApp;
