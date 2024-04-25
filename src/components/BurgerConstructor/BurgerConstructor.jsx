import styles from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { SelectedBun } from "./SelectedBun/SelectedBun";
import { useDispatch, useSelector } from "react-redux";
import { SelectedIngredient } from "./SelectedIngredient/SelectedIngredient";
import { useDrop } from "react-dnd";
import {
  calcTotalPrice,
  resetConstructor,
  setBun,
  setIngredients,
} from "../../services/features/constructor/burgerConstructorSlice";
import { handleAndPlaceOrder } from "../../services/features/orderPost/orderPostSlice";
import { Preloader } from "../Preloader/Preloader";
import { useNavigate } from "react-router";
import { ROUTE } from "../../utils/constants";

const BurgerConstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedBun = useSelector(
      (store) => store.burgerConstructor.selectedBun
    ),
    selectedIngredients = useSelector(
      (store) => store.burgerConstructor.selectedIngredients
    ),
    orderList = useSelector((store) => store.postOrder.orderList),
    postRequest = useSelector((store) => store.postOrder.postRequest),
    user = useSelector((store) => store.user.user);

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

  useEffect(() => {
    dispatch(calcTotalPrice());
  }, [dispatch, selectedBun, selectedIngredients]);

  const totalPrice = useSelector((store) => store.burgerConstructor.totalPrice);

  const handlePostOrder = () => {
    if (user) {
      const order = [selectedBun, ...selectedIngredients];
      dispatch(handleAndPlaceOrder(order));
      setIsOpen(true);
    } else {
      navigate(ROUTE.mainLayout.login);
    }
  };

  const handleCloseOrderModal = () => {
    dispatch(resetConstructor());
    setIsOpen(false);
  };

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
              {selectedIngredients.map((selectedIngredient, index) => (
                <SelectedIngredient
                  index={index}
                  key={selectedIngredient?.idx}
                  selectedIngredient={selectedIngredient}
                />
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
            onClick={() => handlePostOrder()}
            htmlType="button"
            type="primary"
            size="medium"
            disabled={!selectedBun}
          >
            Офорить заказ
          </Button>
        </div>
      </section>
      {postRequest ? (
        <Preloader />
      ) : (
        isOpen &&
        orderList && (
          <Modal onClose={handleCloseOrderModal}>
            <OrderDetails orderNumber={orderList.order.number} />
          </Modal>
        )
      )}
    </>
  );
};

export default BurgerConstructor;
