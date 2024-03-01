import React from 'react';

// Import specific icons from the '@mui/icons-material' package
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

// Import another icon from the '@mui/icons-material' package
import DeleteIcon from '@mui/icons-material/Delete';

// Define a functional component named 'MaterialUiSample'
const MaterialUiSample = () => {
    // Return JSX representing the component structure
    return (
        <div>
            {/* Render the 'AccessAlarm' icon from '@mui/icons-material' */}
            <AccessAlarm />

            {/* Render the 'ThreeDRotation' icon from '@mui/icons-material' */}
            <ThreeDRotation />

            {/* Render the 'DeleteIcon' from '@mui/icons-material' */}
            <DeleteIcon />
        </div>
    );
}

export default MaterialUiSample;
