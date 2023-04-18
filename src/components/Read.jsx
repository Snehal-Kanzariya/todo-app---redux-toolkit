import {
  Button,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, readTodos } from "../apis/TodoSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const { todos, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(readTodos());
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        All Todos
      </Typography>
      <List sx={{ width: "50%", mx: "auto" }}>
        {todos &&
          todos?.map((item) => (
            <ListItem
              key={item.id}
              className="list"
              sx={{
                border: "1px solid #ccc",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{item.todo}</div>
              <div>
                <Link to={`/update/${item.id}`}>
                  <Button variant="contained" color="info">
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => dispatch(deleteTodo(item.id))}
                  variant="contained"
                  color="error"
                  sx={{ ml: "10px" }}
                >
                  Delete
                </Button>
              </div>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default Read;
