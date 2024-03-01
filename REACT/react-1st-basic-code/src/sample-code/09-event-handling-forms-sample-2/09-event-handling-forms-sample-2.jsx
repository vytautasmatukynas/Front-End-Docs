import React, { useState } from "react";

// Define a functional component named 'EventHandlingFormsSample2'
const EventHandlingFormsSample2 = () => {
    // Declare state variables 'fullName' and 'submitted' and functions to update them
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    });
    const [submitted, setSubmitted] = useState(false);

    // Define a function 'updateName' to handle input changes
    const updateName = (event) => {
        // Destructure 'value' and 'name' from the input event target
        const { value, name } = event.target;

        // Update the 'fullName' state based on the input name
        setFullName((prevValue) => {
            if (name === "firstName") {
                return {
                    firstName: value,
                    lastName: prevValue.lastName
                };
            } else if (name === "lastName") {
                return {
                    firstName: prevValue.firstName,
                    lastName: value
                };
            }
        });
    };

    // Define a function 'handleClick' to handle the form submission
    const handleClick = () => {
        setSubmitted(true);
    };

    // Return JSX representing the component structure
    return (
        <div>
            {/* Display a heading with the values of 'fullName.firstName' and 'fullName.lastName' */}
            <h1>
                {submitted ? `Form Submitted: ${fullName.firstName} ${fullName.lastName}` : "Fill Form"}
            </h1>

            {/* Form element with two input fields and a button */}
            <form>
                {/* Input field for the first name with 'onChange' handler */}
                <input
                    value={fullName.firstName}
                    name="firstName"
                    placeholder="Enter Something Please"
                    onChange={updateName}
                />

                {/* Input field for the last name with 'onChange' handler */}
                <input
                    value={fullName.lastName}
                    name="lastName"
                    placeholder="Enter Something Please"
                    onChange={updateName}
                />

                {/* Button with 'onClick' handler */}
                <button type="button" onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EventHandlingFormsSample2;
