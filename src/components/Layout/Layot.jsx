import styles from './Layout.module.scss';

function Layout({ children }) {
  console.log(styles);
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
