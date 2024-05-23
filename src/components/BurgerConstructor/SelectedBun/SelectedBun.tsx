import { FC, forwardRef } from "react";
import { IIngredientsWithIdx } from "../../../types/ingredient-types";
import styles from "./SelectedBun.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { motion } from "framer-motion";

type TSelectedBunProps = {
  isHover: boolean;
  selectedBun: IIngredientsWithIdx | null;
  position: "top" | "bottom";
  ingredientType: string;
};

export const SelectedBun = forwardRef<HTMLDivElement, TSelectedBunProps>(
  ({ isHover, selectedBun, position, ingredientType }, ref) => {
    return selectedBun ? (
      <div className={styles.bun}>
        <ConstructorElement
          extraClass="ml-8"
          type={position}
          isLocked
          text={`${selectedBun?.name} (${position === "top" ? "верх" : "низ"})`}
          price={selectedBun?.price}
          thumbnail={selectedBun?.image}
        />
      </div>
    ) : (
      <div
        className={`${styles.element} ${
          position === "top" ? styles.positionTop : styles.positionBottom
        } ${isHover && ingredientType === "bun" && styles.borderClass} ml-8`}
        ref={ref}
      >
        <span className={styles.elementRow}>
          <span>Перетащите булку</span>
        </span>
      </div>
    );
  }
);

export const MSelectedBun = motion(SelectedBun);
