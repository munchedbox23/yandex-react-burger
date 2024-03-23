import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useState } from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";

const IngredientCard = ({ data, image, price, ingredientName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={ingredientStyle.ingredientCard}
      >
        <Counter
          count={0}
          size="default"
          extraClass={ingredientStyle.counter}
        />
        <img src={image} alt={`Ингридиент: ${ingredientName}`} />
        <div className={ingredientStyle.ingredientPrice}>
          <span className="text text_type_digits-medium">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3
          className={`${ingredientStyle.ingredientName} text text_type_main-default`}
        >
          {ingredientName}
        </h3>
      </div>
      {isOpen && (
        <IngredientDetails
          item={data}
          onClose={() => isOpen && setIsOpen(false)}
        />
      )}
    </>
  );
};

IngredientCard.propTypes = {
  data: ingredientsPropTypes.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredientName: PropTypes.string.isRequired,
};

export default IngredientCard;
