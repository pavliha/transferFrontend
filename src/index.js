import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import './styles/index.scss'
import IndexScene from './components/@index/IndexScene'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(() =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={IndexScene}/>
      </Switch>
    </Router>
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}
