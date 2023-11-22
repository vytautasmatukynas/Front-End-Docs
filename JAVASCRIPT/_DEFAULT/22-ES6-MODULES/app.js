// app.js - Another module that uses the math module

// If you want to use JavaScript ES6 modules and you're working with local 
// files, it's recommended to launch a local server. The server will help you 
// avoid CORS (Cross-Origin Resource Sharing) issues and enable the correct 
// loading of ES6 modules.
// Or VSCode plugin http 'live server'.

// Import the math module
import PI, {radius, count} from "./math.js";
// Import everything
import * as math from "./math2.js";


console.log(PI);

console.log(count(radius));


// When importing everything it eturns JS OBJECT
console.log(math.PI);

console.log(math.count(math.radius));