import React from 'react';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {ConnectedRouter} from 'react-router-redux'
import Route from "react-router/es/Route";
import {Switch} from "react-router-dom";
import Index from './pages/Index'
import Expenses from './pages/Expenses'


export default () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Index}/>
                {/*<Route exact path="/daily" component={Index}/>*/}
                <Route exact path="/monthly" component={Expenses}/>
            </Switch>
        </ConnectedRouter>
    </Provider>


