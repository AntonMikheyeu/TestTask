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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const postfix = isMobile ? '_mobile' : '';

const JogsPage = ({ history }) => {
  const { jogs, setJogs } = React.useContext(AppContext);
  const [isUpdated, rerenderComponent] = React.useState(false);
  const [isFilterShown, setIsFilterShown] = React.useState(false);
  const [isJogsEmpty, setIsJogsEmpty] = React.useState(false);
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  React.useEffect(() => {
    if (jogs.value && jogs.value.length && !jogs.isUpdated) return;
    (async () => {
      try {
        const response = await fetch(`${window.proxy}/api/v1/data/sync`, {
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
        document.cookie = '';
        history.push('/login');
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const list = React.useMemo(
    () => (
      jogs.value.map(({ date, distance: Distance, time: Time, id }, index) => {
        let dateMilliseconds = date*1000;
        const filterStart = startDate ? Date.parse(startDate) : 0;
        const filterEnd = endDate ? Date.parse(endDate) : Date.now();
        if (!date || !Distance || !Time || filterStart > dateMilliseconds || filterEnd < dateMilliseconds) return null;

        const dateObj = new Date(dateMilliseconds);
        const day = dateObj.getDate();
        const preparedDay = day/10 < 1 ? `0${day}` : day;
        const month = dateObj.getMonth() + 1;
        const preparedMonth = month/10 < 1 ? `0${month}` : month;
        const stringDate = `${preparedDay}.${preparedMonth}.${dateObj.getFullYear()}`;

        return <Jog key={index} Date={stringDate} Speed={Math.ceil(Distance/(Time/60))} Distance={Distance} Time={Time} id={id} />;
      })),
    [jogs.value, startDate, endDate]
  );

  const redirectToAddPage = React.useCallback(
    () => history.push('/jogs/add'),
    [history]
  );

  const toggleFilter = React.useCallback(
    () => {
      setIsFilterShown(!isFilterShown);
      setStartDate(undefined);
      setEndDate(undefined);
    },
    [isFilterShown]
  );

  if (isJogsEmpty) return <NotFound isButtonShown={true} />;

  const setDatePickerStartDate = date => setStartDate(date);
  const setDatePickerEndDate = date => setEndDate(date);
 
  return (
    <div className='page jogs'>
      {
        isFilterShown &&
        <div className={`jogs__filter${postfix}`}>
          <span>Date from</span>
          <DatePicker selected={startDate} onChange={setDatePickerStartDate} />
          <span>Date to</span>
          <DatePicker selected={endDate} onChange={setDatePickerEndDate} />
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
