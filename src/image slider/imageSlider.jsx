import React, { useState } from 'react';
import dashboard from '../assets/dashboard.png';
import bar from '../assets/bar.png';
import pie from '../assets/pie.png';
import graph from '../assets/graph.png';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './ImageSlider.css';

const ImageSlider = () => {
  const list = [dashboard, bar, pie, graph];
  const [state, setState] = useState(0);

  function handleLeft() {
    setState(state === 0 ? list.length - 1 : state - 1);
  }

  function handleRight() {
    setState(state === list.length - 1 ? 0 : state + 1);
  }

  return (
    <div className="image-slider">
      <BiLeftArrow className="arrow left-arrow" onClick={handleLeft} />
      {list.map((val, index) =>
        state === index ? <img key={index} src={val} alt="error" /> : null
      )}
      <BiRightArrow className="arrow right-arrow" onClick={handleRight} />
    </div>
  );
};

export default ImageSlider;
