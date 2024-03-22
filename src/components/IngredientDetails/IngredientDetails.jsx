import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import IngredientDetail from "./IngredientDetail/IngredientDetail";

const IngredientDetails = ({ item, onClose }) => {
  const detailsList = [
    {
      detailValue: item.calories,
      detailText: "Калории,ккал",
    },
    {
      detailValue: item.proteins,
      detailText: "Белки, г",
    },
    {
      detailValue: item.fat,
      detailText: "Жиры, г",
    },
    {
      detailValue: item.carbohydrates,
      detailText: "Углеводы, г",
    },
  ];

  return (
    <Modal title="Детали ингридиента" onClose={onClose}>
      <img
        className={styles.image}
        src={item.image_large}
        alt={`Ингридиент: ${item.name}`}
      />
      <h4
        className={`${styles.ingredientName} text text_type_main-medium mt-4 mb-8`}
      >
        {item.name}
      </h4>
      <div className={styles.detailsWrapper}>
        <ul className={styles.detailsList}>
          {detailsList.map((detail) => (
            <li>
              <IngredientDetail
                detailValue={detail.detailValue}
                detailText={detail.detailText}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

IngredientDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default IngredientDetails;
