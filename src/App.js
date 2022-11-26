import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <h3>My Todo List</h3>
        <h3>React</h3>
      </header>
      <form className='inputForm'>
        <div className='inputWrap'>
          <lable className='inputLabel'>
            <strong>제목</strong>
          </lable>
          <input className='textInput' type='text'></input>
          <label className='inputLabel'>
            <strong>내용</strong>
          </label>
          <input className='textInput' type='text'></input>
        </div>
        <button className='addButton'>추가하기</button>
      </form>
    </div>
  );
}
export default App;
