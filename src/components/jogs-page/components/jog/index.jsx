import React from 'react';
import './index.css';
import JogLogo from '../../../../assets/pictures/icon.svg';
import { isMobile } from 'mobile-device-detect';
import { AppContext } from '../../../../context';
import { withRouter } from 'react-router';
const postfix = isMobile ? '_mobile' : '';

const Jog = ({history, id, Date, Time, Distance, Speed }) => {
  const { user, setJog } = React.useContext(AppContext);
  const details = { Time: `${Time} min`, Distance: `${Distance} km`, Speed };
  const properties = Object.keys(details).map((name, index) => (
    <div className='jog__properties__item' key={index}>
      <span className='jog__properties__item_title'>{`${name}:`}</span>
      <span className='jog__properties__item_value'>{details[name]}</span>
    </div>
  ));

  const redirectToEditJog = () => {
    setJog({
      jog_id: id,
      user_id: user.id,
      date: Date,
      time: Time,
      distance: Distance
    });

    return history.push('/jogs/add');
  };

  return (
    <div className={`jog${postfix}`} onClick={redirectToEditJog}>
      <img className='jog__logo' src={JogLogo} alt='runner'/>
      <div className='jog__properties'>
        <div className='jog__properties__item jog__properties__item_value'>{Date}</div>
        {properties}
      </div>
    </div>
  )
};

export default withRouter(Jog);
