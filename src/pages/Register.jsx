import React, {Component} from 'react'
import {Card, Row} from "reactstrap";
import Layout from "../containers/Layout";
import RegisterForm from "../components/RegisterForm";
import {registerUser} from '../action/user'
import {connect} from "react-redux";

@connect(store => store.indexReducer)
export default class Register extends Component {
    handleSubmit(e) {
        this.props.dispatch(registerUser(e.target.form))
        if (this.props.messages)
            this.props.history.push('/dashboard')
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                {this.props.messages.map(message => <Row
                    className="justify-content-md-center bg-danger text-white">{message.message}</Row>)}
                <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}
