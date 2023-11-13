const DoneBtn = ({ clickDoneButtonHandler, task, children }) => {
  return (
    <button
      className='btn green'
      onClick={() => {
        clickDoneButtonHandler(task.id);
      }}
    >
      {children}
    </button>
  );
};

export default DoneBtn;
