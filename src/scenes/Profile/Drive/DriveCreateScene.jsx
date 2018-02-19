import React, {Component} from 'react'

import {Button, Card, Col, Form, Row} from 'antd'
import IntermediatePointsForm from "./components/forms/IntermediatePointsForm"
import GoogleMapContainer from "./components/RoutesMap"
import DateRangeForm from "./components/forms/DateRangeForm"
import DirectionsForm from "./components/forms/DirectionsForm"


const routes = [
  {
    package: {
      name: "кирпичи",
    },
    origin: {lat: 47.178526, lng: 35.111407},
    destination: {lat: 47.789085, lng: 35.211338}
  }, {
    package: {
      name: "пакет",
    },
    origin: "Вільнянський р-н, с.Михайлівка, вул.Слободчикова,38, Михайловка, Zaporiz'ka oblast, 69005",
    destination: "Pivdenne Hwy, 72, Zaporizhzhia, Zaporiz'ka oblast, 69000"
  }, {
    package: {
      name: "бухло",
    },
    origin: "Пушкiна 36, Tymoshivka, Zaporiz'ka oblast, 72030",
    destination: "космічна 119, Zaporizhzhia, Zaporiz'ka oblast, 69000"
  }, {
    package: {
      name: "бита",
    },
    origin: "вул. Леніна, 10, Mykhailivka, Zaporiz'ka oblast, 72000",
    destination: {lat: 47.338033, lng: 35.069088}
  }
]

@Form.create()
export default class Drive extends Component {
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
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.setFieldsValue({
      from: this.state.from,
      to: this.state.to,

    })
    this.props.form.validateFields((err, values) => {
      if (!err) console.log('Received values of form: ', values)
    })
  }

  componentDidMount() {
    this.props.form.setFieldsValue({
      from: this.state.from,
      to: this.state.to,
    })
  }

  updateMap(values) {
  }

  render() {

    const {from, to} = this.state
    return <Row>
      <Col span={8}>
        <Form onSubmit={this.handleSubmit} layout='horizontal'>
          <DirectionsForm form={this.props.form} onChange={this.updateMap.bind(this)}/>
          <IntermediatePointsForm form={this.props.form}/>
          <DateRangeForm form={this.props.form}/>
          <Card className='mt-2'>
            <Button type="primary" htmlType="submit" className="btn-block">
              Создать поездку
            </Button>
          </Card>
        </Form>
      </Col>
      <Col span={16}>
        <div className='pl-1'>
          <GoogleMapContainer
            routes={routes}
            from={this.state.from}
            to={this.state.to}
          />
        </div>
      </Col>
    </Row>

  }
}