import styles from "./Buttons.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const Buttons = ({ isVisible, onCancel }) => {
  return (
    isVisible && (
      <div className={`${styles.btnsWrapper} mt-6`}>
        <Button
          onClick={onCancel}
          htmlType="button"
          type="secondary"
          size="medium"
        >
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    )
  );
};

Buttons.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
};
