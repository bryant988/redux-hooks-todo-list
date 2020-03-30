import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onChange = (event) => {
    setTodo(event.target.value);
  }

  const onKeyPress = (event) => {
    if (todo.trim() && event.key === 'Enter') {
      // add new todo item
      dispatch(addTodoAction(todo));

      // reset input field
      setTodo('');
    }
  };

  return (
    <input className="TodoInput" value={todo} onChange={onChange} onKeyPress={onKeyPress} />
  );
}

export default TodoInput;