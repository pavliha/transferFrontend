import React, { Component } from 'react';
import LastPage from '../components/LastPage';

class LastPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return <LastPage />
  }
}

export default LastPageContainer;
