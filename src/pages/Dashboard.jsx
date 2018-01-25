import React, {Component} from 'react'
import Layout from "../modules/Layout/LayoutContainer";
import {connect} from "react-redux";

@connect(state => state.userReducer)
export default class DashBoard extends Component {

    render() {
        return <Layout>
            <h1>DashBoard</h1>
        </Layout>
    }

}
