import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/features/ingredients/ingredientsSlice";
import { useEffect } from "react";
import { Preloader } from "../Preloader/Preloader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const AppConstructor = () => {
  const dispatch = useDispatch();
  const getIngredientsRequest = useSelector(
    (store) => store.ingredients.getIngredientsRequest
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

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
