// Import the React library
import React from "react";

// Import the Avatar component from "./02-image-component"
import Avatar from "./02-image-component";

// Import the Contacts component from "./02-contact-component"
import Contacts from "./02-contact-component";

// Import the CSS file for styling
import "./02-react-component-properties-PROPS.css";

// Define a functional component called Card
const Card = (props) => {
    // Return JSX to render a card with contact information
    return (
        <div className="contacts">
            {/* Header with the title "My Contacts" */}
            <h2>My Contacts</h2>

            {/* Avatar component displaying the image passed through props */}
            <Avatar image={props.image} />

            {/* Displaying the contact name and phone number passed through props */}
            <Contacts
                name={props.name}
                phone={props.phone}
            />
        </div>
    );
};

// Export the Card component as the default export
export default Card;
