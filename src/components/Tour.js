import React, { useState } from "react";


const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore,setReadMore] = useState(false);

    return (
        <article>
            <img src={image} width="300" height="300"/>

            <h3>{name}</h3>

            <h4>
                ${price}
            </h4>

            <p>
                {readMore ? info : `${info.substring(0,200)}...`}

                <button onClick={() => setReadMore(!readMore)}> 
                    {readMore ? "See Less" : "Show More"}
                </button>
            </p>

            <button onClick={() => removeTour(id)}>
                Remove
            </button>
        </article>
    )
}

export default Tour;