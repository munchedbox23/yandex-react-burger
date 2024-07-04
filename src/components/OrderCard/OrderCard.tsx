import { FC, useMemo } from "react";
import styles from "./OrderCard.module.css";
import { Link, useLocation } from "react-router-dom";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { IWsOrder } from "../../types/order-types";
import { ORDER_STATUS } from "../../utils/constants";
import cn from "classnames";
import { OrderIcons } from "./OrderIcons/OrderIcons";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useGetIngredientsQuery } from "../../services/features/ingredients/ingredientsApi";

type TOrderCardProps = {
  order: IWsOrder;
  hasStatus: boolean;
};

export const OrderCard: FC<TOrderCardProps> = ({ hasStatus, order }) => {
  const { data: ingredients = [] } = useGetIngredientsQuery();
  const location = useLocation();

  const { price, orderIcons } = useMemo(() => {
    const initialState = {
      price: 0 as number,
      orderIcons: [] as Array<string>,
    };

    return order.ingredients.reduce((acc, item) => {
      const ingredient = ingredients.find(
        (ingredient) => ingredient._id === item
      );
      if (ingredient) {
        acc.orderIcons.push(ingredient.image_mobile);
        acc.price += ingredient.price;
      }
      return acc;
    }, initialState);
  }, [order, ingredients]);

  return (
    <Link
      to={order._id}
      state={{ background: location, totalPrice: price }}
      className={`${styles.orderCard} p-6`}
    >
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
        {hasStatus && (
          <span
            className={cn("text text_type_main-default", {
              [styles.done]: order.status === "done",
            })}
          >
            {ORDER_STATUS[order.status]}
          </span>
        )}
        <div className={styles.orderInfo}>
          <OrderIcons icons={orderIcons} />
          <div className={styles.orderPrice}>
            <span className="text text_type_digits-default">{price}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};
