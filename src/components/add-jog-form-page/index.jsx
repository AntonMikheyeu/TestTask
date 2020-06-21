import React from 'react';
import './index.css';
import Button from '../button';
import { withRouter } from 'react-router';
import CancelLogo from '../../assets/pictures/cancel.svg';
import { isMobile } from 'mobile-device-detect';
import { AppContext } from '../../context';
const postfix = isMobile ? '_mobile' : '';

const validateFields = fields => {
  const isEmpty = Object.values(fields).some(value => !value);
  if (isEmpty) throw new Error("Empty fields");
  const [day, month, year] = fields.date.split('.');
  const date = Date.parse(`${month}.${day}.${year}`);
  if (!date) throw new Error("Invalid date");
  const distance = Number(fields.distance);
  const time = Number(fields.time);
  if (!distance || !time) throw new Error("Distance and time should be a numbers");
  fields.distance = distance;
  fields.time = time;
};

const AddJogFormPage = ({ history }) => {
  const { jog, setJog, setIsUpdated } = React.useContext(AppContext);
  const isEdit = jog.jog_id;
  const fields = [ "Distance", "Time", "Date" ]
    .map((name, index) => {
      const defaultValue = isEdit ? `${jog[name.toLocaleLowerCase()]}` : '';

      return (
        <div key={index} className='add-jog-form__field'>
          <span>{name}</span>
          <input name={name.toLocaleLowerCase()} type="text" defaultValue={defaultValue}/>
        </div>
      );
    });
  
  const redirectToJogsList = React.useCallback(
    () => history.push('/jogs'),
    [history]
  );

  React.useEffect(() => {
    setJog({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='page add-jog-form-wrapper'>
      <div className={`add-jog${postfix}`}>
        <img className='add-jog-form-wrapper__cancel' src={CancelLogo} alt='cancel' onClick={redirectToJogsList}/>
        <form className='add-jog-form' onSubmit={async e => {
          try {
            e.preventDefault();
            const formData = {};
            Array.from(e.target).forEach(({ name, value }) => {
              if(name) formData[name] = value;
            });
            validateFields(formData);
            if (isEdit) {
              formData.jog_id = jog.jog_id;
              formData.user_id = jog.user_id;
            }
            
            const response = await fetch('https://jogtracker.herokuapp.com/api/v1/data/jog', {
              method: isEdit ? 'PUT' : 'POST',
              body: JSON.stringify(formData),
              headers: {
                Authorization: document.cookie.split('access_token=')[1]
              }
            })
            if (![200, 201].includes(response.status)) throw new Error("Jog has not be created");
            setIsUpdated(true);
            history.push('/jogs');
          } catch (error) {
            console.error(error);
          }
        }}>
          {fields}
          <Button text='Save' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default withRouter(AddJogFormPage);
