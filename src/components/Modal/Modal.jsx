import modalStyles from "./Modal.module.css";
import PropTypes from "prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";

const Modal = ({ children, title, onClose }) => {
  return createPortal(
    <div className={modalStyles.modal}>
      <div className={`${modalStyles.wrapper} pt-10 pb-15`}>
        <header className={`${modalStyles.heading} mr-10 ml-10`}>
          <h2 className={`${modalStyles.title} text text_type_main-large`}>
            {title}
          </h2>
          <div className={modalStyles.closeBtn}>
            <CloseIcon onClick={onClose} type="primary" />
          </div>
        </header>
        <main className={modalStyles.content}>{children}</main>
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Modal;
