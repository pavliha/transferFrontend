import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label} from "reactstrap";
import {Upload, Icon, Modal} from 'antd';
import {createCargo} from "../Cargo/cargo.action";
import {connect} from "react-redux";
import Geosuggest from 'react-geosuggest';

@connect(store => store.cargoReducer)
export default class CreateCargoForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({fileList}) => {
    this.setState({fileList})
  }

  handleSubmit(e) {
    this.props.dispatch(createCargo(e.target.form))
  }

  render() {

    const {previewVisible, previewImage, fileList} = this.state
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text primary">Upload</div>
      </div>);


    return <Form className="container">
      <h2 className="text-primary">Основное</h2>

      <FormGroup row>
        <Label for="name" sm={3}>Название груза</Label>
        <Col sm={9}>
          <Input type="text" name="name" placeholder="Название груза"/>
        </Col>
        <div className="ml-3 mt-2"/>
        {/*<FormFeedback className='text-danger ml-3 mt-2'>....</FormFeedback>*/}
      </FormGroup>

      <FormGroup row>
        <Label for="from" sm={3}>Откуда:</Label>
        <Col sm={9}>
          <Geosuggest name="from" placeholder="Start typing!"/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="to" sm={3}>Куда:</Label>
        <Col sm={9}>
          <Geosuggest name="to" placeholder="Finish typing!"/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="date_from" sm={3}>Время отправки</Label>
        <Col sm={9}>
          <Input type="date" name="date_from" placeholder="Время отправки"/>
        </Col>
        <div className="ml-3 mt-2"/>
      </FormGroup>

      <FormGroup>
        <Label for="date_to" sm={3}>Время прибытия</Label>
        <Col sm={9}>
          2.10.18
        </Col>
        <div className="ml-3 mt-2"/>
      </FormGroup>

      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{width: '100%'}} src={previewImage}/>
        </Modal>
      </div>

      <FormGroup row>
        <Label for="price" sm={3}>Ориентировочная цена</Label>
        <Col sm={9}>
          <div>50 грн</div>
        </Col>
        <div className="ml-3 mt-2"/>
      </FormGroup>

      <p>Дополнительно</p>
      <FormGroup row>
        <Label for="weight" sm={3}>Вес</Label>
        <Col sm={9}>
          <InputGroup>
            <Input type="text" name="weight" placeholder="Вес"/>
            <InputGroupAddon addontype="append">кг</InputGroupAddon>
          </InputGroup>
        </Col>
        <div className="ml-3 mt-2"/>
      </FormGroup>
      <FormGroup row>
        <Label for="volume" sm={3}>Объем</Label>
        <Col sm={9}>
          <InputGroup>
            <Input type="text" name="volume" placeholder="Объем"/>
            <InputGroupAddon addontype="append">м<sup>3</sup></InputGroupAddon>
          </InputGroup>
        </Col>
        <div className="ml-3 mt-2"/>
      </FormGroup>

      <FormGroup check row>
        <Button color="primary" className="mt-2" onClick={this.handleSubmit.bind(this)}>Добавить заказ</Button>
      </FormGroup>

    </Form>
  }
}





