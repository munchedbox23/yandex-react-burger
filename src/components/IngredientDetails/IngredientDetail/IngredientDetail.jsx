import styles from "./IngredientDetail.module.css";
import PropTypes from "prop-types";

const IngredientDetail = ({ detailValue, detailText }) => {
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

IngredientDetail.propTypes = {
  detailValue: PropTypes.number,
  detailText: PropTypes.string,
};

export default IngredientDetail;
