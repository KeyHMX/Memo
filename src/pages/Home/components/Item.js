const Item = ({ note, id, date, time, submittingStatus, deleteData }) => {
  function deleteItem() {
    submittingStatus.current = true; //current可能更注重即时性吧
    deleteData(
      //传参可重用，传出去
      function (prev) {
        return prev.filter((item) => item.id !== id);
      },
    );
  }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <button onClick={deleteItem} className="remove">
        删除
      </button>
    </div>
  );
};
export default Item;
