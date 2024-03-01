import React, { useState } from "react";

// Define a functional component named 'EventHandlingSampleForms'
const EventHandlingFormsSample = () => {
    // Declare state variables 'name' and 'heading' and functions to update them
    const [name, setName] = useState("");
    const [heading, setHeading] = useState("");

    // Define a function 'handleChange' to handle input changes
    const handleChange = (event) => {
        // Log the entered value, placeholder, and input type to the console
        console.log(event.target.value);
        console.log(event.target.placeholder);
        console.log(event.target.type);

        // Update the 'name' state with the entered value
        setName(event.target.value);
    }

    // Define a function 'handleClick' to handle form submission
    const handleClick = (event) => {
        // Update the 'heading' state with the 'name' value
        setHeading(name);

        // Prevent the default form submission behavior to avoid a page refresh
        event.preventDefault();
    }

    // Return JSX representing the component structure
    return (
        <div>
            {/* Display a heading with the value of 'heading' state */}
            <h1>Hello {heading}</h1>

            {/* Form element with an 'onSubmit' handler pointing to 'handleClick' */}
            <form onSubmit={handleClick}>
                {/* Input field with 'onChange' handler pointing to 'handleChange' */}
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Something Please"
                    value={name}  // Bind the input value to the 'name' state
                />

                {/* Button with 'type="submit"' triggering the form submission */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default EventHandlingFormsSample;


