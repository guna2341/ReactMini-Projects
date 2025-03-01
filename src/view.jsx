import React, { useState } from "react";
import "./View.css";
import Selector from "./selector/selector";
import Color from "./colorgenerator/color";
import Star from "./star ratings/star";
import ImageSlider from "./image slider/imageSlider";
import Qrcode from "./qrcode/qrcode";
import Github from "./github profile finder/github";
import { TicTacToe } from "./tictactoe";

function View() {
    const [id, setId] = useState(0);
    const data = [
        { id: 0, component: <Selector />, title: "Selector" },
        { id: 1, component: <Color />, title: "Color Generator" },
        { id: 2, component: <Star />, title: "Star Rating" },
        { id: 3, component: <ImageSlider />, title: "Image Slider" },
        { id: 4, component: <Qrcode />, title: "QR Code" },
        { id: 5, component: <Github />, title: "GitHub Finder" },
        { id: 6, component: <TicTacToe />, title: "Tic-Tac-Toe" },
    ];

    return (
        <div className="view-container">
            <div className="sidebar">
                {data.map((val) => (
                    <div
                        key={val.id}
                        className={`nav-item ${id === val.id ? "active" : ""}`}
                        onClick={() => setId(val.id)}
                    >
                        {val.title}
                    </div>
                ))}
            </div>

            <div className="content">
                {data.map((val) =>
                    val.id === id ? (
                        <div key={val.id} className="component-container">
                            {val.component}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default View;
