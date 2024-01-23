import React, { useState, useEffect } from "react";

const UseEffectSample2 = () => {
    // State to track the window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Event handler to update the window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Effect hook to add event listener on component mount and remove it on unmount
    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Optional: If cleanup is needed (e.g., cancelling requests), return a cleanup function
        // Cleanup function: remove the event listener on component unmount
        return () => {
            // Cleanup logic, if applicable
            // This function will be called before the next 'useEffect' execution
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that the effect runs only on mount and unmount

    return (
        <>
            {/* Display the current window width */}
            <div>Window Width: {windowWidth}</div>
        </>
    );
}

export default UseEffectSample2;
