import React, {Component} from 'react'
import Layout from "../modules/Layout/LayoutContainer";
import {connect} from "react-redux";
import CreateCargoForm from "../modules/Cargo/CreateCargoForm"


@connect(state => state.indexReducer)
export  default class CargoCreate extends Component {
    render() {
        return <Layout>
            <CreateCargoForm/>
        </Layout>
    }

}
