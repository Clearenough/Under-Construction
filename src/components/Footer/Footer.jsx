import arrow from './../../assets/arrow-right.svg';
import styles from './Footer.module.scss';

import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function getDataFromServer() {
    return await new Promise((resolve, reject) => {
      setTimeout(
        () => (Math.random() > 0.5 ? resolve() : reject(new Error('error'))),
        1000
      );
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    const promise = getDataFromServer();
    promise
      .then(() => {
        setIsValid(true);
        setIsModalOpen(true);
      })
      .catch(() => {
        setIsValid(false);
        setIsModalOpen(true);
      });
  }

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className={styles.footer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your Email and get notified"
          value={email}
          onChange={onChange}
        />
        <button className={styles.button} type="submit">
          <img src={arrow} alt="submit" />
        </button>
      </form>
      <button className={styles.event}>
        Other Events
        <img className={styles.arrow} src={arrow} alt="arrow down" />
      </button>
    </div>
  );
}

export default Footer;
