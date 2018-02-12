import React, {Component} from 'react'
import {connect} from "react-redux";
import LayoutContainer from "../modules/Layout/LayoutContainer"
import {getUserCargo} from "../modules/Cargo/cargo.action"
import CargoCard from "../modules/Cargo/CargoCard"


@connect(store => store.cargoReducer)
export default class MyCargo extends Component {

  componentDidMount() {
    this.props.dispatch(getUserCargo())
  }

  render() {

    const {cargos} = this.props
    return <LayoutContainer>
      <div className="container">
        {cargos.map((cargo, key) =>
          <div>
            <CargoCard key={key} cargo={cargo}/><br/>
          </div>)}
      </div>
    </LayoutContainer>
  }
}





