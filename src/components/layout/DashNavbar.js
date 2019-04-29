import React, { Component } from 'react'
import { Link, withRouter,NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import { connect } from "react-redux";
export default class DashNavbar extends Component {
  render() {
    return (
      <div>
          <nav className="dashnavbar" >
                    <ul class="nav justify-content-center">
            
                <li class="nav-item">
                    <NavLink activeClassName="dashnavbar__item--active" className="nav-link" to="/dashboard/analysis">
                    الاحصائيات          
                    </NavLink>
                    
                </li>
                <li class="nav-item">
                     <NavLink activeClassName="dashnavbar__item--active" className="nav-link" to="/dashboard/books">
                    الكتب          
                    </NavLink>
                </li>
                <li class="nav-item">
                     <NavLink activeClassName="dashnavbar__item--active" className="nav-link" to="/dashboard/requests">
                    الطلابات          
                    </NavLink>
                </li>
            
                </ul>
             
            </nav >
      </div>
    )
  }
}
