import styles from "./BurgerIngredients.module.css";
import { useState, useRef, FC, RefObject } from "react";
import tabs from "../../utils/tabs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { useAppSelector } from "../../services/store/hooks";
import { motion } from "framer-motion";

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState("one");
  const ingredients = useAppSelector((store) => store.ingredients.ingredients);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabsTitle: { [key: string]: RefObject<HTMLHeadingElement> } = {
    one: useRef<HTMLHeadingElement>(null),
    two: useRef<HTMLHeadingElement>(null),
    three: useRef<HTMLHeadingElement>(null),
  };

  const handleTabClick = (value: string): void => {
    setCurrent(value);
    tabsTitle[value].current?.scrollIntoView();
  };

  const getIntersectionBlock = (
    tabsTitle: Record<string, RefObject<HTMLHeadingElement>>,
    contentRefTop: number
  ) => {
    const distances = Object.keys(tabsTitle).map((key) => ({
      key,
      distance: Math.abs(
        tabsTitle[key].current!.getBoundingClientRect().bottom - contentRefTop
      ),
    }));

    return distances.reduce((prev, curr) =>
      prev.distance < curr.distance ? prev : curr
    ).key;
  };

  const handleScroll = (): void => {
    const contentRefTop = contentRef.current!.getBoundingClientRect().top;
    setCurrent(getIntersectionBlock(tabsTitle, contentRefTop));
  };

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <motion.h1
        className="text text_type_main-large mb-10"
        initial={{ x: "-200px" }}
        animate={{ x: 0 }}
      >
        Соберите бургер
      </motion.h1>
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
                .map((ingredient, index) => (
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
