import React from "react";
import {Card} from "antd"
import {FormGroup, InputGroupAddon, Label} from "reactstrap"

export default ({cargo}) =>
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
  </Card>