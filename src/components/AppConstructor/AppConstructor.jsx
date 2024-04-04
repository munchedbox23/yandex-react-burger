import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/features/ingredients/ingredientsSlice";
import { useEffect } from "react";
import { Preloader } from "../Preloader/Preloader";

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
          <>
            {" "}
            <BurgerIngredients
            /* totalDispach={totalPriceDispatch}  */
            />
            {/* <BurgerConstructor totalPrice={totalPriceState.total} /> */}
          </>
        )}
      </div>
    </main>
  );
};

export default AppConstructor;
