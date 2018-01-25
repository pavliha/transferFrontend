import React, {Component} from 'react'
import Layout from "../modules/Layout/LayoutContainer";
import CreateCargoForm from "../modules/Cargo/CreateCargoForm"


export  default class CargoCreate extends Component {
    render() {
        return <Layout>
            <CreateCargoForm/>
        </Layout>
    }

}
