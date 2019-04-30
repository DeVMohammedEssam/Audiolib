import React from "react";
const AnalysisCard = props => (
    <div className="analysis__card text-center">
        <i className={props.src} ></i>
        <h3>{props.text}</h3>
        <p className="number">{props.number}</p>
    </div>
);
export default AnalysisCard;