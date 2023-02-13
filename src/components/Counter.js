import React, { useState } from "react";

function Counter() {
  const [counter, setCount] = useState(0);

  function increment() {
    setCount(counter + 1);
  }

  return <button onClick={increment}>I have been clicked {counter} times</button>;
}

export default Counter;
