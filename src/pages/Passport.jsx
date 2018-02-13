import React, {Component} from 'react'
import {Card} from "reactstrap";
import Layout from "../components/Layout/LayoutContainer";
import {passportUser} from '../components/Auth/user.action'
import PassportForm from "../components/Auth/PassportForm"
import {connect} from "react-redux";

@connect(store => store.indexReducer)
export default class Passport extends Component {
    componentDidUpdate() {
        if (this.props.token)
            this.props.history.push('/dashboard')
    }

    handleSubmit(e) {
        this.props.dispatch(passportUser(e.target.form))
    }

    render() {
        return <Layout>
            <Card style={{maxWidth: 900}} className='mx-auto p-4'>
                <PassportForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
            </Card>
        </Layout>
    }
}