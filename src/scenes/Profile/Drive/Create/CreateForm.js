import React, {Component} from 'react'

import {Button, Card, Form} from 'antd'
import IntermediatePointsFormItems from "./FormItems/IntermediatePointsFormItems"
import DateRangeFormItems from "./FormItems/DateRangeFormItems"
import DirectionsFormItems from "./FormItems/DirectionsFormItems"

const checkLocation = (values) => {


  return values
}

@Form.create({
  onFieldsChange(props, changedFields) {
    const from = changedFields.from ? changedFields.from.value : null
    const to = changedFields.to ? changedFields.to.value : null

    if (from && from instanceof Object) changedFields.fromLatLng = from
    if (to && to instanceof Object) changedFields.toLatLng = to

    props.onChange(changedFields);
  },


})
export default class Drive extends Component {
  state = {
    center: {lat: 47.785480, lng: 35.208435},
    radius: 2,
    from: {
      label: 'улица Пушкина, 36, Тимошовка, Zaporiz\'ka oblast, Ukraine',
      location: {lat: 47.1917058, lng: 35.104556499999944},
    },
    to: {
      label: 'улица Пушкина, 36, Тимошовка, Zaporiz\'ka oblast, Ukraine',
      location: {lat: 47.1917058, lng: 35.104556499999944},
    },
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.setFieldsValue({
      from: this.state.from,
      to: this.state.to,
    })

    this.props.form.validateFields((err, values) => {
      if (!err) this.props.onSubmit(values)
    })
  }

  render() {

    return <Form onSubmit={this.handleSubmit} layout='horizontal'>
      <Card className='mt-2'>
        <DirectionsFormItems form={this.props.form}/>
      </Card>
      <Card className='mt-2'>
        <IntermediatePointsFormItems form={this.props.form}/>
      </Card>
      <Card className='mt-2'>
        <DateRangeFormItems form={this.props.form}/>
      </Card>
      <Card className='mt-2'>
        <Button type="primary" htmlType="submit" className="btn-block">Создать поездку</Button>
      </Card>
    </Form>
  }
}