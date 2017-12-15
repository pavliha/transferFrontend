import React, {Component} from 'react'
import {connect} from "react-redux";
import {toggleExpenseCard} from "./addExepenseCard.action";
import {addExpense} from "../../global/actions/expenses.action";
import AddExpenseButton from "./AddExpenseButton";
import AddExpenseCard from "./AddExpenseCard";

@connect(store => store.addExpenseCardReducer)
export default class AddExpenseCardContainer extends Component {
    render() {
        const {visible} = this.props

        if (!visible)
            return <AddExpenseButton className='fixed-bottom-center' onClick={this.toggleExpenseCard.bind(this)}/>


        return <AddExpenseCard onSubmit={this.handleAddExpense.bind(this)}
                               onCancel={this.toggleExpenseCard.bind(this)}/>
    }

    handleAddExpense(e) {
        e.preventDefault()
        this.forceUpdate()
        const {dispatch} = this.props
        dispatch(addExpense(e.target))
        dispatch(toggleExpenseCard())
    }

    toggleExpenseCard() {
        this.props.dispatch(toggleExpenseCard())
    }
}
