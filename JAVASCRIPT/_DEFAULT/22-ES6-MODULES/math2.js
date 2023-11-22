// math.js - Exporting a simple math module

// If you want to use JavaScript ES6 modules and you're working with local 
// files, it's recommended to launch a local server. The server will help you 
// avoid CORS (Cross-Origin Resource Sharing) issues and enable the correct 
// loading of ES6 modules.
// Or VSCode plugin http 'live server'.

const PI = 3.14;

const radius = 3.14;

const count =  radius => 2 * PI * radius;

export default PI;

export {radius, count};