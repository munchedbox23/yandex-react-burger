import styles from "./AppearingButtons.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TButtonsProps = {
  isVisible: boolean;
  onCancel: () => void;
};

export const AppearingButtons: FC<TButtonsProps> = ({
  isVisible,
  onCancel,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible ? (
        <motion.div
          className={`${styles.btnsWrapper} mt-6`}
          initial={{ x: "500px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
