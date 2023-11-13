const initialState = [
  { id: 1, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: false },
  { id: 2, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: true },
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return state;
    default:
      return state;
  }
};

export default todo;
