import styles from "./OrderDetails.module.css";
import PropTypes from "prop-types";
import doneImage from "../../images/done.png";
import Modal from "../Modal/Modal";

const OrderDetails = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <span
        className={`${styles.orderNum} text text_type_digits-large mt-10 mb-8`}
      >
        034536
      </span>
      <h4 className="text text_type_main-medium">идентификатор заказа</h4>
      <img className="mt-15 mb-15" src={doneImage} alt="Заказ принят" />
      <div className={styles.orderDescr}>
        <p className="text text_type_main-default text_color_primary">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive mb-10">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
};

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
