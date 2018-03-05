import React, {Component} from 'react'
import {connect} from "react-redux";
import {getUserCargos} from "./cargo.action"
import {Button, Card, Form, Input, Row, Col} from 'antd';
import {Label} from "reactstrap"

@connect(store => store.cargoReducer)
export default class Shipments extends Component {

  componentDidMount() {
    this.props.dispatch(getUserCargos())
  }

  handleClick(id) {
    this.props.history.push('/profile/cargo/' + id)
  }

  render() {

    const {cargos} = this.props

    return <div>
      {cargos.map((cargo, key) =>
        <div key={key}>
          <Card>
            <Row>
              <Col span={6} for="name"><Label>Название груза</Label></Col>
              <Col span={6}>{cargo.name}</Col>
            </Row>
            <Row>
              <Col span={6} for="from"><Label>Откуда</Label></Col>
              <Col span={6}>{cargo.from.name}</Col>
            </Row>
            <Row>
              <Col span={6} for="to"><Label>Куда</Label></Col>
              <Col span={6}>{cargo.to.name}</Col>
            </Row>
            <Row>
              <Col span={6} for="date_from"><Label>Время отправки</Label></Col>
              <Col span={6}>{cargo.from.date}</Col>
            </Row>
            <Row>
              <Col span={6} for="date_to"><Label>Время прибытия</Label></Col>
              <Col span={6}>{cargo.to.date}</Col>
            </Row>
            <Row>
              <Col span={6} for="price"><Label>Ориентировочная цена</Label></Col>
              <Col span={6}>{cargo.price}</Col>
            </Row>

            <Button type="primary" onClick={this.handleClick.bind(this, cargo.id)} className="mt-2"> Полная информация груза</Button>

          </Card><br/>
        </div>)}
    </div>
  }
}





