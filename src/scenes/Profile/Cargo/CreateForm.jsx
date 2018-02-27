import React, {Component} from 'react'

import {Button, Card, Form, Input} from 'antd'
import DateRangeFormItems from "../../../components/FormItems/DateRangeFormItems"
import DirectionsFormItems from "../../../components/FormItems/DirectionsFormItems"
import PicturesWallFormItem from "./Create/FormItems/PicturesWallFormItem"


@Form.create()
export default class CreateForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) this.props.onSubmit(values)
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return <Form onSubmit={this.handleSubmit} layout='horizontal'>
      <Card className='mt-2'>
        <Form.Item label="Название груза">
          {getFieldDecorator('name', {
            rules: [{
              required: true,
              message: 'Пожалуйста введите название груза'
            }],
          })(<Input placeholder="Например, Ящик, Картошка"/>)
          }
        </Form.Item>
      </Card>

      <Card className='mt-2'>
        <DirectionsFormItems form={this.props.form}/>
      </Card>
      <Card className='mt-2'>
        <DateRangeFormItems form={this.props.form}/>
      </Card>
      <Card className='mt-2'>
        <PicturesWallFormItem form={this.props.form}/>
      </Card>
      <Card className='mt-2'>
        {getFieldDecorator('volume', {
          rules: [{
            required: true,
            message: 'Пожалуйста введите обьем груза'
          }],
        })(<Input placeholder="Например, 40 м3"/>)
        }
        {getFieldDecorator('weight', {
          rules: [{
            required: true,
            message: 'Пожалуйста введите вес груза'
          }],
        })(<Input placeholder="Например, 20 кг"/>)
        }
        {getFieldDecorator('price', {
          rules: [{
            required: true,
            message: 'Пожалуйста введите примерную цену перевозки'
          }],
        })(<Input placeholder="Например, 120 грн"/>)
        }
        {getFieldDecorator('description', {
          rules: [{
            required: true,
            message: 'Пожалуйста введите описание груза'
          }],
        })(<Input.TextArea placeholder="Например, Ящик, Картошка"/>)
        }
      </Card>
      <Card className='mt-2'>
        <Button type="primary" onClick={this.handleSubmit.bind(this)} htmlType="submit" className="btn-block">Создать груз</Button>
      </Card>
    </Form>
  }
}