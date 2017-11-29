import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ChatPage from './containers/Chat';
import store, {history} from './store';
import { ConnectedRouter} from 'react-router-redux'
import Route from "react-router/es/Route";
import {Switch} from "react-router-dom";
import WelcomePageContainer from "./containers/WelcomePageContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/join/chat-with-peru" component={ChatPage}/>
                        <Route exact path="/join/welcome" component={WelcomePageContainer}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('root'));
