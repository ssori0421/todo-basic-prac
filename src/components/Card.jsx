const Card = (props) => {
  const { id, title, body, isDone, todoArr, setTodoArr } = props;
  const onClickDelete = () => {
    const tempArr = todoArr.filter((v) => v.id !== id);
    // setTodoArr를 통해서 todoArr -> tempArr
    setTodoArr(tempArr);
  };
  const onClickDone = () => {
    if (isDone === false) {
      const tempArr = todoArr.map((v) =>
        //선택된 카드이면 value값에서 나머지는 그대로 두고 isDOne은 true로 한다(그럼 그 카드는 doneContainer로 가겠지?)
        //선택된 카드가 아니면 그 카드는 그대로 둔다
        v.id === id ? { ...v, isDone: true } : v
      );
      setTodoArr(tempArr);
      // console.log(tempArr)
    }

    if (isDone === true) {
      const tempArr = todoArr.map((v) =>
        //선택된 카드이면 value값에서 나머지는 그대로 두고 isDOne은 flase로 한다(그럼 그 카드는 todoContainer로 가겠지?)
        //선택된 카드가 아니면 그 카드는 그대로 둔다
        v.id === id ? { ...v, isDone: false } : v
      );
      setTodoArr(tempArr);
    }
  };

  return (
    <div className='cardWrap'>
      <div className='card'>
        <div className='cardTitle'>{title}</div>
        <p>{body}</p>
        <div className='buttonWrap'>
          <button className='deletebutton' onClick={onClickDelete}>
            삭제하기
          </button>
          <button className='completebutton' onClick={onClickDone}>
            {isDone ? '취소' : '완료'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
