import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import $ from "jquery";

class BookCard extends Component {
    state = {
        redirect: false
    }
    handleCardClick = (e) => {
        if (this.props.clickable) {
            $(e.target).parent(".book-card").addClass("clicked");
            if ($(e.target).hasClass(".book-card")) $(this).addClass("clicked");
            setTimeout(() => {
                this.setState(() => ({ redirect: true }));
            }, 1000)
        }
    }
    componentDidMount() {
        const truncateText = (textSelector, maxLetters = 70) => {
            const trimmed = $(`${textSelector}`);
            let shortText = $.trim(trimmed.text()).substring(0, maxLetters)
                .split(" ").slice(0, -1).join(" ") + "...";
            trimmed.text(shortText);

        }
        //text truncate end
        truncateText("#"+this.props.id)
    }
    render() {
        const { id, url, name, desc, clickable = false } = this.props;
        if (clickable && this.state.redirect) {
            return (<Redirect push to={`/book/${id}`} />)
        }
        return (

            <div className={`book-card `} onClick={this.handleCardClick}>

                <div className="book-card__img-container" style={{ backgroundImage: `url(${url})` }}>
                </div>
                <div className="book-card__content ">
                    <span className="book-card__author-name">{name}</span>
                    <span className="book-card__describtion" id={id}>{desc}</span>
                </div>
            </div>

        );
    }
}

export default BookCard;