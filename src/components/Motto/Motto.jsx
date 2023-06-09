import styles from './Motto.module.scss';

function Moto() {
  return (
    <div className={styles.motto}>
      <h1 className={styles.title}>{'UNDER CONSTRUCTION'}</h1>
      <h3
        className={styles.subtitle}
      >{`We're making lots of improvements and will be back soon`}</h3>
    </div>
  );
}

export default Moto;
