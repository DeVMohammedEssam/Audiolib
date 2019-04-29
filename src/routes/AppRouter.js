import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import BookView from "../components/BookView";
import Dashboard from "../components/Dashboard";
import { hot } from 'react-hot-loader';
import Navbar from "../components/layout/Navbar";

import PageNotFound from "../components/PageNotFound";
const AppRouter = () => {

    return (
        <React.Fragment>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/book/:id" component={() => (<div>book details</div>)} />
                <Route path="/contact" component={() => (<div>contact</div>)} />
                <Route path="/privacy" component={() => (<div>privacy</div>)} />
                <Route path="/login" component={Login} />
                {/* dash board routes */}
                <Route path="/dashboard" component={Dashboard} />
                <Route component={PageNotFound} />
            </Switch>

        </React.Fragment>
    );
}
export default AppRouter
