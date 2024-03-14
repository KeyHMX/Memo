import { useState } from "react";
import { v4 } from "uuid";
const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  function dateChange(e) {
    setDate(e.target.value);
  }
  function timeChange(e) {
    setTime(e.target.value);
  }
  console.log(note, date, time);
  function addItem() {
    submittingStatus = true;
    add(function (prevData) {
      return [
        { id: v4(), note, date, time },
        ...prevData, //这块蛮搞笑的
      ];
    });
  }

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事：</p>
      <input type="text" value={note} onChange={noteChange}></input>
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange}></input>
      <p>时间：</p>
      <input type="time" value={time} onChange={timeChange}></input>
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};
export default Edit;
