import leftCurtain from './../../assets/leftCornerCurtain.svg';
import styles from './Curtains.module.scss';
import rightCurtain from './../../assets/rightCornerCurtain.svg';

function Curtains() {
  return (
    <>
      <img className={styles.right} src={rightCurtain} />
      <img className={styles.left} src={leftCurtain} />
    </>
  );
}

export default Curtains;
