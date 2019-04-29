import React, { Component } from 'react';
import { Link, withRouter,NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import { connect } from "react-redux";
class Navbar extends Component {
    state = {
        isSignedIn: localStorage.getItem("userToken") ? true : false
    }
    handleLogout = () => {
        localStorage.removeItem("userToken");
        this.props.dispatch(logout());
        window.location.href="/"
    }
    render() {
        return (
            <nav className="custom-navbar" >
                <div className="custom-navbar__logo-container">
                    <img className="custom-navbar__logo" src="/images/icons/logo.png" alt="" />
                </div>
                <div className="custom-navbar__content">
                    <div className="custom-navbar__links">
                          <NavLink to="/" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">الرئيسيه</NavLink>
                        <span className="custom-navbar__vertical-line"></span>
                        <NavLink to="/privacy" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">الخصوصيه</NavLink>
                               <span className="custom-navbar__vertical-line"></span>
                        <NavLink to="/contact us" className="custom-navbar__button custom-btn custom-btn--white" activeClassName="custom-btn--active">تواصل معنا</NavLink>
                    </div>
                    {
                        this.state.isSignedIn ? (
                            <div className="custom-navbar__signed-container">
                               <div className="custom-navbar__links">
                                 <span onClick={this.handleLogout} className="custom-navbar__button custom-btn custom-btn--white">الخروج</span>
                                    <Link to="/dashboard/analysis" className="custom-navbar__button custom-btn custom-btn--white">لوحه التحكم</Link>

                    </div>
                               
                            </div>
                        ) : (
                                <div className="custom-navbar__buttons">
                                    <Link to="/login" className="custom-navbar__button custom-btn custom-btn--white">لوحه التحكم</Link>
                                    
                                </div>
                            )
                    }

                </div>

            </nav >
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
})

export default connect(mapStateToProps)(withRouter(Navbar));