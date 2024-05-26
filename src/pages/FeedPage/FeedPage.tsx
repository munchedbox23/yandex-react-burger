import { FC, useEffect } from "react";
import styles from "./FeedPage.module.css";
import { OrderFeed } from "../../components/OrderFeed/OrderFeed";
import {
  wsOrdersConnect,
  wsOrdersDisconnect,
} from "../../services/features/feedOrders/actions";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import { WEBSOCKET_API } from "../../utils/constants";
import { OrderStatistic } from "../../components/OrderStatistic/OrderStatistic";

export const FeedPage: FC = () => {
  const dispatch = useAppDispatch();
  const allOrders = useAppSelector((store) => store.feedOrders.orders);

  useEffect(() => {
    dispatch(
      wsOrdersConnect(
        `${WEBSOCKET_API.baseUrl}${WEBSOCKET_API.endpoints.allOrders}`
      )
    );

    return () => {
      dispatch(wsOrdersDisconnect());
    };
  }, [dispatch]);

  return (
    <section className={`${styles.feedPage} pt-10`}>
      <h1 className="text text_type_main-large mb-5 ml-5">Лента заказов</h1>
      <div className={styles.feedWrapper}>
        <OrderFeed data={allOrders} />
        <OrderStatistic />
      </div>
    </section>
  );
};
