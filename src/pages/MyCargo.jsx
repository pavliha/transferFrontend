import React, {Component} from 'react'
import {connect} from "react-redux";
import LayoutContainer from "../modules/Layout/LayoutContainer"
import {createCargo, getUserCargos} from "../modules/Cargo/cargo.action"
import {Card} from "antd"
import {Button, FormGroup, InputGroupAddon, Label} from "reactstrap"
import {Link} from "react-router-dom"

@connect(store => store.cargoReducer)
export default class MyCargo extends Component {

  componentDidMount() {
    this.props.dispatch(getUserCargos())
  }
  handleClick(id){
    this.props.history.push('/cargo/'+id)
  }

  render() {

    const {cargos} = this.props
    return <LayoutContainer>
      <div className="container">
        {cargos.map((cargo, key) =>
          <div key={key}>
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
              <FormGroup check row>
                  <Button color="primary" onClick={this.handleClick.bind(this,cargo.id)} className="mt-2">Полная информация
                    груза</Button>
              </FormGroup>
            </Card><br/>
          </div>)}
      </div>
    </LayoutContainer>
  }
}





