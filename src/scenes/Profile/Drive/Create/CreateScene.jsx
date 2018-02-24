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
    radius: 2,
    from: {
      label: 'улица Пушкина, 36, Тимошовка, Zaporiz\'ka oblast, Ukraine',
      location: {lat: 47.1917058, lng: 35.104556499999944},
    },
    to: {
      label: 'улица Пушкина, 36, Тимошовка, Zaporiz\'ka oblast, Ukraine',
      location: {lat: 47.1917058, lng: 35.104556499999944},
    },
  }

  componentDidMount() {
    this.props.dispatch(getDrives())
  }


  updateMap({fromLatLng, toLatLng}) {
    if (fromLatLng) this.setState({from: fromLatLng.location})
    if (toLatLng) this.setState({to: toLatLng.location})
  }

  render() {

    const {dispatch, routes} = this.props
    const {from, to} = this.state

    return <Row>
      <Col span={8}>
        <CreateForm onChange={this.updateMap.bind(this)}
                    onSubmit={values => dispatch(createDrive(values))}/>
      </Col>
      <Col span={16}>
        <div className='pl-1'>
          {(routes && (from || to )) ?
            <RoutesMap
              radius={30}
              routes={routes}
              from={from}
              to={to}
            />
            : null}
        </div>
      </Col>
    </Row>

  }
}