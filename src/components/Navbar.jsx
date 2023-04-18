import { List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [id, setId] = useState();
  const count = useSelector((state) => state.app.todos);

  return (
    <header>
      <Typography
        variant="h4"
        component="h4"
        sx={{ fontWeight: "600", mb: "10px" }}
      >
        Todo App
      </Typography>
      <List sx={{ display: "flex", background: "#eee" }} className="navbar">
        <Link to="/">
          <ListItem>create</ListItem>
        </Link>
        <Link to="/read">
          <ListItem>all post </ListItem>
        </Link>
      </List>
    </header>
  );
};

export default Navbar;
