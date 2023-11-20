// Current date and time
const currentDate = new Date();
console.log(currentDate);

// Creating a Date object:
// Specific date and time (year, month (0-11), day, hour, minute, second, millisecond)
const specificDate = new Date(2023, 0, 15, 12, 30, 0, 0);
console.log(specificDate);

// Getting various components of a date:
// Get individual components
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-11 (January is 0)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();

console.log(`Current date: ${year}-${month + 1}-${day}`);
console.log(`Current time: ${hours}:${minutes}:${seconds}`);

// Formatting a date:
// Add 3 days to the current date
currentDate.setDate(currentDate.getDate() + 3);
console.log(`Date after adding 3 days: ${currentDate}`);

// Manipulating dates:
// Subtract 1 month from the current date
currentDate.setMonth(currentDate.getMonth() - 1);
console.log(`Date after subtracting 1 month: ${currentDate}`);

// Date comparison:
if (date1 < date2) {
  console.log("date1 is earlier than date2");
} else if (date1 > date2) {
  console.log("date1 is later than date2");
} else {
  console.log("Both dates are equal");
}