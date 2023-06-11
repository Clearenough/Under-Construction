import { useEffect } from 'react';
import { useState } from 'react';
import splitDate from '../../helpers/splitDate';
import days from '../../assets/days.svg';
import minutes from '../../assets/minutes.svg';
import hours from '../../assets/hours.svg';
import seconds from '../../assets/seconds.svg';
import dd from '../../assets/dd.svg';
import hh from '../../assets/hh.svg';
import mm from '../../assets/mm.svg';
import ss from '../../assets/ss.svg';
import styles from './Countdown.module.scss';

const accordanceLargeScreen = [days, '', hours, '', minutes, '', seconds];
const accordanceSmallScreen = [dd, '', hh, '', mm, '', ss];

function Countdown() {
  const [date, setDate] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(screenWidth);

  const countDownDate = new Date('July 5, 2023 00:00:00').getTime();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;
      const newDate = splitDate(difference);
      setDate(newDate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ul className={styles.time}>
        {date &&
          date.map((el, index) => (
            <li className={styles.countdownElement} key={index}>
              {el}
              <img
                src={
                  screenWidth < 1026
                    ? accordanceSmallScreen[index]
                    : accordanceLargeScreen[index]
                }
              />
            </li>
          ))}
      </ul>
      <div className={styles.bent}></div>
    </>
  );
}

export default Countdown;
