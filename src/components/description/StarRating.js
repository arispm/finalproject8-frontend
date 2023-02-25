import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import StarRating from "./Rating";

const colors = {
    yellow: "#ffc107",
    grey: "#e4e5e9"
};

function StarRating2 ( {closeRating} ) {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };
    
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-transparent w-full p-4 overflow-x-hidden overflow-y-auto  md:inset-0 h-modal md:h-full">
            <div className="translate-x-52 translate-y-12  relative w-full h-full max-w-2xl md:h-auto">
                {/* Content Rating */}
                <div className="w-[500px] h-[500px] rounded-xl bg-white shadow-lg shadow-indigo-500/40 flex flex-col p-[25px]">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button className="bg-white rounded-lg p-1.5 text-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => closeRating(false)}> X </button>
                    </div>
                    {/* Tittle */}
                    <div className="inline-block mt-[10px] text-center">
                        <h2 className=" text-3xl font-normal leading-normal mt-0 mb-2 text-b">What's your rating ?</h2>
                    </div>
                    {/* Star Rating */}
                    <div className="flex space-x-3 my-4 justify-center">
                    {stars.map((_,index) =>{
                    return(
                        <FaStar
                        className="cursor-pointer transition-colors duration-200"
                        key={index}
                        size={50}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
                        />
                        )
                        })}
                        </div>
                        <textarea className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" placeholder="What's your feedback?"/>
                        
                        <div className="flex basis-1/5 justify-center items-center">
                            <button onClick={() => closeRating(false)} className="w-[150px] h-[45px] m-[10px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                            <button className='w-[150px] h-[45px] m-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Submit
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};



export default StarRating2;