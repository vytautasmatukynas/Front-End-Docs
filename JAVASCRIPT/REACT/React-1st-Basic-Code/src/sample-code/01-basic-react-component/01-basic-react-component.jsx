// Import React library
import React from "react";

// Import the stylesheet for this component
import "./01-basic-react-component-style.css";

// Define a functional component called HeaderText
const HeaderText = () => {
  // Define a constant variable TEXT with the value "THIS IS MY HEADER"
  const TEXT = "THIS IS MY HEADER";

  // Return JSX to render in the component
  return (
    <div>
      <header>{TEXT}</header>
    </div>
  );
};

// Define a functional component called SomeExpression
const SomeExpression = () => {
  // Define constant variables NAME and DATE with values "Jonas" and the current year
  const NAME = "Jonas";
  const DATE = new Date().getFullYear();

  // Return JSX to render in the component
  return (
    <div>
      <p>{NAME}</p>
      <p id="p1">Hello {NAME}</p>
      <p className="p2">Hello {`${NAME} it's ${DATE}`}</p>
      <footer>Copyright {DATE}</footer>
    </div>
  );
};

// Define a functional component called SampleAppTime
const SampleAppTime = () => {
  // Get the current hours using the Date object
  const hours = new Date().getHours();

  // Define a function checkTime that returns a greeting based on the current hours
  const checkTime = (hours) => {
    let text;

    if (4 <= hours && hours <= 10) {
      text = "Labas Rytas";
    } else if (10 < hours && hours <= 16) {
      text = "Laba Diena";
    } else {
      text = "Labas Vakaras";
    }

    return text;
  };

  // Call the checkTime function to get the greeting text
  const greetingText = checkTime(hours);

  // Return JSX to render in the component
  return (
    <h1>{hours}val. - {greetingText}</h1>
  );
};

// Export the HeaderText component as the default export
export default HeaderText;

// Export the SampleAppTime and SomeExpression components as named exports
export { SampleAppTime, SomeExpression };
