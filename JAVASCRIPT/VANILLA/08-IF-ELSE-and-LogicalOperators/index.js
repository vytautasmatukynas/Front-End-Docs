let userName = "bro";
let nameOfUser = "jonas";
let password = "1234";

// Check if 'userName' equals "bro" and 'password' equals "1234"
if (userName === "bro" && password === "1234") {
    // If the conditions are true, log the uppercase version of 'userName'
    console.log(userName.toUpperCase());
} else if (userName.length === 3 || nameOfUser === "jonas") {
    // If 'userName' length is 3 or 'name' equals "jonas", log the first character of 'userName' in uppercase
    console.log(userName.charAt(0).toUpperCase());
} else if (nameOfUser !== "jonas") {
    console.log("Not JONAS.");
} else {
    // If none of the conditions match, log a message
    console.log("No match.");
}



