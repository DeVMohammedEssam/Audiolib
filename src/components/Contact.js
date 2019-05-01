
import React, { Component } from 'react';
class Contact extends Component {
    state = {
        email: "",
        name: "",
        message: ""
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }));

    }
    render() {
        return (
            <div className="contact py-5">
                <h1 className="display-4 font-weight-bold text-center mb-5">Contact Us</h1>
                <div className="container">
                    <div className="card bg-dark text-light">
                        <h3 className="card-header ">ارسل رساله</h3>
                        <div className="card-body ">
                            <ul className="list-group list-group-flush " data-lang="en">
                                <li className="list-group-item bg-dark">
                                    <input
                                        className="form-control p-4"
                                        type="text"
                                        name="name"
                                        placeholder="Name.."
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </li>
                                <li className="list-group-item bg-dark">

                                    <input
                                        className="form-control p-4"
                                        type="email"
                                        name="email"
                                        placeholder="Email.."
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />

                                </li>
                                <li className="list-group-item bg-dark">

                                    <textarea
                                        className="form-control p-4"
                                        name="message"
                                        placeholder="Message.."
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        rows="5"
                                    />

                                </li>

                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}


export default Contact;