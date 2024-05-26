import { FC } from "react";
import styles from "./OrderCard.module.css";
import { Link } from "react-router-dom";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { IWsOrder } from "../../types/order-types";

type TOrderCardProps = {
  order: IWsOrder;
};

export const OrderCard: FC<TOrderCardProps> = ({ order }) => {
  return (
    <Link to={order._id} className={`${styles.orderCard} p-6`}>
      <div className={styles.cardWrapper}>
        <header className={styles.heading}>
          <span className="text text_type_digits-default">{`#${order?.number}`}</span>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(order?.createdAt)}
          />
        </header>
        <h4 className={`${styles.title} text text_type_main-medium`}>
          {order.name}
        </h4>
        <div className={styles.orderInfo}>
          <div className={styles.orderIcons}></div>
          <div className={styles.orderPrice}></div>
        </div>
      </div>
    </Link>
  );
};
