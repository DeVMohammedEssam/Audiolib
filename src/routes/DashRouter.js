import React from 'react';
import { Route, Switch ,BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

import Navbar from "../components/layout/Navbar";
import history from "./history"
import PageNotFound from "../components/PageNotFound";
const AppRouter = () => {

    return (
        <React.Fragment>
                      <Navbar />
     
            <Switch>
           
                <Route exact path="/" component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/dashboard" component={Dashboard} />

                <Route component={PageNotFound} />
            </Switch>
 
        </React.Fragment>
    );
}
export default AppRouter;