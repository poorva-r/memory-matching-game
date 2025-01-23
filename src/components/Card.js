import React, { useState, useEffect } from 'react';

const Card = ({content, flipped, matched, onClick}) => {


    return ( 
        <div className={`border shadow-lg flex text-center items-center justify-center rounded-lg text-3xl md:text-5xl w-14 h-16 md:w-28 md:h-36 lg:w-32 lg:h-38 ${flipped || matched ? 'bg-pink-300' : 'bg-purple-300'}`}
        onClick={onClick}>
            {flipped || matched ? content : "?"}
        </div>

     );
}
 
export default Card;