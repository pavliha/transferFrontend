import React from 'react';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {ConnectedRouter} from 'react-router-redux'
import Route from "react-router/es/Route";
import {Switch} from "react-router-dom";




export default () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>

            </Switch>
        </ConnectedRouter>
    </Provider>


