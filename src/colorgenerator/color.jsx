import React, { useState } from "react";
import "./Color.css"; 

const Color = () => {
  const [color, setColor] = useState("hex");
  const [gen, setGen] = useState("");
  const [word, setWord] = useState("");

  function index(length) {
    return Math.floor(Math.random() * length);
  }

  function generateColor() {
    if (color === "hex") {
      setGen(handleHexColor());
      setWord("Hex Color");
    } else {
      setGen(handleRgbColor());
      setWord("RGB Color");
    }
  }

  function handleHexColor() {
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let temp = "#";
    for (let i = 0; i <= 5; i++) {
      temp += hex[index(hex.length)];
    }
    return temp;
  }

  function handleRgbColor() {
    let r = index(256);
    let g = index(256);
    let b = index(256);
    return `rgb(${r},${g},${b})`;
  }

  return (
    <div className="color-container" style={{ backgroundColor: gen }}>
      <div className="controls">
        <button className={`btn ${color === "hex" ? "active" : ""}`} onClick={() => setColor("hex")}>
          Hex Color
        </button>
        <button className={`btn ${color === "rgb" ? "active" : ""}`} onClick={() => setColor("rgb")}>
          RGB Color
        </button>
        <button className="btn generate" onClick={generateColor}>
          Generate Color
        </button>
      </div>
      <div className="display-text">
        {word && <p>{word}: <span>{gen}</span></p>}
      </div>
    </div>
  );
};

export default Color;
