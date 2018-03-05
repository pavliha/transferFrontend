import React, {Component} from 'react'
import {connect} from "react-redux";
import {Button, Checkbox, Form, Input} from 'antd';
import {Container} from "reactstrap"
import {updateUser} from "../../Auth/auth.action"

@Form.create()
@connect(store => store.userReducer)
export default class MyForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    this.props.dispatch(updateUser(e.target.form))
  }

  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push('/dashboard')
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {user} = this.props
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return <Container>
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Имя" {...formItemLayout}>
          {getFieldDecorator('first_name', {
            initialValue: user.first_name,
            rules: [{
              required: true, message: 'Please input your name!',
            }],
          })(
            <Input/>
          )}
        </Form.Item>
        <Form.Item label="Фамилия" {...formItemLayout}>
          {getFieldDecorator('last_name', {
            initialValue: user.last_name,
            rules: [{
              required: true, message: 'Please input your name!',
            }],
          })(
            <Input/>
          )}
        </Form.Item>

        <Form.Item label="E-mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: user.email,
            rules: [
              {type: 'email', message: 'The input is not valid E-mail!',},
              {required: true, message: 'Please input your E-mail!',}],
          })(<Input/>)}
        </Form.Item>

        <Form.Item label="Номер телефона" {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: user.phone,
            rules: [{required: true, message: 'Please input your phone number!'}],
          })(<Input style={{width: '100%'}}/>)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </Form.Item>
      </Form>
    </Container>
  }
}
