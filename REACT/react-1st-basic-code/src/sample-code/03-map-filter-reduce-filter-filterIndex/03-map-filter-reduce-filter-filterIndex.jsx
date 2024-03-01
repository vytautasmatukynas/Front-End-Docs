import React from "react";

const NumberActions = () => {
    const numbers = [1, 2, 3, 4, 5];

    // Function to double each number in the array
    const doubleListNumbers = (list) => {
        return list.map(item => item * 2);
    }

    // Double the numbers
    const multipliedItems = doubleListNumbers(numbers);

    // Function to filter even numbers
    const filterDouble = (list) => {
        return list.filter(item => item % 2 === 0);
    }

    // Filter even numbers
    const filterItems = filterDouble(numbers);

    // Function to find the sum of numbers
    const sumOfNumbers = (list) => {
        return list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    // Find the sum of all numbers
    const sumOfItems = sumOfNumbers(numbers);

    const doubleFilterSum = (list) => {
        // Step 1: Double each item in the list
        const doubledList = list.map(item => item * 2);
    
        // Step 2: Filter items greater than 5
        const filteredList = doubledList.filter(item => item > 5);
    
        // Step 3: Sum the filtered items using reduce
        const sum = filteredList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
        // Return the final result
        return sum;
    }
    
    // Calculate the sum of filtered and doubled items
    const sumOfFilterItems = doubleFilterSum(numbers);

    const findNumber = (list, target) => {
        // Using the find method to locate the first number equal to the target
        const foundNumber = list.find(item => item === target);
    
        // Returning the found number or a default value if not found
        return foundNumber !== undefined ? foundNumber : "Number not found";
    }

    const findFive = findNumber(numbers, 5);
    const findNine = findNumber(numbers, 9);


    const findNumberByIndex = (list, target) => {
        // Using the findIndex method to locate the index of the first number equal to the target
        const foundIndex = list.findIndex(item => item === target);
    
        // Returning the found index or a default value if not found
        return foundIndex !== -1 ? foundIndex : "Number not found";
    }
    
    const findFiveByIndex = findNumber(numbers, 5);

    return (
        <div>
            <p>Map: {multipliedItems.join(', ')}</p>
            <p>Filter: {filterItems.join(', ')}</p>
            <p>Reduce: {sumOfItems}</p>
            <p>Map Filter Reduce: {sumOfFilterItems}</p>
            <p>Find (found): {findFive}</p>
            <p>Find (not found): {findNine}</p>
            <p>FindIndex (found): {findFiveByIndex}</p>
        </div>
    );
}

export default NumberActions;

