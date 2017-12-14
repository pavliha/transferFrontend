import React, {Component} from 'react'
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {connect} from "react-redux";
import {toggleExpenseCard} from "./addExepenseCard.action";
import {addExpense} from "../../global/actions/expenses.action";

@connect(store => store.addExpenseCardReducer)
export default class AddExpenseCardContainer extends Component {
    render() {
        const {visible} = this.props

        if (!visible) return null

        return <form className='card fixed-bottom card-expense p-3 animated slideInUp'
                     onSubmit={this.handleAddExpense.bind(this)}>
            <Input type='text' defaultValue="" name='name' placeholder='Описание'/>
            <InputGroup className='mt-3'>
                <Input type='number' required placeholder='Сумма' name='amount' defaultValue=""/>
                <InputGroupAddon>грн.</InputGroupAddon>
            </InputGroup>


            <Button color='primary' type='submit' className='mt-3'>Добавить</Button>
            <Button color='danger' className='mt-3' onClick={this.toggleExpenseCard.bind(this)}>
                <i className="fa fa-close" aria-hidden="true"/>
            </Button>
        </form>
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
