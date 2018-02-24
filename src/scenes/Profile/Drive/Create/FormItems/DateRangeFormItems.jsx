import React from 'react'
import {Card, DatePicker, Form} from 'antd'

export default class DateRangeForm extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue
    if (!startValue || !endValue) {
      return false
    }
    return startValue.valueOf() > endValue.valueOf()
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue
    if (!endValue || !startValue) {
      return false
    }
    return endValue.valueOf() <= startValue.valueOf()
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  onStartChange = (value) => {
    this.props.form.setFieldsValue({date_from: value})
    this.onChange('startValue', value)
  }

  onEndChange = (value) => {
    this.props.form.setFieldsValue({date_to: value})
    this.onChange('endValue', value)
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({endOpen: true})
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({endOpen: open})
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {startValue, endValue, endOpen} = this.state

    return (
      <div>
        <Form.Item>
          {getFieldDecorator('date_from', {
            rules: [{
              required: true,
              message: 'Пожалуйста введите дату поездки'
            }],
          })
          (<DatePicker
            disabledDate={this.disabledStartDate}
            showTime={{minuteStep: 10, format: 'HH:mm'}}
            format="YYYY-MM-DD HH:mm"
            style={{width: "100%"}}
            placeholder="Начало поездки"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />)}

        </Form.Item>
        <Form.Item label=''>
          {getFieldDecorator('date_to', {
            rules: [{
              required: true,
              message: 'Пожалуйста введите дату поездки'
            }],
          })
          (<DatePicker
            disabledDate={this.disabledEndDate}
            showTime={{minuteStep: 10, format: 'HH:mm'}}
            style={{width: "100%"}}
            format="YYYY-MM-DD HH:mm"
            placeholder="Запланированый конец поездки"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />)
          }
        </Form.Item>
      </div>
    )
  }
}