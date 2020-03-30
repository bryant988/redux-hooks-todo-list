import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { completeAllAction } from '../redux';

const CompleteAll = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(
    () => dispatch(completeAllAction()),
    [dispatch]
  );

  return (
    <button onClick={onClick}>Complete All</button>
  );
}

export default CompleteAll;