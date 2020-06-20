import React from 'react';
import './index.css';
import NotFoundLogo from '../../assets/pictures/404.svg';
import Button from '../button';
import { Link } from 'react-router-dom';

const NotFound = ({ isButtonShown = false }) => {

  return (
    <div className='page not-found'>
      <div className='not-found__emoji'>
        <img src={NotFoundLogo} alt="Not found"/>
        <span>Nothing is there</span>
      </div>
      {isButtonShown && <Link to='/jogs/add' ><Button text='Create your jog first' /></Link>}
    </div>
  );
};

export default NotFound;
