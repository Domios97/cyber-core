import React from 'react';
import './SeeDetail.css';

const SeeDetail = ({SeeDetails, SeeDetailsStyle}) => {
  return (
    <div>
      <button type='submit' className={` see-details ${SeeDetails} ${SeeDetailsStyle}`}>See Details</button>
     
    </div>
  )
}

export default SeeDetail