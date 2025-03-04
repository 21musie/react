import React, { useState } from "react";
import "./../public/styles.css";

function App() {
  // State for step increments/decrements
  const [steps, setSteps] = useState(1);
  
  // State for tracking the counter value (days)
  const [counter, setCounter] = useState(0);

  // Calculate the future (or past) date based on counter value
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + counter);

  // Increase the step value (minimum step is 1)
  function upSteps() {
    setSteps((currStep) => currStep + 1);
  }

  // Decrease the step value, ensuring it doesn't go below 1
  function downSteps() {
    steps > 1 && setSteps((currStep) => currStep - 1);
  }

  // Increment the counter by the current step value
  function upCounter() {
    setCounter((currCount) => currCount + 1 * steps);
  }

  // Decrement the counter by the current step value
  function downCounter() {
    setCounter((currCount) => currCount - 1 * steps);
  }

  return (
    <>
      {/* App Title */}
      <h1>Date Counter App</h1>
      <h2>This app calculates a date based on a step-wise counter</h2>

      {/* Step Adjustment Controls */}
      <div style={{ display: "flex", margin: 10 }}>
        <button onClick={downSteps}>-</button>
        <p>Steps: {steps}</p>
        <button onClick={upSteps}>+</button>
      </div>

      {/* Counter Adjustment Controls */}
      <div style={{ display: "flex", margin: 10 }}>
        <button onClick={downCounter}>-</button>
        <p>Counter: {counter} </p>
        <button onClick={upCounter}>+</button>
      </div>

      {/* Displaying the calculated date based on counter */}
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
