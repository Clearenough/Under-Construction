import styles from './Popup.module.scss';

function Popup({ isError, setIsModalOpen }) {
  function onClose() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.fogging}>
      <div className={styles.modal}>
        <h2 className={styles.header}>{isError ? 'ERROR!' : 'SUCCESS!'}</h2>
        <span className={styles.message}>
          {isError
            ? 'Something went wrong'
            : 'You have successfully subscribed to the email newsletter'}
        </span>
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
        <button className={styles.cross} onClick={onClose}></button>
      </div>
    </div>
  );
}

export default Popup;
