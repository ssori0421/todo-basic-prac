import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoInputForm from './components/TodoInputForm';
import WorkingTodo from './components/WorkingTodo';
import DoneTodo from './components/DoneTodo';

const TODO = [
  {
    id: 0,
    title: '리액트 공부하기',
    body: '리액트 기초를 공부합니다.',
    isDone: false,
  },
  {
    id: 1,
    title: 'js 공부하기',
    body: 'js 기초를 공부합니다.',
    isDone: false,
  },
  {
    id: 2,
    title: 'python 공부하기',
    body: 'python 기초를 공부합니다.',
    isDone: true,
  },
];

function App() {
  ////////useState를 통해 컴포넌트에서 바뀌는 값 관리하기 //////// 
  const [todoArr, setTodoArr] = useState(TODO);
  return (
    <div className='container'>
      <Header/>
      <TodoInputForm todoArr={todoArr} setTodoArr={setTodoArr}/>
      <WorkingTodo todoArr={todoArr} setTodoArr={setTodoArr}/>
      <DoneTodo todoArr={todoArr} setTodoArr={setTodoArr}/>
    </div>
  );
}
export default App;
