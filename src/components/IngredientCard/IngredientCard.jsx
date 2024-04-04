import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, memo, useMemo } from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import Modal from "../Modal/Modal";

const IngredientCard = memo(({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { _id, type, name, price, image } = ingredient;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={ingredientStyle.ingredientCard}
      >
        <Counter />
        <img src={image} alt={`Ингридиент: ${name}`} />
        <div className={ingredientStyle.ingredientPrice}>
          <span className="text text_type_digits-medium">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3
          className={`${ingredientStyle.ingredientName} text text_type_main-default`}
        >
          {name}
        </h3>
      </div>
      {isOpen && (
        <Modal
          title="Детали ингредиента"
          onClose={() => isOpen && setIsOpen(false)}
        >
          <IngredientDetails item={ingredient} />
        </Modal>
      )}
    </>
  );
});

IngredientCard.propTypes = {
  ingredient: ingredientsPropTypes.isRequired,
};

export default IngredientCard;
