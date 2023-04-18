import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodoData } from "../apis/TodoSlice";

const Update = () => {
  const [updateTodo, setUpdateTodo] = useState();
  const { id } = useParams();
  const getTodo = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const singleTodo = getTodo?.filter((item) => item.id === id);
      setUpdateTodo(singleTodo[0]);
    }
  }, []);
  console.log(updateTodo);

  const newData = (e) => {
    setUpdateTodo({ ...updateTodo, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodoData(updateTodo));
    navigate("/read");
  };

  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        Update Todo
      </Typography>
      <form onSubmit={handleUpdate}>
        <TextField
          sx={{ width: "50%", mx: "auto", mt: "5%", mb: "2%", display: "flex" }}
          label="Update Todo"
          variant="standard"
          name="todo"
          value={updateTodo && updateTodo.todo}
          onChange={newData}
        />
        <Button
          type="submit"
          variant="contained"
          color="info"
          sx={{ mx: "auto", display: "flex" }}
        >
          Update Todo
        </Button>
      </form>
    </>
  );
};

export default Update;
