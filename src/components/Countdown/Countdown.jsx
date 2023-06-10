import { useEffect } from 'react';
import { useState } from 'react';
import splitDate from '../../helpers/splitDate';
import styles from './Countdown.module.scss';

function Countdown() {
  const [date, setDate] = useState();

  const countDownDate = new Date('July 5, 2023 00:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;
      const newDate = splitDate(difference);
      setDate(newDate);
      console.log(date);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <ul className={styles.time}>
        {date && date.map((el, index) => <li key={index}>{el}</li>)}
      </ul>
      <div className={styles.bent}></div>
    </>
  );
}

export default Countdown;
