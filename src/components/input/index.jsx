import React from 'react';
import './index.css';

const Input = ({ label, type }) => {

  return (
    <div className='input'>
      <span className='input__label'>{label}</span>
      <input className='input__input' type={type}/>
    </div>
  );
};

export default Input;
