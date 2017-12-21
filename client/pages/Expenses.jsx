import React, {Component} from 'react'
import {connect} from "react-redux";
import {deleteExpense} from "../global/actions/expenses.action";
import moment from "moment";
import InfoTable from "../global/components/InfoTable";
import groupBy from "lodash/groupBy";
import ExpensesCard from "../global/components/ExpensesCard";
import LayoutContainer from "../modules/Layout/LayoutContainer";
import sortBy from "lodash/sortBy";

const income = 15000

@connect(store => ({
    ...store.expensesReducer,
    addExpenseCard: store.addExpenseCardReducer
}))
export default class Expenses extends Component {

    render() {
        const {expenses} = this.props

        const expensesSorted = sortBy(expenses, obj => moment(obj.date)).reverse();
        const expensesByMonth = groupBy(expensesSorted, (expense) => moment(expense.date).startOf('month'))

        return <LayoutContainer>
            <InfoTable income={income} expense={calculateExpensesAmount(expenses)}/>
            {this.renderExpensesByMonth(expensesByMonth)}
        </LayoutContainer>
    }

    renderExpensesByMonth(expenses) {
        const cards = [];
        for (const expenseMonth of Object.keys(expenses))
            cards.push(<ExpensesCard key={expenseMonth}
                                     day={moment(expenseMonth).format('MMMM')}
                                     className='mb-3'
                                     onDeleteExpense={this.handleDeleteExpense.bind(this)}
                                     expenses={expenses[expenseMonth]}/>)
        return cards
    }

    handleDeleteExpense(expense) {
        this.props.dispatch(deleteExpense(expense))
    }

}

