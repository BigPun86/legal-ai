import React from "react";
import "./Modal.css"; // Create a separate CSS file for modal styles

const Modal = ({ show, handleClose, children }: any) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
