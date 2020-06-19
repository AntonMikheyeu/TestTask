import React from 'react';
import './index.css';
import HeaderLogo from '../../assets/pictures/logo.svg';

const Header = () => {

  return (
    <div className='header'>
      <img className='header__logo' src={HeaderLogo} alt='logo'/>
    </div>
  );
};

export default Header;
