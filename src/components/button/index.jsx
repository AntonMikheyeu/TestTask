import React from 'react';
import './index.css';

const Button = ({ text, type = "button", onClick }) => {

  return (
    <button className='button' type={type} onClick={onClick}>{text}</button>
  );
};

export default Button;
