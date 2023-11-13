import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTodos from '../pages/DetailTodos';
import Home from '../pages/Home';

const Router = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: true },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home todo={todo} setTodo={setTodo} />} />
        <Route path=':id' element={<DetailTodos todo={todo} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
