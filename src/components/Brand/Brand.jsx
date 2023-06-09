import logo from './../../assets/Group.svg';
import styles from './Brand.module.scss';

function Brand() {
  return (
    <div className={styles.brand}>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Brand;
