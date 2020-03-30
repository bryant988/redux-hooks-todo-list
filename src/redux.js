import { createStore } from 'redux';

let nextTodoId = 0;

const initialState = {
  todos: [
    {
      id: ++nextTodoId,
      text: 'Do laundry',
      done: false,
    },
    {
      id: ++nextTodoId,
      text: 'Email boss',
      done: false,
    },
    {
      id: ++nextTodoId,
      text: 'Go to gym',
      done: false,
    },
  ]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === payload) ? { ...todo, done: !todo.done } : todo)
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case 'COMPLETE_ALL':
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, done: true }))
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addTodoAction = (todoName) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTodoId,
    text: todoName,
    done: false
  }
});

export const toggleTodoAction = (todoId) => ({
  type: 'TOGGLE_TODO',
  payload: todoId
});

export const deleteTodoAction = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId
});

export const completeAllAction = () => ({
  type: 'COMPLETE_ALL'
});