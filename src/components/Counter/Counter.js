import React from "react";
import { useCounter } from ".././hooks/useCounter";

export const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Counter;
