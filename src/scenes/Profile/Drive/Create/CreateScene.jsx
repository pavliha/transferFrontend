import React, {Component} from 'react'

import {Col, Row} from 'antd'
import RoutesMap from "./Map/RoutesMap"
import CreateForm from "./CreateForm"
import {createDrive, getDrives} from "../drive.action"
import {connect} from "react-redux"

@connect(store => store.driveReducer)
export default class CreateScene extends Component {
  state = {
    center: {lat: 47.785480, lng: 35.208435},
  }

  componentDidMount() {
    this.props.dispatch(getDrives())
  }


  updateMap({fromLatLng, toLatLng}) {
    if (fromLatLng) this.setState({from: fromLatLng.location})
    if (toLatLng) this.setState({to: toLatLng.location})
  }

  render() {

    const {dispatch, drives} = this.props
    const {from, to} = this.state

    let routesMap = null
    if(drives.length){
      if(from && to){
        routesMap = <RoutesMap
          radius={30}
          drives={drives}
          from={from}
          to={to}
        />
      }
    }

    return <Row>
      <Col span={8}>
        <CreateForm onChange={this.updateMap.bind(this)}
                    onSubmit={values => dispatch(createDrive(values))}/>
      </Col>
      <Col span={16}>
        <div className='pl-1'>
          {routesMap}
        </div>
      </Col>
    </Row>

  }
}