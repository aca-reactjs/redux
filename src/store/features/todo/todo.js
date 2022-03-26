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

    deleteTodoItem: (state, { payload }) => {
      const newItems = state.items.filter((item) => item.id !== payload.id);

      state.items = newItems;
    },
  },
});

export default reducer;

export const { addTodoItem, deleteTodoItem } = actions;

export const getTodoItems = (state) => state.todo.items;
