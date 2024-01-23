// Import the UntitledImage from the specified path
import UntitledImage from '../images/Untitled.png';

// Define an array named contactInfo containing contact information objects
const contactInfo = [
  {
    id: 1,
    name: "Jonas",        // Contact's name
    image: UntitledImage, // Contact's image (using the imported image)
    phone: "+37000000000" // Contact's phone number
  },
  {
    id: 2,
    name: "Petras",       // Another contact's name
    image: UntitledImage, // Another contact's image (using the same imported image)
    phone: "+37000000000" // Another contact's phone number
  }
];

// Export the contactInfo array as the default export of this module
export default contactInfo;
