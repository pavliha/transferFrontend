import React, {Component} from 'react'
import Layout from "../components/Layout/LayoutContainer";
import {Card} from "antd"
import Geosuggest from 'react-geosuggest';
import {Col, FormGroup, Input, Label, Button} from "reactstrap";
import {createDriveForm} from "./Auth/user.action"
import {connect} from "react-redux"

@connect(store => store.indexReducer)
export default class DriveForm extends Component {
  handleSubmit(e) {
    this.props.dispatch(createDriveForm(e.target.form))
  }

  render() {
    return <Layout>
      <Card title='Куда едем?'>
        <div className="container">
          <FormGroup row>
            <Label for="starttyping" sm={3}>Start typing!</Label>
            <Col sm={9}>
              <Geosuggest name="starttyping" placeholder="Start typing!"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="finishtyping" sm={3}>Finish typing!</Label>
            <Col sm={9}>
              <Geosuggest name="finishtyping" placeholder="Finish typing!"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="date" sm={5}>Время отправки</Label>
            <Col sm={5}>
              <Input type="date" name="date" placeholder="Время отправки"/>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Button color="primary" className="mt-2" onClick={this.handleSubmit.bind(this)}>Добавить поездку</Button>
          </FormGroup>

        </div>
      </Card>
    </Layout>
  }

}
