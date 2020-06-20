import React from 'react';
import './index.css';
import JogLogo from '../../../../assets/pictures/icon.svg';
import { isMobile } from 'mobile-device-detect';
const postfix = isMobile ? '_mobile' : '';

const Jog = ({ Date, ...details }) => {
  const properties = Object.keys(details).map((name, index) => (
    <div className='jog__properties__item' key={index}>
      <span className='jog__properties__item_title'>{`${name}:`}</span>
      <span className='jog__properties__item_value'>{details[name]}</span>
    </div>
  ));

  return (
    <div className={`jog${postfix}`}>
      <img className='jog__logo' src={JogLogo} alt='runner'/>
      <div className='jog__properties'>
        <div className='jog__properties__item jog__properties__item_value'>{Date}</div>
        {properties}
      </div>
    </div>
  )
};

export default Jog;
