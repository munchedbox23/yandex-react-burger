import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, memo } from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { setDetailIngredient } from "../../services/features/modalIngredient/modalIngredientSlice";

const IngredientCard = memo(({ ingredient }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { _id, type, name, price, image } = ingredient;
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(setDetailIngredient(ingredient));
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    dispatch(setDetailIngredient(null));
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        onClick={() => handleModalOpen()}
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
      {isModalOpen && (
        <Modal title="Детали ингредиента" onClose={() => handleModalClose()}>
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
});

IngredientCard.propTypes = {
  ingredient: ingredientsPropTypes.isRequired,
};

export default IngredientCard;
