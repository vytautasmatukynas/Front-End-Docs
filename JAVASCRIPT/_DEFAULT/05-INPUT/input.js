// Prompt the user for input and store it in the variable 'usernameFirst'
let usernameFirst = window.prompt("What's your name");
console.log(usernameFirst);

// Declare a variable 'usernameSecond' without assigning a value
let usernameSecond;
// Set up an event handler for the button with the id "myButton"
document.getElementById("myButton").onclick = function() {
    // Retrieve the value from the input field with the id "myText" and assign it to 'usernameSecond'
    usernameSecond = document.getElementById("myText").value;

    // Update the content of the element with the id "myUsername" to display the value of 'usernameSecond'
    document.getElementById("myUsername").innerHTML = usernameSecond;
}
