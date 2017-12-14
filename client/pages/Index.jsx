import React, {Component} from 'react'
import {Container} from "reactstrap";
import DailyExpensesCard from "../global/components/ExpensesCard";
import {connect} from "react-redux";
import AddExpenseCardContainer from "../modules/AddExpenseCard/AddExpenseCardContainer";
import {deleteExpense, loadExpenses} from "../global/actions/expenses.action";
import Layout from "../global/components/Layout";

@connect(store => ({
    ...store.expensesReducer,
    addExpenseCard: store.addExpenseCardReducer
}))
export default class Index extends Component {
    componentWillMount() {
        this.props.dispatch(loadExpenses())
    }

    render() {
        const {expenses} = this.props
        return <Layout>
            <Container>
                <DailyExpensesCard day='сегодня'
                                   onDeleteExpense={this.handleDeleteExpense.bind(this)}
                                   expenses={expenses}/>
            </Container>

            <AddExpenseCardContainer/>


        </Layout>
    }

    handleDeleteExpense(expense) {
        this.props.dispatch(deleteExpense(expense))
    }
}
