import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = ({ image, price, ingredientName }) => {
  return (
    <div className={ingredientStyle.ingredientCard}>
      <Counter count={0} size="default" extraClass={ingredientStyle.counter} />
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
  );
};

export default IngredientCard;
