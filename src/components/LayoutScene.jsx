import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IndexScene from './@index/IndexScene'
import Header from './Header'
import CargoScene from './@cargo/CargoScene'
import withTheme from '../utils/withTheme'
import Geosuggest from './Geosuggest'

const LayoutScene = () =>
  <main>

    <Header />

    <Geosuggest />
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route exact path="/cargo" component={CargoScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
