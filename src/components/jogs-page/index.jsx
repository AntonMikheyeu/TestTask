import React from 'react';
import './index.css';
import Jog from './components/jog';
import { withRouter } from 'react-router';
import AddButton from '../../assets/pictures/add.svg'

const JogsPage = ({ history }) => {
  const [jogsList, setList] = React.useState([]);
  React.useEffect(() => {
    //Fake tmp data
    setList([
      { Date: '20.12.2017', Speed: 15, Distance: 10, Time: 60 },
      { Date: '20.12.2017', Speed: 15, Distance: 10, Time: 60 },
      { Date: '20.12.2017', Speed: 15, Distance: 10, Time: 60 },
      { Date: '20.12.2017', Speed: 15, Distance: 10, Time: 60 },
      { Date: '20.12.2017', Speed: 15, Distance: 10, Time: 60 },
      { Date: '20.12.2017', Speed: 15, Distance: 10, Time: 60 }
    ]);
  }, []);

  const list = React.useMemo(
    () => (
      jogsList.map(({ Date, Speed, Distance, Time }, index) => (
        <Jog key={index} Date={Date} Speed={Speed} Distance={Distance} Time={Time} />
      ))),
    [jogsList]
  );

  const redirectToAddPage = React.useCallback(
    () => history.push('/jogs/add'),
    [history]
  );

  return (
    <div className='page jogs'>
      <div className='jogs__filter'>
      </div>
      {list}
      <img src={AddButton} alt='add' className='jogs__add' onClick={redirectToAddPage}/>
    </div>
  );
};

export default withRouter(JogsPage);
