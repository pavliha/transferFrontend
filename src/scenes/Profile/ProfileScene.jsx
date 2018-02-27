import React from "react";
import {Route, Switch} from "react-router-dom"
import Cargo from "./Cargo/CargoScene"
import SettingsScene from "./Settings/SettingsScene"
import Cargos from "./Cargo/CargosScene"
import DriveCreateScene from "./Drive/Create/CreateScene"
import CargoCreateScene from "./Cargo/Create/CreateScene"
import Layout from "../../components/Layout/Layout"

export default () =>
  <Layout>
    <Switch>
      <Route exact path='/profile/drive/create' component={DriveCreateScene}/>
      <Route exact path="/profile/cargo" component={Cargos}/>
      <Route exact path="/profile/cargo/create" component={CargoCreateScene}/>
      <Route exact path="/profile/cargo/:id" component={Cargo}/>
      <Route path='/settings' component={SettingsScene}/>
    </Switch>
  </Layout>