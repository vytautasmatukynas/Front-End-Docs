// Import the React library
import React from "react";

// Define a functional component called Contacts
const Contacts = (props) => {
    // Return JSX to render contact information
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Phone: {props.phone}</h3>
        </div>
    );
};

// Export the Contacts component as the default export
export default Contacts;