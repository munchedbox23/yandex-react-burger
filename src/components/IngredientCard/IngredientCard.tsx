import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, memo, useEffect, FC, forwardRef } from "react";
import { useAppSelector } from "../../services/store/hooks";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from "../../types/ingredient-types";
import { motion } from "framer-motion";

type TIngredientCardProps = {
  ingredient: IIngredient;
};

const IngredientCard: FC<TIngredientCardProps> = ({ ingredient }) => {
  const [count, setCount] = useState(0);

  const { name, price, image } = ingredient;

  const location = useLocation();

  const selectedBun = useAppSelector(
    (store) => store.burgerConstructor.selectedBun
  );
  const selectedIngredients = useAppSelector(
    (store) => store.burgerConstructor.selectedIngredients
  );

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: { ...ingredient, idx: uuidv4() },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (selectedBun && ingredient.type === "bun") {
      if (selectedBun._id === ingredient._id) {
        setCount(2);
      } else {
        setCount(0);
      }
    } else {
      setCount(
        selectedIngredients.filter((item) => item._id === ingredient._id).length
      );
    }
  }, [selectedBun, selectedIngredients]);

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      state={{ background: location }}
    >
      <motion.div
        className={`${ingredientStyle.ingredientCard} ${
          isDrag && ingredientStyle.dragging
        }`}
        ref={dragRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Counter count={count} size="default" />
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
      </motion.div>
    </Link>
  );
};

export default IngredientCard;
