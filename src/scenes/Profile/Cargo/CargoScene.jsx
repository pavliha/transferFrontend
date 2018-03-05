import React, {Component} from 'react'
import {connect} from "react-redux";
import {getUserCargo} from "./cargo.action"
import {Button, Card, Form, Input, Row, Col } from 'antd';
import CenteredSpin from '../../../components/CenteredSpin'
import {Container, FormGroup, Label} from "reactstrap"

@connect(store => store.cargoReducer)
export default class Cargos extends Component {

  componentWillMount() {
    this.props.dispatch(getUserCargo(this.props.match.params.id))
  }

  handleSubmit(e) {
    this.props.history.push('/profile/cargo')
  }

  render() {
    const {cargo, loading, error} = this.props

    if (loading) return <CenteredSpin/>
    if (error) return <div>Error</div>

    return <div>
      <Container>
        <Card>
          <Row>
            <Col span={6}><Label>Название груза</Label></Col>
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
          <Row>
            <Col span={6} for="volume"><Label>Объем</Label></Col>
            <Col span={6}>{cargo.volume}</Col>
          </Row>
          <Row>
            <Col span={6} for="weight"><Label>Вес</Label></Col>
            <Col span={6}>{cargo.weight}</Col>
          </Row>
          {cargo.description}
          {/*{cargo.pictures}<br/>*/}
          <Row>
            <Button type="primary" className="mt-2" onClick={this.handleSubmit.bind(this)}>Вернуться к
              каталогу</Button>
          </Row>
        </Card>
      </Container>
    </div>
  }
}





