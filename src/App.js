import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const [inputvalue, setInputValue] = useState("");
  const [dedit, setdEdit] = useState(null);

  function onHandleAdd() {
    if (dedit !== null) {
      const updateData = [...data];
      updateData[dedit] = inputvalue;
      setData(updateData);
      setdEdit(null);
    } else {
      setData([...data, inputvalue]);
    }
    setInputValue("");
  }

  function handleEdit(d) {
    setInputValue(data[d]);
    setdEdit(d);
  }

  function handleDelete(dt) {
    setData(data.filter((d) => d !== dt));
  }

  return (
    <div className="App">
      <input
        type="text"
        className="add"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={onHandleAdd}>{dedit !== null ? "update" : "Add"}</button>

      {data.map((d, index) => (
        <div
          style={{
            display: "flex",
            width: "200px",
            gap: "30",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p
            key={index}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            {d}
          </p>
          <button
            style={{ width: "50px", height: "20px" }}
            onClick={() => handleDelete(d)}
          >
            Delete
          </button>

          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
