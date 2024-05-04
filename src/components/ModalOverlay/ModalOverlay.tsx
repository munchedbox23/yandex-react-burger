import { FC } from "react";
import styles from "./ModalOverlay.module.css";

type TOverlayProps = {
  onClose: () => void;
};

const ModalOverlay: FC<TOverlayProps> = ({ onClose }) => {
  return <div onClick={onClose} className={styles.overlay}></div>;
};

export default ModalOverlay;
