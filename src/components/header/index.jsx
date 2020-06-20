import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/pictures/logo.svg';

const Header = () => {

  return (
    <div className='header'>
      <img className='header__logo' src={HeaderLogo} alt='logo'/>
      <nav>
        <Link to='/jogs'>
          <span>Jogs</span>
        </Link>
        <Link to='/info'>
          <span>Info</span>
        </Link>
        <Link to='/contact-us'>
          <span>Contact us</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
