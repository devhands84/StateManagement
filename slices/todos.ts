import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const inittialState: Todo[] = [
  {id: 1, text: 'learn react native', done: true},
  {id: 2, text: 'learn state change', done: false},
];

let nextId = 3;
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
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index);
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