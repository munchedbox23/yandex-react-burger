import styles from "./AppConstructor.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../utils/constants";

const AppConstructor: FC = () => {
  return (
    <motion.main
      className={styles.mainContainer}
      initial={"hidden"}
      animate={"visible"}
      variants={fadeInVariant}
    >
      <div className={`${styles.contentWrapper} pb-10 pl-5`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </motion.main>
  );
};

export default AppConstructor;
