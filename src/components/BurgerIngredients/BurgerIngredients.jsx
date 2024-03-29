import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { useState, useRef, useContext, useCallback } from "react";
import tabs from "../../utils/tabs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import { IngredientsContext } from "../../services/ingredientsContext";
import { SelectedIngredientsContext } from "../../services/ingredientsContext";

const BurgerIngredients = ({ totalDispach }) => {
  const [current, setCurrent] = useState("one");
  const { ingredients } = useContext(IngredientsContext);
  const tabsTitle = {
    one: useRef(),
    two: useRef(),
    three: useRef(),
  };
  const { selectedIngredientsState, selectedIngredientsDispatch } = useContext(
    SelectedIngredientsContext
  );
  const { selectedBun, selectedIngredients } = selectedIngredientsState;

  const calcOrderCost = (type, price) => {
    if (type !== "bun") {
      return totalDispach({ type: "add", ingredientType: type, price: price });
    } else {
      if (selectedBun) {
        totalDispach({
          type: "subtract",
          ingredientType: type,
          price: price,
        });
      }
      return totalDispach({ type: "add", ingredientType: type, price: price });
    }
  };

  const addIngredientsToOrder = useCallback(
    (_id, type, name, price, image) => {
      const repiedIngredients = selectedIngredients.some(
        (ingredient) => ingredient._id === _id
      );
      if (repiedIngredients) return;
      selectedIngredientsDispatch({
        type: "set",
        ingredientType: type,
        _id: _id,
        price: price,
        name: name,
        image: image,
      });
      calcOrderCost(type, price);
    },
    [selectedBun, selectedIngredients, calcOrderCost]
  );

  const handleTabClick = (value) => {
    setCurrent(value);
    tabsTitle[value].current.scrollIntoView();
  };

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <h1 className="text text_type_main-large mb-10">Соберите бургер</h1>
      <div className={`${styles.tabContainer} mb-10`}>
        {tabs.map(({ id, typeName, value }) => (
          <Tab
            key={id}
            value={value}
            active={current === value}
            onClick={() => handleTabClick(value)}
          >
            {typeName}
          </Tab>
        ))}
      </div>
      <div className={styles.ingredientsWrapper}>
        {tabs.map(({ id, type, typeName, value }) => (
          <div key={id} className={styles.ingredientContent}>
            <h2 ref={tabsTitle[value]}>{typeName}</h2>
            <div className={`${styles.ingredientsMenu} pt-6 pb-10 pl-4 pb-4`}>
              {ingredients
                .filter((card) => card.type === type)
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                    onClickToAdd={addIngredientsToOrder}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredients;
