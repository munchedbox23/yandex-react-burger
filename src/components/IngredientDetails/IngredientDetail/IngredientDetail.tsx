import { FC } from "react";
import styles from "./IngredientDetail.module.css";
import { IIngredientDetails } from "../../../types/ingredient-types";

const IngredientDetail: FC<Omit<IIngredientDetails, "id">> = ({
  detailValue,
  detailText,
}) => {
  return (
    <div className={styles.detail}>
      <p className="text text_type_main-default text_color_inactive">
        {detailText}
      </p>
      <span className="text text_type_main-default text_color_inactive">
        {detailValue}
      </span>
    </div>
  );
};

export default IngredientDetail;
