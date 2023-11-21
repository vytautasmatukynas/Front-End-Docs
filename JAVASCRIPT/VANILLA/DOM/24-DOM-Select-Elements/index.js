// // Find the element with the ID "ooo" and set its inner HTML to "OOOO"
// document.getElementById("header").innerHTML = "My Header h1";

// // Change <h1> color to Green
// let element = document.getElementById("header");
// element.style.color = "green";

// // Returns array of fruits
// let fruits = document.getElementsByName("fruits");

// // Get value of checked fruit
// fruits.forEach(fruit => {
//     if (fruit.checked) {
//         console.log(fruit.value);
//     }
// })

// // Returns array like object of fruits
// let number = document.getElementsByTagName("li");
// number[0].style.backgroundColor = "yellow";

// // Returns array like object of desserts
// let desserts = document.getElementsByClassName("desserts");
// desserts[2].style.backgroundColor = "yellow";

// // Can select by id, class, tag, name
// // Using querySelector to select an element with the ID "firstLi"
// // "querySelector" select only first item
// let element = document.querySelector("#firstLi");

// // Check if the element is found before attempting to modify its style
// if (element) {
//     // Changing the background color of the selected element to green
//     element.style.backgroundColor = "green";
// } else {
//     // Log an error or handle the case where the element is not found
//     console.error("Element with ID 'firstLi' not found.");
// }

// // Can select by id, class, tag, name
// // Using querySelector to select an element with the ID "firstLi"
// // "querySelectorAll" select only first item
// let elements = document.querySelectorAll("li");

// // Iterating over each selected <li> element
// elements.forEach(element => {
//     // Changing the background color of each <li> element to green
//     element.style.backgroundColor = "green";
// });
