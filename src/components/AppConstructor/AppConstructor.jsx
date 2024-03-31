import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { SelectedIngredientsContext } from "../../services/ingredientsContext";
import { orderReducer } from "../../reducers/orderReducer";
import { useReducer } from "react";
import { totalPriceReducer } from "../../reducers/totalPriceReducer";

const AppConstructor = () => {
  const [selectedIngredientsState, selectedIngredientsDispatch] = useReducer(
    orderReducer,
    { selectedBun: null, selectedIngredients: [] }
  );
  const [totalPriceState, totalPriceDispatch] = useReducer(totalPriceReducer, {
    total: 0,
  });

  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.contentWrapper} pb-10 pl-5`}>
        <SelectedIngredientsContext.Provider
          value={{ selectedIngredientsState, selectedIngredientsDispatch }}
        >
          <BurgerIngredients totalDispach={totalPriceDispatch} />
          <BurgerConstructor totalPrice={totalPriceState.total} />
        </SelectedIngredientsContext.Provider>
      </div>
    </main>
  );
};

export default AppConstructor;
