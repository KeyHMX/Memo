import List from "./components/List";
import Edit from "./components/Edit";
import { useState, useRef, useEffect } from "react";
import "./index.css";
async function fetchData(setData) {
  const res = await fetch("http://localhost:3000/posts");
  const { data } = await res.json();
  setData(data);
}
async function fetchSetData(data) {
  await fetch("http://localhost:3000/posts", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]); //再看下视频的这个部分，为什么要
  const submittingStatus = useRef(false);
  useEffect(() => {
    if (!submittingStatus.current) return;
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
      {/* 为何 deleteData={setData} */}
    </div>
  );
};
export default Home;
