import React, {Component} from 'react'
import Layout from "../global/components/Layout";
import {Container} from "reactstrap";
import AddExpenseCardContainer from "../modules/AddExpenseCard/AddExpenseCardContainer";
import {connect} from "react-redux";
import sortBy from 'lodash/sortBy'
import {deleteExpense, loadExpenses} from "../global/actions/expenses.action";
import moment from "moment";
import InfoTable from "../global/components/InfoTable";
import groupBy from "lodash/groupBy";
import ExpensesCard from "../global/components/ExpensesCard";

const income = 15000

@connect(store => ({
    ...store.expensesReducer,
    addExpenseCard: store.addExpenseCardReducer
}))
export default class Expenses extends Component {

    componentWillMount() {
        this.props.dispatch(loadExpenses())
    }

    calculateExpensesAmount(expenses) {
        let sum = 0;
        for (const expense of expenses)
            sum = expense.amount + sum
        return sum
    }

    render() {
        let {expenses} = this.props

        if (!expenses.length) return <Layout>
            <Container>
                Пусто
                <AddExpenseCardContainer/>

            </Container>
        </Layout>

        const expensesSorted = sortBy(expenses, obj => moment(obj.date)).reverse();
        const expensesByMonth = groupBy(expensesSorted, (expense) => moment(expense.date).startOf('month'));

        return <Layout>
            <Container>
                <InfoTable income={income} expense={this.calculateExpensesAmount(expenses)}/>

                {this.renderExpensesByMonth(expensesByMonth)}
                Пусто

                <AddExpenseCardContainer/>

            </Container>
        </Layout>
    }

    renderExpensesByMonth(expenses) {
        const cards = [];
        for (const expenseMonth of Object.keys(expenses))
            cards.push(
                <ExpensesCard key={expenseMonth}
                              day={moment(expenseMonth).format('MMMM')}
                              className='mb-3'
                              onDeleteExpense={this.handleDeleteExpense.bind(this)}
                              expenses={expenses[expenseMonth]}
                />)


        return cards
    }

    handleDeleteExpense(expense) {
        this.props.dispatch(deleteExpense(expense))
    }

}