import React, {Component} from 'react'
import {connect} from "react-redux"
@connect(store=>store.driveReducer)
export default class Drives extends Component {
  render() {

    const {from, to} = this.state
    return (
      <div>

      </div>
    )
  }
}