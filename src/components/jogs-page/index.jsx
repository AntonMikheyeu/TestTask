import React from 'react';
import './index.css';
import Jog from './components/jog';
import { withRouter } from 'react-router';
import AddButton from '../../assets/pictures/add.svg';
import InactiveToggler from '../../assets/pictures/filter.svg';
import ActiveToggler from '../../assets/pictures/filter-active.svg';
import { AppContext } from '../../context';
import { isMobile } from 'mobile-device-detect';
import NotFound from '../not-found-page';
const postfix = isMobile ? '_mobile' : '';

const JogsPage = ({ history }) => {
  const { jogs, setJogs } = React.useContext(AppContext);
  const [isUpdated, rerenderComponent] = React.useState(false);
  const [isFilterShown, setIsFilterShown] = React.useState(false);
  const [isJogsEmpty, setIsJogsEmpty] = React.useState(false);
  React.useEffect(() => {
    if (jogs.value && jogs.value.length && !jogs.isUpdated) return;
    (async () => {
      try {
        const response = await fetch('/data/sync', {
          headers: {
            Authorization: document.cookie.split('access_token=')[1]
          }
        });
        if (response.status !== 200) throw new Error("Jogs can't be synchronized");
        const jogsList = (await response.json()).response.jogs;
        if (!jogsList.length) setIsJogsEmpty(true);
        setJogs(jogsList, false);
        rerenderComponent(!isUpdated);
      } catch (error) {
        console.error(error);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const list = React.useMemo(
    () => (
      jogs.value.map(({ date, distance: Distance, time: Time, id }, index) => {
        if (!date || !Distance || !Time) return null;

        const dateObj = new Date(date);
        const stringDate = `${dateObj.getDate()}.${dateObj.getMonth() + 1}.${dateObj.getFullYear()}`;

        return <Jog key={index} Date={stringDate} Speed={Math.ceil(Distance/(Time/60))} Distance={Distance} Time={Distance} id={id} />;
      })),
    [jogs.value]
  );

  const redirectToAddPage = React.useCallback(
    () => history.push('/jogs/add'),
    [history]
  );

  const toggleFilter = React.useCallback(
    () => setIsFilterShown(!isFilterShown),
    [isFilterShown]
  );

  if (isJogsEmpty) return <NotFound isButtonShown={true} />;

  return (
    <div className='page jogs'>
      {
        isFilterShown && <div className='jogs__filter'>
        </div>
      }
      {list}
      <img src={AddButton} alt='add' className={`jogs__add${postfix}`} onClick={redirectToAddPage}/>
      <div className={`jogs__toggle-filter${postfix}`}>
        <img src={isFilterShown ? ActiveToggler : InactiveToggler}
          alt='toggle filter'
          onClick={toggleFilter}
        />
      </div>
    </div>
  );
};

export default withRouter(JogsPage);
