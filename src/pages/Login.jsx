import React, {Component} from 'react';
import {Card, Row} from 'reactstrap';
import LoginForm from "../modules/Auth/LoginForm";
import {loginUser} from "../modules/Auth/user.action";
import {connect} from "react-redux";
import Layout from "../modules/Layout/LayoutContainer";

@connect(store => store.indexReducer)
export default class Login extends Component {
    componentDidUpdate() {
        if (this.props.token)
            this.props.history.push('/dashboard')
    }

    handleSubmit(e) {
        this.props.dispatch(loginUser(e.target.form))
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 600}} className='mx-auto p-4'>

                {this.props.errors.map((error, index) =>
                    <Row key={index} className="justify-content-md-center bg-danger text-white">{error.message}</Row>
                )}

                <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}