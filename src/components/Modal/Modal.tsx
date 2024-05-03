import modalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import { FC, ReactNode, useCallback, useEffect } from "react";

type TModalProps = {
  children: ReactNode;
  title: string;
  onClose: () => void;
};

const Modal: FC<TModalProps> = ({ children, title, onClose }) => {
  const closeByEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeByEscape);

    return () => {
      document.addEventListener("keydown", closeByEscape);
    };
  }, [onClose, closeByEscape]);

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
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
