import { FC } from "react";
import styles from "./FeedPage.module.css";
import { OrderFeed } from "../../components/OrderFeed/OrderFeed";

export const FeedPage: FC = () => {
  return (
    <main className={`${styles.feedPage} pt-10`}>
      <h1 className="text text_type_main-large mb-5 ml-5">Лента заказов</h1>
      <div className={`${styles.feedWrapper} pb-5`}>
        <OrderFeed />
      </div>
    </main>
  );
};
