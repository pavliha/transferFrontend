import React, {Component} from 'react'
import {Button, Container} from "reactstrap";
import DailyExpensesCard from "../global/components/ExpensesCard";
import {connect} from "react-redux";
import AddExpenseCard from "../modules/AddExpenseCard/AddExpenseCardContainer";
import {addExpense, loadExpenses, TOGGLE_EXPENSE_CARD} from "../global/actions/expenses.action";
import Layout from "../global/components/Layout";

@connect(store => store.expensesReducer)
export default class Index extends Component {
    componentWillMount() {
        this.props.dispatch(loadExpenses())
    }

    render() {
        console.log('re-render')
        const {dispatch, showAddExpenseCard, expenses} = this.props

        return <Layout>
            <Container>
                <DailyExpensesCard day='сегодня' expenses={expenses}/>
            </Container>
            <AddExpenseCard visible={showAddExpenseCard}
                            onCancel={this.toggleExpenseCard.bind(this)}
                            onSubmit={this.handleAddExpense.bind(this)}/>

            {!showAddExpenseCard ?
                <div className='fixed-bottom text-center'>
                    <Button color='primary'
                            className='btn-round mb-3 p-4'
                            onClick={this.toggleExpenseCard.bind(this)}>
                        <i className="fa fa-google-wallet" aria-hidden="true"/>
                    </Button>
                </div> : null}
        </Layout>
    }

    handleAddExpense(e) {
        this.forceUpdate()
        const {dispatch} = this.props
        dispatch(addExpense(e.target.form))
        dispatch({type: TOGGLE_EXPENSE_CARD})
    }

    toggleExpenseCard() {
        this.props.dispatch({type: TOGGLE_EXPENSE_CARD})
    }
}
