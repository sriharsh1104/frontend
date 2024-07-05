import { ReactNode } from "react";
import Modal from "react-bootstrap/Modal";
import "./CustomModal.scss";

const CustomModal = ({
  show,
  onHide,
  children,
  className,
  title,
  closeButton,
}: {
  show?: boolean;
  onHide?: any;
  children?: ReactNode;
  className?: string;
  title?: string;
  closeButton?: any;
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className={`custom-modal ${className ? className : ""}`}
    >
      {title ? (
        <Modal.Header closeButton={closeButton ? closeButton : ""}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      ) : (
        ""
      )}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
