import React from "react";
import animals from "../data/06-destructure-data";


const DestructureObejct = () => {
    // Assuming animals is an array with at least two elements (objects)
    const [cat, dog] = animals;

    // Destructuring the 'cat' object
    const { name, sound } = cat;

    // Destructuring the 'dog' object, including nested destructuring for the 
    // 'food' object
    const { nameDog, soundDog, food: { eat, drink } } = dog;


    return (
        <div>
            {/* Destructuring array to get individual animals */}
            <p>Animal is {name} and it says {sound}</p>

            {/* Accessing properties directly from the cat object */}
            <p>Animal is {cat.name} and it says {cat.sound}</p>

            {/* Accessing nested properties in the cat object */}
            <p>Animal is {cat.name} and it says {cat.sound},
                and drinks {cat.food.drink} and eats {cat.food.food}</p>

            {/* Destructuring object to get individual dog properties */}
            <p>Animal is {nameDog} and it says {soundDog}</p>

            {/* Accessing properties directly from the dog object */}
            <p>Animal is {dog.name} and it says {dog.sound}</p>

            {/* Accessing nested properties in the dog object */}
            <p>Animal is {nameDog} and it says {soundDog}
                and drinks {eat} and eats {drink}</p>
        </div>
    );
};

export default DestructureObejct;