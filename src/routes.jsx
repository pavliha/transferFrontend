import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store from './store';
import DashBoard from './pages/Dashboard';
import CargoFind from "./pages/CargoFind";

const history = createBrowserHistory();

export default () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/dashboard" component={DashBoard}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/cargo/find" component={CargoFind}/>
            </Switch>
        </ConnectedRouter>
    </Provider>

