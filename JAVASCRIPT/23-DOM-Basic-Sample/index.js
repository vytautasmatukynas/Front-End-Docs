// DOM - Document Object Model.

// It is a programming interface for web documents.

// The DOM represents the document as a tree structure where 
// each node corresponds to an object. The root of the tree is 
// the entire document, and each node represents an element, 
// attribute, piece of text, etc.

// Log the entire document object to the console
console.log(document);

// Log the title of the document to the console
console.log(document.title);

// Log the URL of the document to the console
console.log(document.URL);

// Change the title of the document to "WEB"
document.title = "WEB";

// Change the background color of the body element to blue
document.body.style.backgroundColor = "blue";

// Find the element with the ID "ooo" and set its inner HTML to "OOOO"
document.getElementById("ooo").innerHTML = "OOOO";
