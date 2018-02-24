import React from 'react'
import {connect} from "react-redux"
import {Redirect, Route} from "react-router-dom"
import Layout from "./Layout/Layout"
import CenteredSpin from "./CenteredSpin"

@connect(store => store.userReducer)
export default class AuthorizedRoute extends React.Component {

  render() {
    const {component: Component, loading, user, ...rest} = this.props

    return (
      <Route {...rest} render={props => {
        if (loading) return <Layout><CenteredSpin/></Layout>
        return user
          ? <Component user={user} {...props} />
          : <Redirect to="/login"/>
      }}/>
    )
  }
}

