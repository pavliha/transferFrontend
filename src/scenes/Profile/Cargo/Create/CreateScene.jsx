import React, {Component} from 'react'

import {Col, Row} from 'antd'
import CreateForm from "../CreateForm"
import {createCargo} from "../cargo.action"
import {connect} from "react-redux"

@connect(store => store.cargoReducer)
export default class CreateScene extends Component {

  render() {

    const {dispatch, drives} = this.props

    return <Row>
      <Col span={8}>
        <CreateForm onSubmit={values => {
          dispatch(createCargo(values))
        }}/>
      </Col>
      <Col span={16}>
      </Col>
    </Row>

  }
}