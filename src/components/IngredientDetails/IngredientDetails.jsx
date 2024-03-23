import PropTypes from "prop-types";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import IngredientDetail from "./IngredientDetail/IngredientDetail";

const IngredientDetails = ({ item, onClose }) => {
  const detailsList = [
    {
      id: 1,
      detailValue: item.calories,
      detailText: "Калории,ккал",
    },
    {
      id: 2,
      detailValue: item.proteins,
      detailText: "Белки, г",
    },
    {
      id: 3,
      detailValue: item.fat,
      detailText: "Жиры, г",
    },
    {
      id: 4,
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
            <li key={detail.id}>
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
  item: ingredientsPropTypes.isRequired,
};

export default IngredientDetails;
