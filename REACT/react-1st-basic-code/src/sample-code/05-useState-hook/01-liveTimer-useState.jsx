import React, { useState } from "react";

const LiveTimer = () => {
    // State to hold the current time
    const now = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(now);

    // Function to get the current time as a string
    function updateTime() {
        const currentTime = new Date().toLocaleTimeString();
        setCurrentTime(currentTime);
    }

    // Update time every 1 sec with setInterval()
    setInterval(updateTime,1000);

    return (
        <div>
            <h1>{currentTime}</h1>
        </div>
    );
}

export default LiveTimer;
