import React from "react"
import Geosuggest from "../../../../../components/Geosuggest/Geosuggest"
import {Form} from 'antd'

export default class DirectionsForm extends React.Component {

  render() {
    const {getFieldDecorator, getFieldsValue, setFieldsValue} = this.props.form
    const {directions, onChange} = this.props
    return <div>
      <Form.Item label="Откуда едите?">
        {
          getFieldDecorator('from', {
            rules: [{
              required: true,
              message: 'Пожалуйста введите место отправки'
            }],
          })
          (<Geosuggest name="from"
                       placeholder="Наприклад, станція метро Житомирська, Київ"
                       onSuggestSelect={(value) => {
                         setFieldsValue({from: value})
                       }}
          />)
        }
      </Form.Item>
      <Form.Item label="Куда едите?">
        {
          getFieldDecorator('to', {
            rules: [{
              required: true,
              message: 'Пожалуйста введите место назначения'
            }],
          })
          (<Geosuggest name="to"
                       placeholder="Наприклад, Площа Ринок, Львів"
                       onSuggestSelect={(value) => {
                         setFieldsValue({to: value})
                       }}
          />)
        }
      </Form.Item>
    </div>
  }
}