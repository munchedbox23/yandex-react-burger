import { useDispatch, useSelector } from "react-redux";
import styles from "./SelectedIngredient.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removIngredient } from "../../../services/features/constructor/burgerConstructorSlice";

export const SelectedIngredient = ({ selectedIngredient }) => {
  const dispatch = useDispatch();
  const handleDeleteIngredient = (index) => {
    dispatch(removIngredient(index));
  };
  return (
    <>
      <div className={styles.drag}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={selectedIngredient.name}
        price={selectedIngredient.price}
        thumbnail={selectedIngredient.image}
        extraClass={`${styles.centerBun}`}
        handleClose={() => handleDeleteIngredient(selectedIngredient.idx)}
      />
    </>
  );
};
