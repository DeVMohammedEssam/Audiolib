import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
const AppRouter = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={PageNotFound} />
            </Switch>
        </React.Fragment>
    );
}

export default AppRouter;