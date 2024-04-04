import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext, useState, memo, useMemo } from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import Modal from "../Modal/Modal";
import { SelectedIngredientsContext } from "../../services/ingredientsContext";

const IngredientCard = memo(({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { _id, type, name, price, image } = ingredient;
  const {
    selectedIngredientsState: { selectedBun, selectedIngredients },
  } = useContext(SelectedIngredientsContext);

  const calcCounter = useMemo(() => {
    if (selectedBun && type === "bun") {
      return selectedBun._id === _id ? 2 : 0;
    } else {
      return selectedIngredients.filter((ingredient) => ingredient._id === _id)
        .length;
    }
  }, [selectedBun, selectedIngredients]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={ingredientStyle.ingredientCard}
      >
        {calcCounter > 0 && (
          <Counter
            count={calcCounter}
            size="default"
            extraClass={ingredientStyle.counter}
          />
        )}
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
