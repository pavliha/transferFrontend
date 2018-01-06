import React, {Component} from 'react'
import Layout from "../modules/Layout/LayoutContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export default withRouter(connect(state => state.indexReducer)
(class DashBoard extends Component {

    render() {
        return <Layout>
            <h1>DashBoard</h1>
        </Layout>
    }
q
}))
