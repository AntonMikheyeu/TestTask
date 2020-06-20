import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/pictures/logo.svg';
import MenuLogo from '../../assets/pictures/menu.svg';
import CancelLogo from '../../assets/pictures/cancel.svg'
import { isMobile } from 'mobile-device-detect';
import { withRouter } from 'react-router';

const Header = () => {
  const [isMobileNavShown, setIsMobileNavShown] = React.useState(false);
  const toggleMenu = React.useCallback(
    () => setIsMobileNavShown(!isMobileNavShown),
    [isMobileNavShown]
  );

  const getIsActiveClass = url => (
    window.location.pathname === url ? 'active_link' : ''
    );

  const links = () => (
    <>
      <Link to='/jogs' onClick={toggleMenu}>
        <span className={getIsActiveClass('/jogs')}>Jogs</span>
      </Link>
      <Link to='/info' onClick={toggleMenu}>
        <span className={getIsActiveClass('/info')}>Info</span>
      </Link>
      <Link to='/contact-us' onClick={toggleMenu}>
        <span className={getIsActiveClass('/contact-us')}>Contact us</span>
      </Link>
    </>
  );

  const mobileNavBar = () => (
    <>
      <img className='header__logo__mobile' src={MenuLogo} alt='menu' onClick={toggleMenu}/>
      {
        isMobileNavShown &&
        <div className='header__mobile_navbar'>
          <img className='header__mobile_navbar__logo' src={HeaderLogo} alt='logo'/>
          <img className='header__mobile_navbar__cancel' src={CancelLogo} alt='cancel' onClick={toggleMenu}/>
          <div className='header__mobile_navbar__links_wrapper'>
            {links()}
          </div>
        </div>
      }
    </>
  );
  const desctopNavBar = () => (
    <nav>
      {links()}
    </nav>
  )

  return (
    <div className='header'>
      <img className='header__logo' src={HeaderLogo} alt='logo'/>
      {
        isMobile
          ? mobileNavBar()
          : desctopNavBar()
      }
    </div>
  );
};

export default withRouter(Header);
