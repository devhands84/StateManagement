import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import {configureStore} from '@reduxjs/toolkit';
function App() {
  const store = configureStore({reducer: rootReducer});
  return <Provider store={store}>{<TodoApp />}</Provider>;
}

export default App;
