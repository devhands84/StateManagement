import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './slices';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
const store = createStore(rootReducer);

function App() {
  return <Provider store={store}>{<TodoApp />}</Provider>;
}

export default App;