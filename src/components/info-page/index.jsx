import React from 'react';
import './index.css';
import texts from './info-text.json';

const InfoPage = () => {
  const text = texts.map((part, index) => (
    <div className='info__text' key={index}>{part}</div>
  ));

  return (
    <div className='page info_container'>
      <div className='info'>
        <div className='info__header'>Info</div>
        {text}
      </div>
    </div>
  );
};

export default InfoPage;
