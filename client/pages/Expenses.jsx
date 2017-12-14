import React, {Component} from 'react'
import Layout from "../global/components/Layout";
import {Button, Container, Table} from "reactstrap";
import ExpensesCard from "../global/components/ExpensesCard";
import AddExpenseCardContainer from "../modules/AddExpenseCard/AddExpenseCardContainer";
import {connect} from "react-redux";
import _ from 'lodash'
import {deleteExpense, loadExpenses} from "../global/actions/expenses.action";
import moment from "moment";
import {toggleExpenseCard} from "../modules/AddExpenseCard/addExepenseCard.action";

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
        let {dispatch, addExpenseCard, expenses} = this.props

        expenses = _.sortBy(expenses, obj => moment(obj.date)).reverse();

        return <Layout>
            <Container>
                <Table>
                    <tbody>
                    <tr>
                        <td>Доход:</td>
                        <td align="right">{income} грн</td>
                    </tr>
                    <tr>
                        <td>Cчет:</td>
                        <td align="right">{income - this.calculateExpensesAmount(expenses)} грн</td>
                    </tr>
                    </tbody>
                </Table>
                <ExpensesCard day='Расходы' onDeleteExpense={this.handleDeleteExpense.bind(this)} expenses={expenses}/>

                <AddExpenseCardContainer/>

                {!addExpenseCard.visible ?
                    <div className='fixed-bottom text-center'>
                        <Button color='primary'
                                className='btn-round mb-3 p-4'
                                onClick={() => dispatch(toggleExpenseCard())}>
                            <i className="fa fa-google-wallet" aria-hidden="true"/>
                        </Button>
                    </div> : null}
            </Container>
        </Layout>
    }

    handleDeleteExpense(expense){
        this.props.dispatch(deleteExpense(expense))
    }

}