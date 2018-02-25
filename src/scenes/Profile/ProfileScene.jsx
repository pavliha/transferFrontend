import React from "react";
import {Route, Switch} from "react-router-dom"
import Cargo from "./Cargo/CargoScene"
import SettingsLayout from "./Settings/SettingsScene"
import Cargos from "./Cargo/CargosScene"
import DriveCreate from "./Drive/Create/CreateScene"
import CargoCreate from "./Cargo/CargoCreateScene"
import Layout from "../../components/Layout/Layout"

export default () =>
  <Layout>
    <Switch>
      <Route exact path='/profile/drive/create' component={DriveCreate}/>
      <Route exact path="/profile/cargo" component={Cargos}/>
      <Route exact path="/profile/cargo/create" component={CargoCreate}/>
      <Route exact path="/profile/cargo/:id" component={Cargo}/>
      <Route path='/settings' component={SettingsLayout}/>
    </Switch>
  </Layout>