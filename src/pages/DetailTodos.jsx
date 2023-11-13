import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
// import Home from '../pages/Home';

function DetailTodos({ todo }) {
  const navigate = useNavigate();
  const params = useParams();

  const foundTodo = todo.find((task) => {
    return task.id === parseInt(params.id);
  });
  console.log(foundTodo);
  return (
    <>
      <DetailDiv>
        <h4>ID: {foundTodo.id}</h4>
        <FlexDiv>
          <h3>{foundTodo.title}</h3>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            이전으로
          </button>
        </FlexDiv>
        <div style={{ 'margin-top': '40px' }}>{foundTodo.text}</div>
      </DetailDiv>
    </>
  );
}

export default DetailTodos;

const DetailDiv = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid rgb(238, 238, 238);
  padding: 50px;
  margin-top: 33vh;
  margin-left: 33vw;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
