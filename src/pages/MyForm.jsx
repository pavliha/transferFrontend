import React, {Component} from 'react'
import {connect} from "react-redux";
import LayoutContainer from "../modules/Layout/LayoutContainer"
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import {Container} from "reactstrap"
import {updateUser} from "../modules/Auth/user.action"

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];


@Form.create()
@connect(store => store.userReducer)
export default class MyForm extends Component {
  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push('/dashboard')
  }

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
    callback();
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {autoCompleteResult} = this.state;
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

    return <LayoutContainer>
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Имя" {...formItemLayout}>
            {getFieldDecorator('first_name', {
              initialValue: user.first_name,
              rules: [{
                required: true, message: 'Please input your name!',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem label="Фамилия" {...formItemLayout}>
            {getFieldDecorator('last_name', {
              initialValue: user.last_name,
              rules: [{
                required: true, message: 'Please input your name!',
              }],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem label="E-mail" {...formItemLayout}>
            {getFieldDecorator('email', {
              initialValue: user.email,
              rules: [
                {type: 'email', message: 'The input is not valid E-mail!',},
                {required: true, message: 'Please input your E-mail!',}],
            })(<Input/>)}
          </FormItem>
          <FormItem label="Пароль" {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem label="Повторите пароль" {...formItemLayout}>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur}/>
            )}
          </FormItem>

          <FormItem label="Номер телефона" {...formItemLayout}>
            {getFieldDecorator('phone', {
              initialValue: user.phone,
              rules: [{required: true, message: 'Please input your phone number!'}],
            })(<Input style={{width: '100%'}}/>)}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Сохранить</Button>
          </FormItem>
        </Form>
      </Container>
    </LayoutContainer>
  }
}
