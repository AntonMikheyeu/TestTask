import React from 'react';
import './index.css';
import Jog from './components/jog';
import { withRouter } from 'react-router';
import AddButton from '../../assets/pictures/add.svg';
import InactiveToggler from '../../assets/pictures/filter.svg';
import ActiveToggler from '../../assets/pictures/filter-active.svg';

const JogsPage = ({ history }) => {
  const [isFilterShown, setIsFilterShown] = React.useState(false);
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

  const toggleFilter = React.useCallback(
    () => setIsFilterShown(!isFilterShown),
    [isFilterShown]
  );

  return (
    <div className='page jogs'>
      {
        isFilterShown && <div className='jogs__filter'>
        </div>
      }
      {list}
      <img src={AddButton} alt='add' className='jogs__add' onClick={redirectToAddPage}/>
      <div className='jogs__toggle-filter'>
        <img src={isFilterShown ? ActiveToggler : InactiveToggler}
          alt='toggle filter'
          onClick={toggleFilter}
        />
      </div>
    </div>
  );
};

export default withRouter(JogsPage);
