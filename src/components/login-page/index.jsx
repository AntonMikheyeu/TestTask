import React from 'react';
import './index.css';
import BearFace from '../../assets/pictures/bear-face.svg';
import Button from '../button';

const LoginPage = () => {
  return (
    <div className='page login'>
      <div className='login__form'>
        <img className='login__form__logo' src={BearFace} alt='bear-face'/>
        <Button text='Let me in' />
      </div>
    </div>
  );
};

export default LoginPage;
