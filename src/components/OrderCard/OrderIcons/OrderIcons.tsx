import { FC } from "react";
import styles from "./OrderIcons.module.css";

type TOrderIconsProps = {
  icons: Array<string>;
};

export const OrderIcons: FC<TOrderIconsProps> = ({ icons }) => {
  return (
    <div className={styles.orderIcons}>
      {icons.slice(0, 5).map((icon, index) => (
        <div
          key={index}
          className={styles.icon}
          style={{ zIndex: 5 - index, left: `-${15 * index}px` }}
        >
          <img
            className={styles.iconImage}
            src={icon}
            alt="Изображение ингредиента"
          />
        </div>
      ))}
      {icons.length > 5 && (
        <span
          className={`${styles.numberIcon} text text_type_main-default`}
        >{`+${icons.length - 5}`}</span>
      )}
    </div>
  );
};
