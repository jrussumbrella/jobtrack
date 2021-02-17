import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

interface Props {
  isVisible: boolean;
  onClose(): void;
  title: string;
}

const Modal: React.FC<Props> = ({ title, isVisible, onClose, children }) => {
  return (
    <>
      {isVisible &&
        ReactDOM.createPortal(
          <>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <p className={styles.title}>{title}</p>
                <button className={styles.closeButton} onClick={onClose}>
                  <IoClose size={20} />
                </button>
              </div>
              <div className={styles.modalBody}>{children}</div>
            </div>
            <div className={styles.modalOverlay}></div>
          </>,
          document.body
        )}
    </>
  );
};

export default Modal;
