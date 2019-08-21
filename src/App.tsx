import React, { useState } from 'react';
import { Todo } from './types';
import styled from 'styled-components';

interface State {
  taskList: Array<{
    id: number,
    status: 'todo' | 'done',
    text: string,
    created_date: Date,
  }>
}

const initialState = {
  taskList: []
}

const App = () => {
  const [state, setState] = useState<State>(initialState);

  return (
    <Wrapper>
      <h1>TODO APP with TypeScript</h1>
      <Head>Todo tasks</Head>
      <ItemWrapper>
        <li>
          <div></div>
          <span>Task2</span>
        </li>
        <li>
          <div></div>
          <span>Task3</span>
        </li>
      </ItemWrapper>
      <Head>Done Task</Head>
      <ItemWrapper>
        <li>
          <div></div>
          <span>Task1</span>
        </li>
      </ItemWrapper>
      <AddTask>
        <input type="text"/>
        <div>add new task</div>
      </AddTask>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 90%;
  max-width: 640px;
  margin: 0 auto;
`;
const AddTask = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  > input {
    height: 20px;
    width: 200px;
  }
  > div {
    margin-left: 10px;
    paddingL 3px 10px;
    border: 1px solid #333;
    color: #efefef;
    background-color: #333;
    border-readius: 3px;
  }
`;

const Head = styled.h2`
  margin-bottom: 10px;
`;

const ItemWrapper = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    justify-items: center;
    list-style: none;
    background-color: #efefef;
    font-size: 24px;
    padding: 5px 15px;
    margin-bottom: 2px;
    border-radius: 4px;
    > div {
      width: 20px;
      height: 20px;
      border: 1px solid #ccc;
      border-radius: 50%;
      background-color: white;
    }
    > span {
      padding-left: 10px;
    }
  }
`;

export default App;

