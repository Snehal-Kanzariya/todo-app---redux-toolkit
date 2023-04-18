import { configureStore } from "@reduxjs/toolkit";
import todoDetail from "../apis/TodoSlice";

export const store = configureStore({
  reducer: {
    app: todoDetail,
  },
});
