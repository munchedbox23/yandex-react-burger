import styles from "./AppConstructor.module.css";
import PropTypes from "prop-types";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";

const AppConstructor = ({ data }) => {
  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.contentWrapper} pb-10 pl-5`}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data} />
      </div>
    </main>
  );
};

AppConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default AppConstructor;
