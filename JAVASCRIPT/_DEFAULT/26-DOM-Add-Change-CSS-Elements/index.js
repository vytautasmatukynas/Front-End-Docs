// Create a new h1 element
const nameTag = document.createElement("h1");

// Prompt the user to enter something and set the text content of the h1 element
nameTag.textContent = window.prompt("Enter something:");

// Add a class to the h1 element
nameTag.classList.add("my-heading");

// Change CSS using DOM for the h1 element
nameTag.style.color = "#333"; // Change text color

// Append the h1 element to the body of the document
document.body.append(nameTag);

// Find the element with the ID "firstLi" and assign it to the variable myList
const myList = document.querySelector("#firstLi");

// Create a new li element
const listItem = document.createElement("li");

// Prompt the user to enter something and set the text content of the li element
listItem.textContent = window.prompt("Enter something:");

// Add a class to the li element
listItem.classList.add("my-list-item");

// Change CSS using DOM for the li element
listItem.style.listStyleType = "none"; // Remove the bullet point
listItem.style.marginBottom = "10px";
listItem.style.padding = "5px";
listItem.style.backgroundColor = "#fff";
listItem.style.border = "1px solid #ccc";

// Append the li element to the myList
myList.append(listItem);

// Prepend the li element to the myList
myList.prepend(listItem);

// Insert the li element before the second li element in myList
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
