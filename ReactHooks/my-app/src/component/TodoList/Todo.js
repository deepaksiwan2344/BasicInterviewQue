import React, { useState } from "react";

const Todo = () => {
  const [activity, setactivity] = useState("");
  const [listData, setListData] = useState([]);

  function AddList() {
    setListData((listData) => {
      const UpdataList = [...listData, activity];
      console.log(UpdataList);
      return UpdataList;
    });
  }
  function updatedListData(i) {
    const updateddata = listData.filter((elem, id) => {
      return i!== id;
      
    });
    setListData(updateddata);
  }

  function Remove(){
    setListData([])
  }

  return (
    <>
      <div className="container">
        <div className="Header">
          {" "}
          Todo List
          <input
            type="text"
            value={activity}
            onChange={(e) => setactivity(e.target.value)}
            placeholder="Add activity"
          ></input>
          <button onClick={AddList}>Add</button>
        </div>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <div key={i}>
                <span>{data}</span>
                <span>
                  <button onClick={() => updatedListData(i)}>Remove</button>
                </span>
              </div>
            );
          })}
      </div>
     {listData?.length > 0 && <button onClick={Remove}>Remove All</button>}
    </>
  );
};

export default Todo;
