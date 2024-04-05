import styles from "./SelectedBun.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

export const SelectedBun = ({
  isHover,
  selectedBun,
  position,
  ingredientType,
}) => {
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
    >
      <span className={styles.elementRow}>
        <span>Перетащите булку</span>
      </span>
    </div>
  );
};