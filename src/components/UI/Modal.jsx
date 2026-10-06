import { createPortal } from 'react-dom';
import './Modal.css';

function Modal({ onCloseModal, title, description }) {
  return createPortal(
    <div className="modal fade">
      <div className="modal-overlay" onClick={() => onCloseModal()}></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => onCloseModal()}
            ></button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onCloseModal()}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onCloseModal()}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

export default Modal;
