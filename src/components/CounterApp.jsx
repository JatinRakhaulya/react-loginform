import React, { useState } from "react";


const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br />
      <hr />
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <br />
      <hr />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div >
  );
};

export default CounterApp;
