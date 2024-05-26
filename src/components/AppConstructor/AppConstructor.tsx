import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FC } from "react";

const AppConstructor: FC = () => {
  return (
    <article className={`${styles.constructorContainer} pl-5`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </article>
  );
};

export default AppConstructor;
