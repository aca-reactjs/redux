import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItem: (state, { payload }) => {
      const newItem = {
        ...payload,
        id: nanoid(),
      };

      state.items.push(newItem);
    },
  },
});

export default reducer;

export const { addTodoItem } = actions;

export const getTodoItems = (state) => state.todo.items;
