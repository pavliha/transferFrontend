import React, {Component} from 'react';
import {Button, Card, Container} from 'reactstrap';
import LoginForm from "../components/LoginForm";
import {loginUser} from "../action/user";
import {connect} from "react-redux";
import Layout from "../containers/Layout";

@connect(store => store.indexReducer)
export default class Login extends Component {
    handleSubmit(e) {
        this.props.dispatch(loginUser(e.target.form))
        this.props.history.push('/dashboard')
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                {/*{this.props.messages.map(message=><Row className="justify-content-md-center bg-danger text-white">{message.message}</Row>)}*/}
                <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}