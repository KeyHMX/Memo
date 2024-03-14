import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {//记住这个默认语法
        const { note, id, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};
export default List;
