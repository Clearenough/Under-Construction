import styles from './EventsButton.module.scss';
import arrow from './../../assets/arrow-right.svg';

function EventsButton() {
  return (
    <div className={styles.buttonContainer}>
      <span className={styles.title}>Check our event page when you wait</span>
      <a className={styles.link} href="https://google.com">
        <span className={styles.text}>Go to the event</span>
        <img src={arrow} alt="arrow-right" />
      </a>
    </div>
  );
}

export default EventsButton;
