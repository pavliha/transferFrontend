import React, {Component} from "react";
import {connect} from "react-redux";
import {loadCategories, loadExpenses} from "../../global/actions/expenses.action";
import Layout from './Layout'
import EmptyLayout from "./EmptyLayout";

@connect(store => store.expensesReducer)
export default class LayoutContainer extends Component {
    componentWillMount() {
        const {dispatch} = this.props
        dispatch(loadExpenses())
        dispatch(loadCategories())
    }

    render() {
        const {className, children, expenses, categories} = this.props

        if (!expenses.length) return <EmptyLayout/>
        if (!categories.length) return <EmptyLayout/>

        return <Layout>{children}</Layout>

    }
}