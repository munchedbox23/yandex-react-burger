import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, memo, useEffect, FC } from "react";
import { useAppSelector } from "../../services/store/hooks";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from "../../types/ingredient-types";
import { shallowEqual } from "react-redux";

type TIngredientCardProps = {
  ingredient: IIngredient;
};

const IngredientCard: FC<TIngredientCardProps> = memo(({ ingredient }) => {
  const [count, setCount] = useState(0);

  const { name, price, image } = ingredient;

  const location = useLocation();

  const { selectedBun, selectedIngredients } = useAppSelector(
    (store) => ({
      selectedBun: store.burgerConstructor.selectedBun,
      selectedIngredients: store.burgerConstructor.selectedIngredients,
    }),
    shallowEqual
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
      <div
        className={`${ingredientStyle.ingredientCard} ${
          isDrag && ingredientStyle.dragging
        }`}
        ref={dragRef}
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
      </div>
    </Link>
  );
});

export default IngredientCard;
