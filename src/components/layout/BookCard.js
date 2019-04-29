import React from "react";
const BookCard = ({ url, name, desc }) => (
    <div className="book-card">
        <div className="book-card__img-container" style={{ backgroundImage: `url(${url})` }}>
        </div>
        <div className="book-card__content">
            <span className="book-card__author-name">{name}</span>
            <span className="book-card__describtion truncate">{desc}</span>
        </div>
    </div>
)
export default BookCard;