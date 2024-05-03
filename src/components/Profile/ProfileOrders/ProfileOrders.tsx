import { FC } from "react";
import styles from "./ProfileOrders.module.css";

export const ProfileOrders: FC = () => {
  return (
    <div className={styles.profileOrders}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-3`}>
        История заказов
      </h1>
      <p className="text text_type_main-default">
        Данная страница находится на стадии разработки
      </p>
    </div>
  );
};
