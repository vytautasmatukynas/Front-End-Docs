// Event handler for a button click
document.getElementById("myButton").onclick = function () {
    // Check if the checkbox with id "myCheckBox" is checked
    if (document.getElementById("myCheckBox").checked) {
        // If checked, set the content of the element with id "someText" to "Checked"
        document.getElementById("someText").innerHTML = "Checked";
    } else {
        // If unchecked, set the content of the element with id "someText" to "Unchecked"
        document.getElementById("someText").innerHTML = "Unchecked";
    }
}
