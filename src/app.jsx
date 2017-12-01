import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Chat from './pages/Chat';
import store, {history} from './store';
import {ConnectedRouter} from 'react-router-redux'
import Route from "react-router/es/Route";
import {Switch} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Trips from "./pages/Trips";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/join/chat-with-peru" component={Chat}/>
                        <Route exact path="/join/welcome" component={Welcome}/>
                        <Route exact path="/me/matching-trips" component={Trips}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('root'));
