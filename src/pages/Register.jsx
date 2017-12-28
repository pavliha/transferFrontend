import React, {Component} from 'react'
import {Card} from "reactstrap";
import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";
import urlencodeForm from "../services/urlencodeForm";

export default class Register extends Component {
    async handleSubmit(e) {

       const form = e.target.form

        const response = await axios.post('https://transfer-api.herokuapp.com/register',urlencodeForm(form))
        debugger
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}
