import React from 'react';
import './index.css';
import Input from '../input';
import Jog from './components/jog';
import AddButton from '../../assets/pictures/add.svg'

const JogsPage = () => {
  const inputType = React.useMemo(() => 'search', []);
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

  const getJogsList = jogsList => (
    jogsList.map(({ Date, Speed, Distance, Time }, index) => (
      <Jog key={index} Date={Date} Speed={Speed} Distance={Distance} Time={Time} />
    ))
  );

  return (
    <div className='page jogs'>
      <div className='jogs__filter'>
        <Input label='Date from' type={inputType} />
        <Input label='Date to' type={inputType} />
      </div>
      {getJogsList(jogsList)}
      <img src={AddButton} alt='add' className='jogs__add'/>
    </div>
  );
};

export default JogsPage;
