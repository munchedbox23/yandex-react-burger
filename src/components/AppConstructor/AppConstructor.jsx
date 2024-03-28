import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const AppConstructor = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.contentWrapper} pb-10 pl-5`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
};

export default AppConstructor;
