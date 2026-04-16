const TaskCardButton = ({ type, children }) => {
  return (
    <>
      {type === "complete" ? (
        <button className="btn btn-green">
          <ion-icon name="trash-outline"></ion-icon>
          {children}
        </button>
      ) : null}
      {type === "delete" ? (
        <button className="btn btn-red">
          <ion-icon name="trash-outline"></ion-icon>
          {children}
        </button>
      ) : null}
      {type === "taskDetails" ? (
        <button className="btn btn-full">{children}</button>
      ) : null}
    </>
  );
};

export default TaskCardButton;
