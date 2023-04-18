import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createTodo = createAsyncThunk("createTodo", async (todo) => {
  const responce = await fetch(
    "https://643db8946c30feced818c889.mockapi.io/todos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );
  try {
    const result = responce.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const readTodos = createAsyncThunk("readTodos", async () => {
  const responce = await fetch(
    "https://643db8946c30feced818c889.mockapi.io/todos"
  );
  try {
    const result = responce.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {
  const responce = await fetch(
    `https://643db8946c30feced818c889.mockapi.io/todos/${id}`,
    { method: "DELETE" }
  );
  try {
    const result = responce.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const updateTodoData = createAsyncThunk("updateTodo", async (todo) => {
  console.log("updated data = ", todo);
  const responce = await fetch(
    `https://643db8946c30feced818c889.mockapi.io/todos/${todo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );
  try {
    const result = responce.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const todoDetail = createSlice({
  name: "todoDetail",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [createTodo.pending]: (state) => {
      state.loading = true;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    [createTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [readTodos.pending]: (state) => {
      state.loading = true;
    },
    [readTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    [readTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateTodoData.pending]: (state) => {
      state.loading = true;
    },
    [updateTodoData.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    [updateTodoData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteTodo.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.todos = state.todos.filter((item) => item.id !== id);
      }
      console.log("delete = ", action.payload);
    },
    [deleteTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default todoDetail.reducer;
