import React, { useState } from "react";

// Define a functional component named 'EventHandlingSample'
const EventHandlingSample = () => {
    // Declare state variables 'heading', 'count', and 'isHover' and functions to update them
    const [heading, setHeading] = useState("Hello");
    const [count, setCount] = useState(0);
    const [isHover, setHover] = useState(false);

    // Define a function 'clickCounter' to handle button clicks
    const clickCounter = () => {
        // Use the updated count from the setCount function
        setCount((prevCount) => prevCount + 1);
        setHeading(`Clicked ${count} time`);
    };

    // Define a function 'onMouseOver' to handle mouse over events
    const onMouseOver = () => {
        setHeading("Please click Me");
        setHover(true);
    };

    // Define a function 'onMouseOut' to handle mouse out events
    const onMouseOut = () => {
        // Reset count and heading, and update isHover state
        setCount(0);
        setHeading("Hello");
        setHover(false);
    };

    // Return JSX representing the component structure
    return (
        <div>
            {/* Display a heading with the value of 'heading' state */}
            <h1>{heading}</h1>

            {/* Input field for entering a value */}
            <input type="text" placeholder="Enter Something Please" />

            {/* Button with inline style based on the 'isHover' state and event handlers */}
            <button
                style={{ backgroundColor: isHover ? "blue" : "red" }}
                onClick={clickCounter}
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
            >
                Submit
            </button>
        </div>
    );
};


export default EventHandlingSample;



