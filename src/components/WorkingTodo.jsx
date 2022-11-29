import Card from './Card';

const WorkingTodo = ({ todoArr, setTodoArr }) => {
  const working = todoArr.filter((v) => v.isDone === false);

  return (
    <div className='todoContainer'>
      <h2>Working...🔥</h2>
      <div className='cardContainer'>
        {working.map((v) => (
          <Card
            key={v.id}
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
export default WorkingTodo;
