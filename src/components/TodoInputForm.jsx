//React에서는 변수값을 변경할 때 useState의 setState를 사용
import { useState } from 'react';

const TodoInputForm = ({ todoArr, setTodoArr }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBodyHandler = (e) => {
    setBody(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const tempArr = [
      ...todoArr,
      {
        id: todoArr.length,
        title: title,
        body: body,
        isDone: false,
      }
    ];
    setTodoArr(tempArr);
  };
  return (
    <form className='inputForm'>
        <div className='inputWrap'>
          <label className='inputLabel'>
            <strong>제목</strong>
          </label>
          <input 
            className='textInput'
            onChange={onChangeTitleHandler} 
            type='text'
            ></input>
          <label className='inputLabel'>
            <strong>내용</strong>
          </label>
          <input
           className='textInput'
           onChange={onChangeBodyHandler}
           type='text'
           ></input>
        </div>
        <button className='addButton' onClick={onSubmitHandler}>
          추가하기
        </button>
      </form>
  );
};
export default TodoInputForm; 