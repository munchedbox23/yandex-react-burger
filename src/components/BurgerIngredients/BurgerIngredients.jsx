import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import tabs from "../../utils/tabs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";

const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = useState("one");

  const handleTabClick = (value) => {
    setCurrent(value);
  };

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <h1 className="text text_type_main-large mb-10">Соберите бургер</h1>
      <div className={`${styles.tabContainer} mb-10`}>
        {tabs.map(({ id, typeName, value }) => (
          <a key={id} href={`#${value}`}>
            <Tab
              value={value}
              active={current === value}
              onClick={() => handleTabClick(value)}
            >
              {typeName}
            </Tab>
          </a>
        ))}
      </div>
      <div className={styles.ingredientsWrapper}>
        {tabs.map(({ id, type, typeName, value }) => (
          <div key={id} className={styles.ingredientContent}>
            <h2 id={value}>{typeName}</h2>
            <div className={`${styles.ingredientsMenu} pt-6 pb-10 pl-4 pb-4`}>
              {ingredients
                .filter((card) => card.type === type)
                .map((ingredient) => (
                  <IngredientCard
                    data={ingredient}
                    key={ingredient._id}
                    image={ingredient.image}
                    price={ingredient.price}
                    ingredientName={ingredient.name}
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
  ingredients: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerIngredients;
