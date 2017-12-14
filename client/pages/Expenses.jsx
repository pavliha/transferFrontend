import React, {Component} from 'react'
import Layout from "../global/components/Layout";
import {Container} from "reactstrap";
import ExpensesCard from "../global/components/ExpensesCard";
import AddExpenseCardContainer from "../modules/AddExpenseCard/AddExpenseCardContainer";
import {connect} from "react-redux";
import sortBy from 'lodash/sortBy'
import {deleteExpense, loadExpenses} from "../global/actions/expenses.action";
import moment from "moment";
import InfoTable from "../global/components/InfoTable";

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

        expenses = sortBy(expenses, obj => moment(obj.date)).reverse();

        return <Layout>
            <Container>
                <InfoTable income={income} expense={this.calculateExpensesAmount(expenses)}/>
                <ExpensesCard day='Расходы' onDeleteExpense={this.handleDeleteExpense.bind(this)} expenses={expenses}/>

                <AddExpenseCardContainer/>

            </Container>
        </Layout>
    }

    handleDeleteExpense(expense) {
        this.props.dispatch(deleteExpense(expense))
    }

}