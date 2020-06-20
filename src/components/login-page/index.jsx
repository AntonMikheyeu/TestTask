import React from 'react';
import './index.css';
import { withRouter } from 'react-router';
import BearFace from '../../assets/pictures/bear-face.svg';
import Button from '../button';
import { isMobile } from 'mobile-device-detect';
const postfix = isMobile ? '_mobile' : '';

const LoginPage = ({ history }) => {
  const redirectToJogsList = React.useCallback(
    () => history.push('/jogs'),
    [history]
  );

  return (
    <div className='page login'>
      <div className={`login__form${postfix}`}>
        <img className='login__form__logo' src={BearFace} alt='bear-face'/>
        <Button text='Let me in' onClick={redirectToJogsList} />
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
