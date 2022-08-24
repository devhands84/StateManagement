import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const inittialState: Todo[] = [];

let nextId = 1;
const todoSlice = createSlice({
  name: 'todos',
  initialState: inittialState,
  reducers: {
    add: {
      prepare(text: string) {
        const prepared = {payload: {id: nextId, text}};
        nextId += 1;
        return prepared;
      },
      reducer(state, action: PayloadAction<{id: number; text: string}>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggle(state, action: PayloadAction<number>) {
      const selected = state.find(todo => todo.id === action.payload);
      if (!selected) {
        return;
      }
      selected.done = !selected.done;
    },
  },
});

export const {add, remove, toggle} = todoSlice.actions;
export default todoSlice.reducer;
