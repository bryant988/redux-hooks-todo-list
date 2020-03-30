import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const checkboxId = `${todo.id}_id`;

  const onCheckboxToggle = useCallback(
    () => dispatch(toggleTodoAction(todo.id)),
    [dispatch, todo.id]
  );

  const onDelete = useCallback(
    () => dispatch(deleteTodoAction(todo.id)),
    [dispatch, todo.id]
  );

  return (
    <div className="Todo">
      <input id={checkboxId} type={'checkbox'} checked={todo.done} onChange={onCheckboxToggle} />
      <label htmlFor={checkboxId} className="Todo-text">{todo.text}</label>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoListItem;