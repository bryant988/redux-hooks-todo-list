import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompleteAll from './components/CompleteAll';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App-header">
        <h1>Todos</h1>
        <TodoInput />
        <TodoList />
        <CompleteAll />
      </div>
    </div>
  </Provider>
);

export default App;
