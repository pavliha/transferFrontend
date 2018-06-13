import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IndexScene from './@index/IndexScene'
import Header from './Header'
import CargoListScene from './@cargo/CargoListScene'
import withTheme from '../utils/withTheme'
import CargoCreateScene from './@cargo-create/CargoCreateScene'
import CargoScene from './@cargo-id/CargoScene'
import RegisterScene from './@register/RegisterScene'
import LoginScene from './@login/LoginScene'

const LayoutScene = () =>
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route exact path="/login" component={LoginScene} />
      <Route exact path="/register" component={RegisterScene} />
      <Route exact path="/cargo" component={CargoListScene} />
      <Route exact path="/cargo/create" component={CargoCreateScene} />
      <Route exact path="/cargo/:id" component={CargoScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
