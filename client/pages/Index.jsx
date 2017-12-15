import React, {Component} from 'react'
import ExpensesCard from "../global/components/ExpensesCard";
import {connect} from "react-redux";
import {deleteExpense, loadExpenses} from "../global/actions/expenses.action";
import Layout from "../global/components/Layout";
import moment from "moment/moment";
import localization from 'moment/locale/ru'

import sortBy from "lodash/sortBy";
import groupBy from "lodash/groupBy";
import EmptyLayout from "../global/components/EmptyLayout";

moment().locale("ru", localization).format('LLL')

@connect(store => ({
    ...store.expensesReducer,
    addExpenseCard: store.addExpenseCardReducer
}))
export default class Index extends Component {

    componentWillMount() {
        this.props.dispatch(loadExpenses())
    }

    render() {
        let {expenses} = this.props

        if (!expenses.length) return <EmptyLayout/>

        const expensesSorted = sortBy(expenses, obj => moment(obj.date)).reverse();
        const expensesByDay = groupBy(expensesSorted, (expense) => moment(expense.date).startOf('day'));


        return <Layout>
                {this.renderExpensesByDay(expensesByDay)}
        </Layout>
    }

    renderExpensesByDay(expenses) {
        const cards = [];
        for (const expenseDay of Object.keys(expenses))
            cards.push(
                <ExpensesCard key={expenseDay}
                              day={moment(expenseDay).format('D, dddd')}
                              className='mb-3'
                              onDeleteExpense={this.handleDeleteExpense.bind(this)}
                              expenses={expenses[expenseDay]}
                />)


        return cards
    }

    handleDeleteExpense(expense) {
        this.props.dispatch(deleteExpense(expense))
    }
}