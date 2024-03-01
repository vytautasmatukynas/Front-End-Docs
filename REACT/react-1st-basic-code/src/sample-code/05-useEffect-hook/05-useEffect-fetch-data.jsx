import React, { useState, useEffect } from "react";

const UseEffectSample = () => {
    // State to manage the type of data and the fetched items
    const [data, setData] = useState("posts");
    const [items, setItems] = useState([]);

    // Effect hook to fetch data when the 'data' state changes
    useEffect(() => {
        // Construct the URL based on the 'data' value
        const apiUrl = `https://jsonplaceholder.typicode.com/${data}`;

        // Fetch data from the JSONPlaceholder API
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => {
                // Update the 'items' state with the fetched data
                setItems(json);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });
    }, [data]);

    return (
        <>
            {/* Display the current 'data' value in an h1 element */}
            <h1>{data}</h1>

            {/* Buttons to change the 'data' value and trigger data fetching */}
            <div>
                <button onClick={() => setData("posts")}>Post</button>
                <button onClick={() => setData("users")}>User</button>
                <button onClick={() => setData("comments")}>Comment</button>
            </div>

            {/* Display a specific item if its 'id' is 8 */}
            <div>
                {items.map((item, index) => (
                    item.id === 8 && (
                        <ol key={`${item.id}-${index}`} start={index + 1}>
                            <li>{data === "posts" ? item.title : item.name}</li>
                        </ol>
                    )
                ))};
            </div>
        </>
    );
}



export default UseEffectSample;