import React from "react";
import LayoutContainer from "../../components/Layout/LayoutContainer"
import {Route, Switch} from "react-router-dom"
import Cargo from "./Cargo/Cargo"
import SettingsLayout from "./Settings/SettingsLayout"
import Cargos from "./Cargo/Cargos"
import DriveCreate from "./Drive/DriveCreate"
import Drives from "./Drive/Drives"
import CargoCreate from "./Cargo/CargoCreate"

export default () =>
  <LayoutContainer>
    <Switch>
      <Route exact path='/profile/drive' component={Drives}/>
      <Route exact path='/profile/drive/create' component={DriveCreate}/>
      <Route exact path="/profile/cargo" component={Cargos}/>
      <Route exact path="/profile/cargo/create" component={CargoCreate}/>
      <Route exact path="/profile/cargo/:id" component={Cargo}/>
      <Route path='/settings' component={SettingsLayout}/>
    </Switch>
  </LayoutContainer>