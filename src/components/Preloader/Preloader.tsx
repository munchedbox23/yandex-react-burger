import { FC } from "react";
import styles from "./Preloader.module.css";

export const Preloader: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.inner} ${styles.one}`}></div>
      <div className={`${styles.inner} ${styles.two}`}></div>
      <div className={`${styles.inner} ${styles.three}`}></div>
    </div>
  );
};
