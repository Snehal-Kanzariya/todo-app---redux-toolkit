import React from "react";
import TodoList from "./components/TodoList";
import { Typography } from "@mui/material";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <TodoList />
      </>
    ),
  },
  {
    path: "read",
    element: (
      <>
        <Navbar />
        <Read />
      </>
    ),
  },
  {
    path: "update/:id",
    element: (
      <>
        <Navbar />
        <Update />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
