import React, { useState } from "react";
import "./../public/styles.css";

function App() {
  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(0);

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + counter);

  function upSteps() {
    setSteps((currStep) => currStep + 1);
  }
  function downSteps() {
    steps > 1 && setSteps((currStep) => currStep - 1);
  }
  function upCounter() {
    setCounter((currCount) => currCount + 1 * steps);
  }
  function downCounter() {
    setCounter((currCount) => currCount - 1 * steps);
  }
  return (
    <>
      <h1>Date Counter App</h1>
      <h2>this app counts a date using specified steps</h2>
      <div style={{ display: "flex", margin: 10 }}>
        <button onClick={downSteps}>-</button>
        <p>Steps: {steps}</p>
        <button onClick={upSteps}>+</button>
      </div>

      <div style={{ display: "flex", margin: 10 }}>
        <button onClick={downCounter}>-</button>
        <p>Counter: {counter} </p>
        <button className onClick={upCounter}>
          +
        </button>
      </div>

      <p className="date-display">
        {counter === 0
          ? `Today is: ${futureDate.toDateString()}`
          : counter > 0
          ? `${counter} days from today is: ${futureDate.toDateString()}`
          : `${Math.abs(counter)} days ago was: ${futureDate.toDateString()}`}
      </p>
    </>
  );
}

export default App;
