import React from "react";

import {Button, Form, Icon, Input} from 'antd';

let uuid = 0;

class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
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

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
    };
    getFieldDecorator('keys', {initialValue: []});
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <Form.Item
          label={index === 0 ? '' : ''}
          required={false}
          key={k}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input passenger's name or delete this field.",
            }],
          })(
            <Input placeholder="passenger name" style={{width: '60%', marginRight: 8}}/>
          )}
          {keys.length > 1 ? (
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
      <div>
        {formItems}
        <Form.Item>
          <Button type="dashed" onClick={this.add}>
            <Icon type="plus"/> Добавить промежуточную точку
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </div>
    );
  }
}

export default Form.create()(DynamicFieldSet);
