import React from 'react';
import './index.css';
import NotFoundLogo from '../../assets/pictures/404.svg';
import Button from '../button';

const NotFound = () => {

  return (
    <div className='page not-found'>
      <div className='not-found__emoji'>
        <img src={NotFoundLogo} alt="Not found"/>
        <span>Nothing is there</span>
      </div>
      <Button text='Create your jog first' />
    </div>
  );
};

export default NotFound;
