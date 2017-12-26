import React, {Component} from 'react'
import {connect} from "react-redux";

@connect(store => ({
    ...store.expensesReducer,
    addExpenseCard: store.addExpenseCardReducer
}))
export default class Index extends Component {

    render() {

    }

   }