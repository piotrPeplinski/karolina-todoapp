const Modal = ({ children, onClose, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="modal">
          <button onClick={onClose}>Close</button>
          <div className="modal-content">{children}</div>
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default Modal;