import React from 'react';
import {Provider} from 'react-redux';
import Chat from './pages/Chat';
import store, {history} from './store';
import {ConnectedRouter} from 'react-router-redux'
import Route from "react-router/es/Route";
import {Switch} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Trips from "./pages/Trips";
import Holidays from "./pages/Holidays";
import Trip from "./pages/Trip";


export default () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/join/chat-with-peru" component={Chat}/>
                <Route exact path="/join/welcome" component={Welcome}/>
                <Route exact path="/me/matching-trips" component={Trips}/>
                <Route exact path="/personalised-holidays" component={Holidays}/>
                <Route exact path="/me/matching-trips/:trip" component={Trip}/>
            </Switch>
        </ConnectedRouter>
    </Provider>


