import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux"

import ConfirmationModal from './ConfirmationModal';
import config from "../../config";
import {startDeleteBook} from "../../redux/actions/dashboard"
import Axios from "axios";
class BookCard extends Component {
    state = {
        redirect: false,
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
    deleteBook = (e) => {
        e.preventDefault();
        this.setState(() => ({ redirect: false }));
       this.props.dispatch(startDeleteBook(this.props.id)).then(()=>{
                $("button[data-dismiss='modal'").trigger("click");
            
       })
     
    }
    componentDidMount() {
        const truncateText = (textSelector, maxLetters = 70) => {
            const trimmed = $(`${textSelector}`);
            let shortText = $.trim(trimmed.text()).substring(0, maxLetters)
                .split(" ").slice(0, -1).join(" ") + "...";
            trimmed.text(shortText);
        }
        //text truncate end
        truncateText("#" + this.props.id)
    }
    render() {
        const { id, url, name, desc, clickable = false, hasDelete = false } = this.props;
        if (clickable && this.state.redirect && !hasDelete) {
            return (<Redirect push to={`/book/${id}`} />)
        }
        return (
            <div className="book-card-container" >
                <div className={`book-card`} onClick={this.handleCardClick}>

                    <div className={`book-card `} onClick={this.handleCardClick}>

                        <div className="book-card__img-container" style={{ backgroundImage: `url(${url})` }}>
                        </div>
                        <div className="book-card__content ">
                            <span className="book-card__author-name">{name}</span>
                            <span className="book-card__describtion" id={id}>{desc}</span>
                        </div>
                        {hasDelete ? (
                            <React.Fragment>
                                <button className="delete-bookCard btn" data-toggle="modal" data-target="#confirmationModal" onClick={(e) => { e.preventDefault() }} >
                                    <i className="fas fa-backspace fa-2x"></i>
                                </button>
                                <ConfirmationModal actionHandler={this.deleteBook} />
                            </React.Fragment>
                        ) : ("")
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(BookCard);