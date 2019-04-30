import React, { Component } from 'react';
import { hidden } from 'ansi-colors';
import {sendMessage} from "../../redux/actions/index"
import {connect } from "react-redux"
class GetBookModal extends Component {
    state = {
        email: "",
        name: "",
        phone: "",
        message: "",
        sentSuccessfully: false
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //axios request
        this.props.dispatch(sendMessage(this.state)).then(()=>{
        this.setState(() => ({ sentSuccessfully: true }))//should be in axios request callback

        })
     
    }
    render() {
        return (
            <div className="modal fade" id="getBookModal" tabIndex="-1" role="dialog" aria-labelledby="getBookModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            {this.state.sentSuccessfully ? (
                                <div className="sent-successfully">
                                    <div> <i className="fa fa-right"> </i></div>
                                    <span> <img src="" alt="" /> سوف يتم التواصل معك قريبا</span>
                                </div>
                            ) :
                                (
                                    <form action="" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                required
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                type="text"
                                                className="main-input form-control"
                                                name="email"
                                                placeholder="Email..."


                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                required
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                type="text"
                                                className="main-input form-control"
                                                name="name"
                                                placeholder="Name..."

                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                required
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                type="number"
                                                className="main-input form-control"
                                                name="phone"
                                                placeholder="Phone..."

                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                value={this.state.message}
                                                onChange={this.handleChange}
                                                className="main-input form-control"
                                                name="message"
                                                placeholder="Message..."
                                                rows="7"
                                            >
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                value="ارسال الطلب الان"
                                                className="btn btn-secondary w-100"
                                            />
                                        </div>
                                        <button className="hiddenClose" style={{ visibility: "hidden" }} type="button" data-dismiss="modal"></button>

                                    </form>
                                )}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(GetBookModal);