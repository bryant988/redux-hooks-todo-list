import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="Todo-container">
      {todos && todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;