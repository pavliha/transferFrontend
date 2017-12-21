import React, {Component} from 'react'
import ExpensesCard from "../global/components/ExpensesCard";
import {connect} from "react-redux";
import {deleteExpense, loadExpenses} from "../global/actions/expenses.action";
import moment from "moment/moment";
import localization from 'moment/locale/ru'

import groupBy from "lodash/groupBy";
import InfoTable from "../global/components/InfoTable";
import LayoutContainer from "../modules/Layout/LayoutContainer";
import sortBy from "lodash/sortBy";

moment().locale("ru", localization).format('LLL')

@connect(store => ({
    ...store.expensesReducer,
    addExpenseCard: store.addExpenseCardReducer
}))
export default class Index extends Component {

    render() {
        let {expenses} = this.props

        const expensesSorted = sortBy(expenses, obj => moment(obj.date)).reverse();
        const expensesByDay = groupBy(expensesSorted, (expense) => moment(expense.date).startOf('day'));

        return <LayoutContainer>
            <InfoTable income={12000} expense={calculateExpensesAmount(expenses)}/>
            {this.renderExpensesByDay(expensesByDay)}
        </LayoutContainer>
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