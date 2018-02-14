import React, {Component} from 'react';
import {Card, Row} from 'reactstrap';
import LoginForm from "./components/LoginForm";
import {loginUser} from "./user.action";
import {connect} from "react-redux";
import Layout from "../../components/Layout/LayoutContainer";

@connect(store => store.userReducer)
export default class Login extends Component {
    handleSubmit(e) {
        this.props.dispatch(loginUser(e.target.form))
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 600}} className='mx-auto p-4'>
                <LoginForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}