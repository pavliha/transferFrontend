import React, {Component} from 'react'
import {updatePassport} from './settings.action'
import PassportForm from "./PassportForm"

export default class Passport extends Component {
  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push('/dashboard')
  }

  handleSubmit(e) {
    this.props.dispatch(updatePassport(e.target.form))
  }

  render() {
    return <PassportForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
  }
}