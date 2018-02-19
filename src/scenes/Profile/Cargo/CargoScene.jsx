import React, {Component} from 'react'
import {connect} from "react-redux";
import {getUserCargo} from "./cargo.action"
import {Card} from "antd"
import {Button, Container, FormGroup, Label} from "reactstrap"

@connect(store => store.cargoReducer)
export default class Cargos extends Component {

  componentDidMount() {
    this.props.dispatch(getUserCargo(this.props.match.params.id))
  }

  handleSubmit(e) {
    this.props.history.push('/profile/cargo')
  }

  render() {
    const {cargo, loading} = this.props

    if (!cargo && loading === true) return <div>Loading...</div>
    if (!cargo && loading === false) return <div>Error</div>

    return <div>
      <Container>
        <Card>
          <FormGroup row>
            <Label for="name" sm={3}>Название груза</Label>{cargo.name}
          </FormGroup>
          <FormGroup row>
            <Label for="from" sm={3}>Откуда:</Label>{cargo.from}
          </FormGroup>
          <FormGroup row>
            <Label for="to" sm={3}>Куда:</Label>{cargo.to}
          </FormGroup>
          <FormGroup row>
            <Label for="date_from" sm={3}>Время отправки</Label>{cargo.date_from}
          </FormGroup>
          <FormGroup row>
            <Label for="date_to" sm={3}>Время прибытия</Label>{cargo.date_to}
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={3}>Ориентировочная цена</Label>{cargo.price}
          </FormGroup>
          <FormGroup row>
            <Label for="volume" sm={3}>Объем</Label>{cargo.volume}
          </FormGroup>
          <FormGroup row>
            <Label for="weight" sm={3}>Вес</Label>{cargo.weight}
          </FormGroup>
          {cargo.description}
          {/*{cargo.images}<br/>*/}
          <FormGroup check row>
            <Button color="primary" className="mt-2" onClick={this.handleSubmit.bind(this)}>Вернуться к
              каталогу</Button>
          </FormGroup>
        </Card>
      </Container>
    </div>
  }
}





