import React, { Component } from 'react';
import { Link, withRouter, NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import { connect } from "react-redux";
class Navbar extends Component {
    state = {
        isSignedIn: localStorage.getItem("userToken") ? true : false
    }
    handleLogout = () => {
        localStorage.removeItem("userToken");
        this.props.dispatch(logout());
        window.location.href = "/"
    }
    render() {
        return (
            <nav className="custom-navbar navbar navbar-expand-md" >

                <div className="custom-navbar__logo-container">
                    <img className="custom-navbar__logo" src="/images/icons/logo.png" alt="" />
                </div>
                <button class="navbar-toggler ml-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse custom-navbar__content" id="navbarSupportedContent">

                    <div className="custom-navbar__links ">
                        <NavLink exact to="/" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">الرئيسيه</NavLink>
                        <span className="custom-navbar__vertical-line d-none d-md-block "></span>
                        <NavLink to="/privacy" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">الخصوصيه</NavLink>
                        <span className="custom-navbar__vertical-line d-none d-md-block"></span>
                        <NavLink to="/contact" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">تواصل معنا</NavLink>
                        <span className="custom-navbar__vertical-line d-none d-md-block"></span>
                        <NavLink to="/use" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">كيفية الاستخدام</NavLink>
                        {
                            this.state.isSignedIn ? (
                                <div className="custom-navbar__signed-container" data-lang="en">

                                    <span onClick={this.handleLogout} className="custom-navbar__button custom-btn custom-btn--white">الخروج</span>
                                    <Link to="/dashboard/analysis" className="custom-navbar__button custom-btn custom-btn--white ">لوحه التحكم</Link>

                                </div>



                            ) : (
                                    <div className="custom-navbar__buttons">
                                        <Link to="/login" className="custom-navbar__button custom-btn custom-btn--white">لوحه التحكم</Link>
                                    </div>
                                )
                        }
                    </div>
                </div>


            </nav >
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
})

export default connect(mapStateToProps)(withRouter(Navbar));