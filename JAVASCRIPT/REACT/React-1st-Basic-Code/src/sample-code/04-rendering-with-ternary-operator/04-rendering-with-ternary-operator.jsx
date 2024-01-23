import React from "react";

// Initial values
let isLoggedIn = true;
let username = "1";

// React functional component
const LogInPlease = () => {
    // Conditionally set text based on the value of isLoggedIn
    let text = isLoggedIn ? "You are logged in" : "Please login";

    // Conditionally set textWithUser based on isLoggedIn and username
    let textWithUser = (isLoggedIn && username === "jonas") ? "You are logged in" : "Please login";
    
    // Using the logical AND operator to conditionally set textWithUser
    // If false, then result is null
    let textWithUser2 = isLoggedIn && "You are logged in";

    return (
        <div>
            <h1>{text}</h1>
            <h1>{textWithUser}</h1>
            <h1>{textWithUser2}</h1>
        </div>
    );
}

// Export the component for use in other parts of the application
export default LogInPlease;
