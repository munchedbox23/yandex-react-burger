import styles from "./OrderStatistic.module.css";
import { useAppSelector } from "../../services/store/hooks";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export const OrderStatistic = () => {
  const { orders, orderResponse } = useAppSelector((store) => ({
    orders: store.feedOrders.orders,
    orderResponse: store.feedOrders.orderResponse,
  }));

  const { readyOrders, inProgressOrders } = useMemo(() => {
    const initialState = {
      readyOrders: [] as Array<number>,
      inProgressOrders: [] as Array<number>,
    };

    return orders.reduce((acc, order) => {
      order.status === "done"
        ? acc.readyOrders.push(order.number)
        : order.status === "pending" && acc.inProgressOrders.push(order.number);
      return acc;
    }, initialState);
  }, [orders]);

  return (
    <section className={styles.orderStatistics}>
      <div className={`${styles.onlineOrdersStats} mb-15 `}>
        <div className={styles.column}>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <div className={styles.statisticBoard}>
            {readyOrders.slice(0, 10).map((order) => (
              <span
                className={`${styles.primary} text text_type_main-medium`}
                key={uuidv4()}
              >
                {order}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <div className={styles.statisticBoard}>
            {inProgressOrders.slice(0, 10).map((order) => (
              <span className="text text_type_main-medium" key={uuidv4()}>
                {order}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-15">
        <h2 className="text text_type_main-medium">Выполнено за всё время</h2>
        <span className="text text_type_digits-large">
          {orderResponse?.total}
        </span>
      </div>
      <div>
        <h2 className="text text_type_main-medium">Выполнено за всё время</h2>
        <span className="text text_type_digits-large">
          {orderResponse?.totalToday}
        </span>
      </div>
    </section>
  );
};
