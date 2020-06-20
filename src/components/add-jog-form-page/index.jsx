import React from 'react';
import './index.css';
import Button from '../button';
import { withRouter } from 'react-router';
import CancelLogo from '../../assets/pictures/cancel.svg';

const AddJogFormPage = ({ history }) => {
  const fields = [ "Distance", "Time", "Date" ]
    .map((name, index) => (
      <div key={index} className='add-jog-form__field'>
        <span>{name}</span>
        <input name={name} type="text"/>
      </div>
    ));
  
  const redirectToJogsList = React.useCallback(
    () => history.push('/jogs'),
    [history]
  );

  return (
    <div className='page add-jog-form-wrapper'>
      <div className='add-jog'>
        <img className='add-jog-form-wrapper__cancel' src={CancelLogo} alt='cancel' onClick={redirectToJogsList}/>
        <form className='add-jog-form' onSubmit={e => {
          e.preventDefault();
          const formData = {};
          Array.from(e.target).forEach(({ name, value }) => {
            if(name) formData[name] = value;
          });
          console.log(formData);
        }}>
          {fields}
          <Button text='Save' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default withRouter(AddJogFormPage);
