import React, { Component } from 'react';
import WelcomePage from '../components/WelcomePage';
import {connect} from 'react-redux'
@connect((state) => {
    return {
        firstName: state.membersReducer.signUpData.firstName,
    };
})
export default class WelcomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return <WelcomePage name={this.props.firstName}/>
  }
}