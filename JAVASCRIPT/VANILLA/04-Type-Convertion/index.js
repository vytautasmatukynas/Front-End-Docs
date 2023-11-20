// Converting Strings to Numbers
let strNumber = "123";
let numFromStr = Number(strNumber);
console.log("Converting Strings to Numbers:", numFromStr); // Output: 123

// Converting Numbers to Strings
let number = 456;
let strFromNum = String(number);
console.log("Converting Numbers to Strings:", strFromNum); // Output: "456"

// Converting Dates to Numbers
let currentDate = new Date();
let timestamp = currentDate.getTime();
console.log("Converting Dates to Numbers:", timestamp); // Output: Current timestamp in milliseconds

// Converting Numbers to Dates
let exampleTimestamp = 1635830400000; // Example timestamp
let dateFromTimestamp = new Date(exampleTimestamp);
console.log("Converting Numbers to Dates:", dateFromTimestamp); // Output: Date object representing the timestamp

// Converting Booleans to Numbers
let boolValue = true;
let numFromBool = Number(boolValue);
console.log("Converting Booleans to Numbers:", numFromBool); // Output: 1 (true is converted to 1)

// Converting Numbers to Booleans
let numberValue = 0;
let boolFromNum = Boolean(numberValue);
console.log("Converting Numbers to Booleans:", boolFromNum); // Output: false (0 is converted to false)

