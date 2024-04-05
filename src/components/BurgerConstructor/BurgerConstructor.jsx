import styles from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { SelectedBun } from "./SelectedBun/SelectedBun";
import { BASE_URL, ORDER_ENDPOINT } from "../../utils/constants";
import { request } from "../../utils/requests";
import { useDispatch, useSelector } from "react-redux";
import { SelectedIngredient } from "./SelectedIngredient/SelectedIngredient";
import { useDrop } from "react-dnd";
import {
  calcTotalPrice,
  setBun,
  setIngredients,
} from "../../services/features/constructor/burgerConstructorSlice";

const BurgerConstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderList, setOrder] = useState(null);
  const dispatch = useDispatch();

  const selectedBun = useSelector(
      (store) => store.burgerConstructor.selectedBun
    ),
    selectedIngredients = useSelector(
      (store) => store.burgerConstructor.selectedIngredients
    );

  const [{ isHover, ingredientType }, dropRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      ingredientType: monitor.getItem()?.type,
    }),
    drop(item) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        dispatch(setIngredients(item));
      }
    },
  });

  useMemo(() => {
    return dispatch(calcTotalPrice());
  }, [dispatch, selectedBun, selectedIngredients]);

  const totalPrice = useSelector((store) => store.burgerConstructor.totalPrice);

  return (
    <>
      <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4`}>
        <div ref={dropRef} className={styles.constructorWrapper}>
          <SelectedBun
            ingredientType={ingredientType}
            isHover={isHover}
            selectedBun={selectedBun}
            position="top"
          />
          {selectedIngredients.length ? (
            <ul className={`${styles.constructorList} mt-4 mb-4`}>
              {selectedIngredients.map((selectedIngredient) => (
                <li
                  key={selectedIngredient.idx}
                  className={`${styles.constructorItem} ml-2 mb-4`}
                >
                  <SelectedIngredient selectedIngredient={selectedIngredient} />
                </li>
              ))}
            </ul>
          ) : (
            <div
              className={`${styles.constructorElement} ${
                isHover && ingredientType !== "bun" && styles.borderClass
              } ml-8 mt-4 mb-4`}
            >
              <span className={`${styles.selectedIngredientRow} pt-6`}>
                <span className={styles.constructorElementText}>
                  Перетащите начинку
                </span>
              </span>
            </div>
          )}
          <SelectedBun
            ingredientType={ingredientType}
            isHover={isHover}
            selectedBun={selectedBun}
            position="bottom"
          />
        </div>
        <div className={`${styles.total} mt-10`}>
          <div className={styles.priceTotal}>
            <span className="text text_type_digits-medium">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            // onClick={handleAndPlaceOrder}
            htmlType="button"
            type="primary"
            size="medium"
            disabled={!selectedBun}
          >
            Офорить заказ
          </Button>
        </div>
      </section>
      {isOpen && orderList && (
        <Modal onClose={() => setIsOpen(false)}>
          <OrderDetails orderNumber={orderList.order.number} />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
