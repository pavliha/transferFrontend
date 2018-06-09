import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IndexScene from './@index/IndexScene'
import Header from './Header'
import CargoScene from './@cargo/CargoScene'
import withTheme from '../utils/withTheme'
import CargoCreateScene from './@createCargo/CargoCreateScene'

const LayoutScene = () =>
  <main>

    <Header />

    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route exact path="/cargo" component={CargoScene} />
      <Route exact path="/cargo/create" component={CargoCreateScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
