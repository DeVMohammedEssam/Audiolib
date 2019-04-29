import React from "react";
const AnalysisCard = props => (
    <div className="analysis__card">
        <img src={props.src} alt="" />
        <span className="text">{props.text}</span>
        <span className="number">{props.number}</span>
    </div>
);
export default AnalysisCard;