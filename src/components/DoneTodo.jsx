import Card from './Card';

const DoneTodo = ({ todoArr, setTodoArr }) => {
  const done = todoArr.filter((v) => v.isDone === true);
  return (
    <div className='todoContainer'>
      <h2>Done...🥳</h2>
      <div className='cardContainer'>
      {done.map((v) => (
          <Card
            key={v.id}
            // value={v}
            id={v.id}
            title={v.title}
            body={v.body}
            isDone={v.isDone}
            todoArr={todoArr}
            setTodoArr={setTodoArr}
          />
        ))}
      </div>
    </div>
  );
};
export default DoneTodo;
