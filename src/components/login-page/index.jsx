import React from 'react';
import './index.css';
import { withRouter } from 'react-router';
import BearFace from '../../assets/pictures/bear-face.svg';
import Button from '../button';
import { isMobile } from 'mobile-device-detect';
import { AppContext } from '../../context';
import getUserData from './utility/get-user-data';
const postfix = isMobile ? '_mobile' : '';
const authErrorMessage = 'User can\'t be authorized';

const LoginPage = ({ history }) => {
  const { setUser } = React.useContext(AppContext);

  const login = async () => {
    try {
      let response = await fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {
        method: 'POST',
        body: JSON.stringify({ uuid: 'hello' })
      });
      if (response.status !== 201) throw new Error(authErrorMessage);
      const { response: { access_token } } = await response.json();


      const Authorization = 'Bearer ' + access_token;

      document.cookie = `access_token=${Authorization}`;

      await getUserData(Authorization, setUser);
      history.push('/jogs');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='page login'>
      <div className={`login__form${postfix}`}>
        <img className='login__form__logo' src={BearFace} alt='bear-face'/>
        <Button text='Let me in' onClick={login} />
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
