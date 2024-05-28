import React from 'react';
import './LeftNextButton.css';
import { LeftArrow } from '../../images';

function LeftNextButton() {
  return (
    <div>
      <button type='submit' className='left-next-button'>
        <img src={LeftArrow} alt="" />
      </button>
    </div>
  )
}

export default LeftNextButton
