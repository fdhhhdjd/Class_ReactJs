//* REACT
import React, { useEffect, useState } from 'react';

//* LIBRARY
import Moment from 'react-moment';
import 'moment/locale/vi';

const Moments = () => {
  const [Time, setTime] = useState('');
  let today = new Date();
  let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>
        <h2>Việt Nam </h2>
        <strong>
          <Moment format=" dddd, Do MMMM  YYYY, LT:ss a">{Time}</Moment>
        </strong>
        &nbsp; ngày {date} 📅
      </h2>
    </div>
  );
};

export default Moments;
