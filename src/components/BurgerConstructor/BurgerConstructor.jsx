import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { SelectedIngredientsContext } from "../../services/ingredientsContext";
import { BASE_URL, ORDER_ENDPOINT } from "../../utils/constants";
import { request } from "../../utils/requests";

const BurgerConstructor = ({ totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedIngredientsState } = useContext(SelectedIngredientsContext);
  const [orderList, setOrder] = useState(null);
  const { selectedBun, selectedIngredients } = selectedIngredientsState;

  const handleAndPlaceOrder = () => {
    const postOrder = [selectedBun, ...selectedIngredients];
    request(`${BASE_URL}${ORDER_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ingredients: postOrder.map((item) => item._id) }),
    })
      .then((data) => {
        setOrder(data);
        setIsOpen(true);
      })
      .catch((error) => console.error("Error placing order:", error));
  };
  return (
    <>
      <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4`}>
        <div className={styles.constructorWrapper}>
          {selectedBun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={selectedBun?.name}
              price={selectedBun?.price}
              thumbnail={selectedBun?.image}
              extraClass="ml-8"
            />
          ) : (
            <div className="constructor-element constructor-element_pos_top ml-8">
              <span className="constructor-element__row">
                <span className="constructor-element__text">
                  Перетащите булку
                </span>
              </span>
            </div>
          )}
          {selectedIngredients.length ? (
            <ul className={`${styles.constructorList} mt-4 mb-4`}>
              {selectedIngredients.map(({ _id, image, price, name }) => (
                <li key={_id} className={`${styles.constructorItem} ml-2 mb-4`}>
                  <div className={styles.drag}>
                    <DragIcon type="primary" />
                  </div>
                  <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                    extraClass={`${styles.centerBun}`}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="constructor-element constructor-element_pos_center ml-8 mt-4 mb-4">
              <span className="constructor-element__row">
                <span className="constructor-element__text">
                  Перетащите булку
                </span>
              </span>
            </div>
          )}

          {selectedBun ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={selectedBun?.name}
              price={selectedBun?.price}
              thumbnail={selectedBun?.image}
              extraClass="ml-8"
            />
          ) : (
            <div className="constructor-element constructor-element_pos_bottom ml-8">
              <span className="constructor-element__row">
                <span className="constructor-element__text">
                  Перетащите булку
                </span>
              </span>
            </div>
          )}
        </div>
        <div className={`${styles.total} mt-10`}>
          <div className={styles.priceTotal}>
            <span className="text text_type_digits-medium">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            onClick={handleAndPlaceOrder}
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

BurgerConstructor.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default BurgerConstructor;
