import React from 'react';
import '../CSS/RightNextButton.css';
import { rightArrow } from '../images';

function RightNextButton() {
  return (
    <div>
      <button type='submit' className='right-next-button'>
        <img src={rightArrow} alt="" />
      </button>
    </div>
  )
}

export default RightNextButton
