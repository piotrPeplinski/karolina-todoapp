const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="modal-overlay">
          <div className="modal">
            <ion-icon
              className="closing-x"
              name="close-outline"
              onClick={onClose}
            ></ion-icon>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

// const Modal = ({ children, onClose, isOpen }) => {
//   return (
//     <>
//       {isOpen ? (
//         <div className="modal">
//           <button onClick={onClose}>Close</button>
//           <div className="modal-content">{children}</div>
//         </div>
//       ) : (
//         null
//       )}
//     </>
//   );
// };

// export default Modal;
