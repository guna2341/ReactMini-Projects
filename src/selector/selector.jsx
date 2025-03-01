import React, { useState } from "react";
import "./selector.css";

const Selector = () => {
  const [singleid, setsingleid] = useState("");
  const [method, setmethod] = useState(false);
  const [multipleid, setmultipleid] = useState([]);

  function handleSingle(id) {
    setsingleid(singleid === id ? "" : id);
  }

  function handleMultiple(id) {
    setmultipleid((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  const list = [
    { id: 1, question: "What is your name?", answer: "N Guna Nihil" },
    { id: 2, question: "What is your age?", answer: "19" },
    { id: 3, question: "Where are you from?", answer: "Coimbatore" },
  ];

  return (
    <div className="container">
      <button className="toggle-button" onClick={() => setmethod(!method)}>
        {method ? "Disable Multi-Select" : "Enable Multi-Select"}
      </button>

      {list.map((val) => (
        <div key={val.id}>
          <div
            className="item"
            onClick={!method ? () => handleSingle(val.id) : () => handleMultiple(val.id)}
          >
            <div className="question">{val.question}</div>
            <div className="icon">{method ? "☑" : "+"}</div>
          </div>

          {!method && val.id === singleid && <div className="answer">{val.answer}</div>}
          {method && multipleid.includes(val.id) && <div className="answer">{val.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Selector;
