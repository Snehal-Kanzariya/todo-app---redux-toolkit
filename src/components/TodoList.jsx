import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../apis/TodoSlice";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todos = ", todo);
    dispatch(createTodo({ todo: todo }));
    navigate("/read");
  };
  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        Create Todo
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%", mx: "auto", mt: "5%", mb: "2%", display: "flex" }}
          label="Add Todo"
          variant="standard"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="info"
          sx={{ mx: "auto", display: "flex" }}
        >
          Create Todo
        </Button>
      </form>
    </>
  );
};

export default TodoList;
