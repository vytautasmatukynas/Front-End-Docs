// Import the React library
import React from "react";

// Define a functional component called Avatar
const Avatar = (props) => {
    // Return JSX to render an image with the specified class and source (image URL)
    return (
        <img className="defaultImg" src={props.image} alt="" />
    );
};

// Export the Avatar component as the default export
export default Avatar;
