import React, {Component} from 'react'
import {Card, Row} from "reactstrap";
import Layout from "../modules/Layout/LayoutContainer";
import RegisterForm from "../modules/Auth/RegisterForm";
import {registerUser} from '../modules/Auth/user.action'
import {connect} from "react-redux";

@connect(store => store.indexReducer)
export default class Register extends Component {
    componentDidUpdate() {
        if (this.props.token)
            this.props.history.push('/dashboard')
    }

    handleSubmit(e) {
        this.props.dispatch(registerUser(e.target.form))
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                {this.props.errors.map((error, index) =>
                    <Row key={index} className="justify-content-md-center bg-danger text-white">{error.message}</Row>)}
                <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}
