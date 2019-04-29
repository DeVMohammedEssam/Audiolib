import React from 'react';
import { Route, Switch ,BrowserRouter as Router , Router as rt } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import BookView from "../components/BookView";

import Dashboard from "../components/Dashboard";
import { hot } from 'react-hot-loader';

import Navbar from "../components/layout/Navbar";
import history from "./history"
import PageNotFound from "../components/PageNotFound";
const AppRouter = () => {

    return (
    
           
      <Router history={history}>
           <Navbar />
     
            <Switch>
           
                <Route exact path="/" component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/dashboard" component={Dashboard} />
                <Route  path="/book/:id" component={BookView} />

                <Route component={PageNotFound} />
            </Switch> </Router>
    
    );
}
export default AppRouter
