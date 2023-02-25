import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const {rating, setRating} = useState(null);
    const {hover, setHover} = useState(null);
    return (
    <div className="flex space-x-3 my-0">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

        return (
            <label >
                <input 
                className="hidden" 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                
                />
                <FaStar 
                className="cursor-pointer transition-colors duration-200"
                color={ratingValue < (hover || rating) ? "#e4e5e9" :  "#ffc107"} 
                size={50}
                onMouseEnter={() => setHover(ratingValue)} 
                onMouseLeave={() => setHover(null)} 
                />
            </label>
        );
        })}
        <p>The rating is {rating}</p>
    </div>
    );
};

export default StarRating;