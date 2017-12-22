require("react-hot-loader/patch")
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './assets/flaticon/flaticon.css'
import './style.scss';
import axios from "axios";
import './global/helpers'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import routes from './routes'

axios.defaults.baseURL = 'http://localhost:3333';

window.axios = axios

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root'),
    )
}

render(routes)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
        render(routes)
    })
}