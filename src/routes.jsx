import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store from './store';
import DashBoard from './pages/Dashboard';
import Drive from "./pages/Drive/Drive";
import Passport from "./pages/Passport";
import CargoCreate from "./pages/CargoCreate"
import CargoInfo from "./pages/CargoInfo"
import MyForm from "./pages/MyForm"
import MyCargo from "./pages/MyCargo/MyCargo"

const history = createBrowserHistory();

export default () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={DashBoard}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/passport" component={Passport}/>
        <Route exact path="/cargo/create" component={CargoCreate}/>
        <Route exact path="/drive/create" component={Drive}/>
        <Route exact path="/my/cargo" component={MyCargo}/>
        <Route exact path="/my/form" component={MyForm}/>
        <Route exact path="/cargo/:id" component={CargoInfo}/>
      </Switch>
    </ConnectedRouter>
  </Provider>

