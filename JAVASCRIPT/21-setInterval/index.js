// This is async and won't stop execution

function repeatedFunction() {
  console.log("This function will be repeated every 3 seconds.");
}

// Using setInterval to repeatedly execute repeatedFunction every 3000 milliseconds (3 seconds)
const intervalId = setInterval(repeatedFunction, 3000);

// Stop the interval after 10 seconds (10000 milliseconds)
setTimeout(function() {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds.");
}, 10000);


function move() {
  let element = document.getElementById("movingBox");
  let position = 0;
  let direction = 1; // 1 for moving right, -1 for moving left

  // Set an interval to update the position every 10 milliseconds
  let interval = setInterval(() => {
    position += direction; // Adjust the speed by changing this value
    element.style.left = position + "px";

    // Change direction when the box reaches the edges
    if (position >= window.innerWidth - element.offsetWidth || position <= 0) {
      direction *= -1;
    }

    // Stop the movement when it reaches the starting position
    if (position === 0) {
      clearInterval(interval);
    }
  });
}

// Call the move function when the page loads
window.onload = move;