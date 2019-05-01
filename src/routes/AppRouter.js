import React from 'react';
import { Route, Switch, BrowserRouter as Router, Router as rt } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import BookView from "../components/BookView";
import Dashboard from "../components/Dashboard";
import { hot } from 'react-hot-loader';
import Dictophone from "../components/Dictophone.js"
import Navbar from "../components/layout/Navbar";
import history from "./history"
import PageNotFound from "../components/PageNotFound";
import "bootstrap/dist/js/bootstrap.bundle";

const AppRouter = () => {
    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/book/:id" component={BookView} />
                <Route path="/contact" component={() => (<div>contact</div>)} />
                <Route path="/privacy" component={() => (<div>privacy</div>)} />
                <Route path="/login" component={Login} />
                                <Route path="/test" component={Dictophone} />

                {/* dash board routes */}
                <Route path="/dashboard" component={Dashboard} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>

    );
}
export default AppRouter
