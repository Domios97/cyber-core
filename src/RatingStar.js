import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
function RatingStar() {
    const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);
  return (
    <div className="RatingStar"> 
        <p>note:</p>

    {[...Array(5)].map((star,index) => {
        const currentRating = index + 1;
        return (
            <label>
                <input
                type="radio" 
                name="rating" 
                value={currentRating}
                onClick={()=> setRating(currentRating)}
                 />
                 
                <FaStar 
                className='start'
                size ={20}
                color={currentRating<=(hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={()=> setHover(currentRating)}
                onMouseLeave={()=> setHover(null)}


                />
            </label>
        )
    })}
<p>{rating}/5</p>

    </div>
  )
}

export default RatingStar