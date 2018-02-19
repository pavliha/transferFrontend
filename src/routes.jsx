import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Index from './scenes/Index';
import Login from './scenes/Auth/Login/LoginScene';
import Register from './scenes/Auth/Register/RegisterScene';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store from './store';
import AuthorizedRoute from "./components/AuthorizedRoute"
import SettingsLayout from "./scenes/Profile/Settings/SettingsScene"
import Profile from "./scenes/Profile/ProfileScene"
import Dashboard from "./scenes/Dashboard"

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
        <AuthorizedRoute path="/dashboard" component={Dashboard}/>
      </Switch>
    </ConnectedRouter>
  </Provider>

