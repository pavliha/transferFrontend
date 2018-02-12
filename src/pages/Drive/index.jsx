import React, {Component} from 'react'
import Layout from "../../modules/Layout/LayoutContainer";
import {connect} from "react-redux";
import Geosuggest from 'react-geosuggest'
import {Card, Col, Form, Row} from 'antd';
import IntermediatePointsForm from "./compoments/IntermediatePointsForm"
import GoogleMapContainer from "../../modules/CargoSearch/GoogleMapContainer"


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

@connect(state => state.userReducer)
@Form.create()
export default class RegistrationForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    const {getFieldDecorator} = this.props.form;
    return (
      <Layout>
        <Row>
          <Col span={12}>
            <Form onSubmit={this.handleSubmit} layout='horizontal'>
              <Card>
                <Form.Item label="Откуда едите?">
                  {getFieldDecorator('from', {rules: [{required: true, message: 'Пожалуйста введите место отправки'}],})
                  (<Geosuggest name="from" placeholder="Наприклад, станція метро Житомирська, Київ"/>)}
                </Form.Item>
                <Form.Item label="Куда едите?">
                  {getFieldDecorator('to', {rules: [{required: true, message: 'Пожалуйста введите место назначения'}],})
                  (<Geosuggest name="to" placeholder="Наприклад, Площа Ринок, Львів"/>)}
                </Form.Item>

              </Card>
              <Card className='mt-2'>
                <IntermediatePointsForm/>
              </Card>
            </Form>
          </Col>
          <Col span={12}>
            <div className='pl-1'>
              <GoogleMapContainer
                routes={routes}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA0E-RRtQWldjEQLFkAOWDgMSj295C0Lo&libraries=places,visualization"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `90vh`}}/>}
              />
            </div>
          </Col>
        </Row>

      </Layout>
    );
  }
}