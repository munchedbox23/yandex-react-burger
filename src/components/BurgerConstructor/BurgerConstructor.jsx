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
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import Modal from "../Modal/Modal";
import { IngredientsContext } from "../../services/ingredientsContext";

const BurgerConstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ingredients } = useContext(IngredientsContext);

  return (
    <>
      <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4`}>
        <div className={styles.constructorWrapper}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={ingredients.length && ingredients[0].image}
            extraClass="ml-8"
          />
          <ul className={`${styles.constructorList} mt-4 mb-4`}>
            {ingredients
              .filter((item) => item.type === "main" || item.type === "sauce")
              .map(({ _id, image, price, name }) => (
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
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={ingredients.length && ingredients[0].image}
            extraClass="ml-8"
          />
        </div>
        <div className={`${styles.total} mt-10`}>
          <div className={styles.priceTotal}>
            <span className="text text_type_digits-medium">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            htmlType="button"
            type="primary"
            size="medium"
          >
            Офорить заказ
          </Button>
        </div>
      </section>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerConstructor;
