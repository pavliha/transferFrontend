import React from 'react';
import Route from "react-router/es/Route";
import {Switch} from "react-router-dom";
import Index from './pages/Index'
import Login from './pages/Login'
import Register from "./pages/Register";
import {createBrowserHistory} from 'history'
import {Router} from "react-router";

export default () =>

        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </Router>

