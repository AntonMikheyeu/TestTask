import React from 'react';
import './index.css';
import { isMobile } from 'mobile-device-detect';
import texts from './info-text.json';
const postfix = isMobile ? '_mobile' : '';

const InfoPage = () => {
  const text = texts.map((part, index) => (
    <div className='info__text' key={index}>{part}</div>
  ));

  return (
    <div className='page info_container'>
      <div className={`info${postfix}`}>
        <div className='info__header'>Info</div>
        {text}
      </div>
    </div>
  );
};

export default InfoPage;
