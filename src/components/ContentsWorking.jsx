import DeleteBtn from './btn/DeleteBtn';
import DoneBtn from './btn/DoneBtn';
import { Link } from 'react-router-dom';

const ContentsWorking = ({ todo, clickDeleteButtonHandler, clickDoneButtonHandler }) => {
  return (
    <div>
      <div className='title'>Working..🔥</div>
      <div className='todos'>
        {todo
          .filter((task) => {
            return task.isDone === false;
          })
          .map((task) => {
            return (
              <div key={task.id} className='content'>
                <Link to={`/${task.id}`}>상세보기</Link>
                <div className='contentTitle'>{task.title}</div>
                <div>{task.text}</div>
                <div className='contentBtns'>
                  <DeleteBtn clickDeleteButtonHandler={clickDeleteButtonHandler} task={task} />
                  <DoneBtn clickDoneButtonHandler={clickDoneButtonHandler} task={task}>
                    완료
                  </DoneBtn>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ContentsWorking;
