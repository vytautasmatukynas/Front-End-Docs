// // Example 1
// // Selects the body element, then selects the first child and sets its 
// // background color to green.
// let element1 = document.body;
// let child1 = element1.firstElementChild;
// child1.style.backgroundColor = "green";


// // Example 2
// // Selects the body element, then selects its parent (html) and sets its 
// // background color to green.
// let element2 = document.body;
// let child2 = element2.parentElement;
// child2.style.backgroundColor = "green";


// // Example 3
// // Selects the body element, then selects the second child and sets 
// // its background color to green.
// let element3 = document.body;
// let child3 = element3.children[1];
// child3.style.backgroundColor = "green";


// // Example 4
// // Selects the body element, converts its children to an array, and sets the 
// // background color of each child to green.
// let element4 = document.body;
// let childs4 = Array.from(element4.children);
// childs4.forEach(child => child.style.backgroundColor = "green");


// // Example 5
// // Selects the body element, converts its children to an array, and sets the 
// // background color of every second child to green.
// let element5 = document.body;
// let childs5 = Array.from(element5.children);
// childs5.forEach((child, index) => {
//     if (index % 2 === 1) {
//       child.style.backgroundColor = "green";
//     }
// });


// // Example 6
// // Selects the body element, converts its children to an array, and sets the 
// // background color of every second grandchild of every second child to green.
// let element6 = document.body;
// let childs6 = Array.from(element6.children);

childs6.forEach((child, index) => {
  // Check if the index is odd (every second child)
  if (index % 2 === 1) {
    let grandchildren = Array.from(child.children);

    grandchildren.forEach((grandchild, grandchildIndex) => {
      // Check if the grandchild index is odd (every second grandchild)
      if (grandchildIndex % 2 === 1) {
        grandchild.style.backgroundColor = "green";
      }
    });
  }
});


// // Example 7
// // Selects the element with id 'firstLi', then selects its parent and sets its 
// // background color to green.
// let element7 = document.querySelector("#firstLi");
// let child7 = element7.parentElement;
// child7.style.backgroundColor = "green";

