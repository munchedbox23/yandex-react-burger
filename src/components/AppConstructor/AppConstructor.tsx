import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { useAppSelector } from "../../services/store/hooks";
import { Preloader } from "../Preloader/Preloader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FC } from "react";

const AppConstructor: FC = () => {
  const getIngredientsRequest = useAppSelector(
    (store) => store.ingredients.getIngredientsRequest
  );

  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.contentWrapper} pb-10 pl-5`}>
        {getIngredientsRequest ? (
          <Preloader />
        ) : (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
      </div>
    </main>
  );
};

export default AppConstructor;
