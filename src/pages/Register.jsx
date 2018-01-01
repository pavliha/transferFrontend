import React, {Component} from 'react'
import {Card} from "reactstrap";
import Layout from "../containers/Layout";
import RegisterForm from "../components/RegisterForm";
import {registerUser} from '../action/user'
import {connect} from "react-redux";

@connect(store => store.indexReducer)
export default class Register extends Component {
    handleSubmit(e) {
        this.props.dispatch(registerUser(e.target.form))
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}
