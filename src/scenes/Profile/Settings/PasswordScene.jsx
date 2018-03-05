import React, {Component} from 'react'
import {connect} from "react-redux";
import {Button, Checkbox, Form, Input} from 'antd';
import {Container} from "reactstrap"
import {updateUser} from "../../Auth/auth.action"

@Form.create()
@connect(store => store.userReducer)
export default class PasswordScene extends Component {
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
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback()
  }

  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push('/dashboard')
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    }
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

        <Form.Item label="Старый пароль" {...formItemLayout}>
          {getFieldDecorator('old_password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password"/>
          )}
        </Form.Item>
        <Form.Item label="Новый пароль" {...formItemLayout}>
          {getFieldDecorator('new_password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password"/>
          )}
        </Form.Item>
        <Form.Item label="Повторите пароль" {...formItemLayout}>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur}/>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </Form.Item>
      </Form>
    </Container>
  }
}
