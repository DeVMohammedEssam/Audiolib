import React, { Component } from 'react'
import { Route, Switch ,BrowserRouter as Router } from "react-router-dom";
import Books from "./Books"
import BookForm from "./AddBookForm"

import DashNavbar from "./layout/DashNavbar"
export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <DashNavbar />
          <div className="container">

    
          <Switch>
              
              <Route path="/dashboard/requests"  component={()=>(<div>requests</div>)} />
                <Route exact path="/dashboard/books"  component={Books} />
              <Route path="/dashboard/analysis"  component={()=>(<div>analysis</div>)} />
              <Route path="/dashboard/books/new"  component={BookForm} />

          </Switch>
           </div>
      </div>
    )
  }
}
