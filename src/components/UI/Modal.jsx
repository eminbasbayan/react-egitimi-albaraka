import { createPortal } from 'react-dom';
import './Modal.css';
import { useEffect, useState } from 'react';

function Modal({ onCloseModal, title, description }) {
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    console.log("component DOM'da ilk kez render olduğunda!");

    let count = 0;

    const id = setInterval(() => {
      count += 1;
      setCountState(count);
      console.log(count);

      console.log('Çalıştı');
    }, 1000);

    // clean-up function
    return () => {
      clearInterval(id);
      console.log("component DOM'dan kaldırıldığında!");
    };
  }, []);

  return createPortal(
    <div className="modal fade">
      <div className="modal-overlay" onClick={() => onCloseModal()}></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              {title} {countState}
            </h1>
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
