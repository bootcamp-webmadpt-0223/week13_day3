import React, { useState } from "react";

// hooks

function Counter() {
  // const state = useState(0);
  const [counter, setCounter] = useState(() => 0);
  console.log("render counter!");
  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {counter} times</p>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
