import React from "react";
const BookCard = ({ icon, title}) => (
    <div className="add-card">
       
       <i className={icon}></i>
        <p>{title}</p>
    </div>
)
export default BookCard;