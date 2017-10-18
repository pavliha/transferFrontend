import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Steps from './components/Steps';
import store from './store';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Steps />
      </Provider>
    );
  }
}

render(<Main />, document.getElementById('root'));
