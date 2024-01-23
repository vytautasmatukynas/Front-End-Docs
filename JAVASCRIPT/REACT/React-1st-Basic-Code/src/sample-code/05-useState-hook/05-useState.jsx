import React, { useState } from "react";
import("./05-useState.css");

// Functional component using React Hooks (useState)
const UseStateSample = () => {
    // Declare state variable 'count' and functions to update it
    const [count, setCount] = useState(0);
    // Declare state variable 'color' and functions to update it
    const [color, setColor] = useState("black");
    // Declare state variable 'backgroundColor' and functions to update it
    const [backgroundColor, setBackgroundColor] = useState("purple");
  
    // Button click handler to increment 'count' and update colors
    const handleIncrement = () => {
      setCount(count + 1);
  
      // Update color and background color based on the value of 'count'
      if (count + 1 > 10) {
        setColor("green");
        setBackgroundColor("red");
      } else {
        setColor("black");
        setBackgroundColor("purple");
      }
    };
  
    // Button click handler to decrement 'count' and update colors
    const handleDecrement = () => {
      setCount(count - 1);
  
      // Update color and background color based on the value of 'count'
      if (count - 1 > 10) {
        setColor("green");
        setBackgroundColor("red");
      } else {
        setColor("black");
        setBackgroundColor("purple");
      }
    };
  
    return (
      <div>
        {/* Display the current value of the 'count' state with dynamic color and background */}
        <h1 style={{ color, backgroundColor }}>{count}</h1>
  
        <div className="buttonCountContainer">
          {/* Button to increment 'count' when clicked */}
          <button className="buttonCount" onClick={handleIncrement}>+</button>
  
          {/* Button to decrement 'count' when clicked */}
          <button className="buttonCount" onClick={handleDecrement}>-</button>
        </div>
      </div>
    );
  };
  
  export default UseStateSample;
  
