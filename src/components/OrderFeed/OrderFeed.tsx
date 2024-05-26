import { FC } from "react";
import { IWsOrder } from "../../types/order-types";
import styles from "./OrderFeed.module.css";
import { OrderCard } from "../OrderCard/OrderCard";

type TOrderFeedProps = {
  data: IWsOrder[];
  hasStatus: boolean;
};

export const OrderFeed: FC<TOrderFeedProps> = ({ data, hasStatus }) => {
  return (
    <section className={styles.orderFeed}>
      <ul className={`${styles.orderList} pr-2`}>
        {data.map((order) => (
          <OrderCard hasStatus={hasStatus} order={order} key={order._id} />
        ))}
      </ul>
    </section>
  );
};
