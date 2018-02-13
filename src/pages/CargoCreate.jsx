import React, {Component} from 'react'
import Layout from "../components/Layout/LayoutContainer";
import CreateCargoForm from "../components/Cargo/CreateCargoForm"


export  default class CargoCreate extends Component {
    render() {
        return <Layout>
            <CreateCargoForm/>
        </Layout>
    }

}
