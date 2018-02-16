import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Index from './scenes/Index';
import Login from './scenes/Auth/Login';
import Register from './scenes/Auth/Register';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store from './store';
import Drive from "./scenes/Profile/Drive/DriveCreate";
import AuthorizedRoute from "./components/AuthorizedRoute"
import SettingsLayout from "./scenes/Profile/Settings/SettingsLayout"
import Profile from "./scenes/Profile/Profile"

const history = createBrowserHistory();

export default () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <AuthorizedRoute path="/settings" component={SettingsLayout}/>
        <AuthorizedRoute path="/profile" component={Profile}/>
      </Switch>
    </ConnectedRouter>
  </Provider>

