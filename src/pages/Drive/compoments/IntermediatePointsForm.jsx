import React from "react";

import {Button, Card, Form, Icon} from 'antd';
import Geosuggest from "../../../components/Geosuggest/Geosuggest"

let uuid = 0;
@Form.create()
export default class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 0) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form;
    getFieldDecorator('keys', {initialValue: []});
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <Form.Item
          label={index === 0 ? '' : ''}
          key={k}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Пожалуйста введите проемужточную или удалите это поле",
            }],
          })(
            <Geosuggest name="to" placeholder="Наприклад, Площа Ринок, Львів"/>
          )}
          {keys.length > 0 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </Form.Item>
      );
    });
    return (
      <Card className='mt-2'>
        {formItems}
        <Form.Item>
          <Button type="dashed" style={{width: "100%"}} onClick={this.add}>
            <Icon type="plus"/> Добавить промежуточную точку
          </Button>
        </Form.Item>
      </Card>
    );
  }
}

