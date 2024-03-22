import { useState } from "react";
import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = ({ image, price, ingredientName }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div onClick={increaseCounter} className={ingredientStyle.ingredientCard}>
      <Counter
        count={counter}
        size="default"
        extraClass={ingredientStyle.counter}
      />
      <img src={image} alt={`Ингредиент: ${ingredientName}`} />
      <div className={ingredientStyle.ingredientPrice}>
        <span className="text text_type_digits-medium">{price}</span>
        <CurrencyIcon />
      </div>
      <h3
        className={`${ingredientStyle.ingredientName} text text_type_main-default`}
      >
        {ingredientName}
      </h3>
    </div>
  );
};

export default IngredientCard;
