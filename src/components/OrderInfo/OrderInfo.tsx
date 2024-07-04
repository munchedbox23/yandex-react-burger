import { useLocation, useParams } from "react-router";
import styles from "./OrderInfo.module.css";
import { useAppSelector } from "../../services/store/hooks";
import { FC, useMemo } from "react";
import { ORDER_STATUS } from "../../utils/constants";
import cn from "classnames";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient } from "../../types/ingredient-types";
import { Preloader } from "../../ui/Preloader/Preloader";
import { shallowEqual } from "react-redux";
import { useGetIngredientsQuery } from "../../services/features/ingredients/ingredientsApi";

export const OrderInfo: FC = () => {
  const { number } = useParams();
  const location = useLocation();
  const { data: ingredients = [] } = useGetIngredientsQuery();
  const { feedOrder, userOrder } = useAppSelector(
    (store) => ({
      feedOrder: store.feedOrders.orders,
      userOrder: store.userOrders.orders,
    }),
    shallowEqual
  );

  const orders = [...userOrder, ...feedOrder];
  const order = orders.find((item) => item._id === number);

  const { ingredientsWithoutRepeat, ingredientsObj } = useMemo(() => {
    const initialState = {
      ingredientsWithoutRepeat: [] as Array<IIngredient>,
      ingredientsObj: {} as Record<string, { price: number; count: number }>,
    };
    const itemsWithoutRepeat = Array.from(new Set(order?.ingredients));

    itemsWithoutRepeat.forEach((item) => {
      const ingredient = ingredients.find(
        (ingredient) => ingredient._id === item
      );

      if (ingredient) {
        initialState.ingredientsWithoutRepeat.push(ingredient);
        initialState.ingredientsObj[item] = {
          price: ingredient.price,
          count: 0,
        };
        order?.ingredients.forEach((orderIngredient) => {
          if (orderIngredient === item) {
            initialState.ingredientsObj[item].count += 1;
          }
        });
      }
    });

    return initialState;
  }, [order, ingredients]);

  return !order ? (
    <Preloader />
  ) : (
    <div className={styles.orderInfo}>
      <span className="text text_type_digits-default">{`#${order?.number}`}</span>
      <div className={styles.infoHeading}>
        <h2 className="text text_type_main-medium mt-10 mb-3">{order?.name}</h2>
        <p
          className={cn("text text_type_main-default", {
            [styles.done]: order?.status === "done",
          })}
        >
          {ORDER_STATUS[order!.status]}
        </p>
        <h3 className="text text_type_main-medium mt-15">Состав:</h3>
      </div>
      <div className={`${styles.orderStructure} mt-6 pr-6`}>
        {ingredientsWithoutRepeat.map((ingredient) => (
          <div key={ingredient._id} className={styles.structureItem}>
            <div className={styles.ingredientIcon}>
              <img
                className={styles.ingredientImage}
                src={ingredient.image_mobile}
                alt="Иконка ингредиента"
              />
            </div>
            <p className={`${styles.itemName} text text_type_main-default`}>
              {ingredient.name}
            </p>
            <div className={styles.itemPrice}>
              <span className="text text_type_digits-default">{`${
                ingredientsObj[ingredient._id].count
              } x ${ingredientsObj[ingredient._id].price}`}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.footer} mt-10`}>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order!.createdAt)}
        />
        <div className={styles.price}>
          <span className="text text_type_digits-default">
            {location?.state.totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
