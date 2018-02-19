import React, {Component} from 'react';
import {Card} from 'reactstrap';
import LoginForm from "./LoginForm";
import {loginUser} from "../auth.action";
import {connect} from "react-redux";
import Layout from "../../../components/Layout/Layout";

@connect(store => store.userReducer)
export default class Login extends Component {
  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push('/dashboard')
  }

  handleSubmit(values) {
    this.props.dispatch(loginUser(values))
  }

  render() {
    return <Layout>
      <div className='d-flex justify-content-center align-items-center'>
        <Card style={{minWidth: 350}} className='mx-auto p-4'>
          <LoginForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
        </Card>
      </div>
    </Layout>
  }
}