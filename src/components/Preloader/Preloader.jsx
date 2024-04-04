import styles from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.inner} ${styles.one}`}></div>
      <div className={`${styles.inner} ${styles.two}`}></div>
      <div className={`${styles.inner} ${styles.three}`}></div>
    </div>
  );
};
