import styles from "./BurgerIngredients.module.css";
import { useState, useRef } from "react";
import tabs from "../../utils/tabs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { useSelector } from "react-redux";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState("one");
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const contentRef = useRef(null);
  const tabsTitle = {
    one: useRef(),
    two: useRef(),
    three: useRef(),
  };

  const handleTabClick = (value) => {
    setCurrent(value);
    tabsTitle[value].current.scrollIntoView();
  };

  const handleScroll = () => {
    const contentRefTop = contentRef.current.getBoundingClientRect().top;

    if (
      Math.abs(
        tabsTitle.one.current.getBoundingClientRect().bottom - contentRefTop
      ) <
      Math.abs(
        tabsTitle.two.current.getBoundingClientRect().bottom - contentRefTop
      )
    ) {
      setCurrent("one");
    } else if (
      Math.abs(
        tabsTitle.two.current.getBoundingClientRect().bottom - contentRefTop
      ) <
      Math.abs(
        tabsTitle.three.current.getBoundingClientRect().bottom - contentRefTop
      )
    ) {
      setCurrent("two");
    } else {
      setCurrent("three");
    }
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
      <div
        ref={contentRef}
        onScroll={handleScroll}
        className={styles.ingredientsWrapper}
      >
        {tabs.map(({ id, type, typeName, value }) => (
          <div key={id} className={styles.ingredientContent}>
            <h2 ref={tabsTitle[value]}>{typeName}</h2>
            <div className={`${styles.ingredientsMenu} pt-6 pb-10 pl-4 pb-4`}>
              {ingredients
                ?.filter((card) => card.type === type)
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BurgerIngredients;
