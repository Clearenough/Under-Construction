import leftCurtain from './../../assets/leftCornerCurtain.svg';
import rightCurtain from './../../assets/rightCornerCurtain.svg';
import leftCurtainMedium from './../../assets/leftCornerCurtainMedium.svg';
import rightCurtainMedium from './../../assets/rightCornerCurtainMedium.svg';
import leftCurtainSmall from './../../assets/leftCornerCurtainSmall.svg';
import rightCurtainSmall from './../../assets/rightCornerCurtainSmall.svg';

import styles from './Curtains.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';

function Curtains() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function getLeftCurtain() {
    if (screenWidth <= 1025 && screenWidth > 481) return rightCurtainMedium;
    if (screenWidth <= 481) return rightCurtainSmall;
    return leftCurtain;
  }

  function getRightCurtain() {
    if (screenWidth <= 1025 && screenWidth > 481) return leftCurtainMedium;
    if (screenWidth <= 481) return leftCurtainSmall;
    return rightCurtain;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <img className={styles.right} src={getRightCurtain()} />
      <img className={styles.left} src={getLeftCurtain()} />
    </>
  );
}

export default Curtains;
