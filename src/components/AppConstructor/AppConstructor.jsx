import React from "react";
import styles from "./AppConstructor.module.css";
import ingredients from "../../utils/ingredients";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export default class AppConstructor extends React.Component {
  render() {
    return (
      <main className={styles.mainContainer}>
        <div className={`${styles.contentContainer} pb-10 pl-5`}>
          <BurgerIngredients data={ingredients} />
          <BurgerConstructor data={ingredients} />
        </div>
      </main>
    );
  }
}
