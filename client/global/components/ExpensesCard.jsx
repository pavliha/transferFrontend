import React from "react";
import {Card, Table} from "reactstrap";
import Colorize from "./Colorize";
import groupBy from 'lodash/groupBy'

export default ({day, expenses, onDeleteExpense, className}) => {

    return <Card className={className + ' mb-0'}>
        <Table>
            <thead>
            <tr>
                <th>
                    {day}
                </th>
                <th className='text-right'><Colorize>{calculateExpensesAmount(expenses)} грн</Colorize></th>
            </tr>
            </thead>
            <tbody>
            {renderListByCategory(expenses, onDeleteExpense)}
            </tbody>
        </Table>
    </Card>
}

function calculateExpensesAmount(expenses) {
    let sum = 0
    for (const expense of expenses)
        sum = expense.amount + sum
    return sum
}

function renderListByCategory(expenses, onDeleteExpense) {
    const render = []
    const categoryGroups = groupBy(expenses, expense => expense.category.text)

    Object.keys(categoryGroups).forEach((categoryName) => {

        const expensesOfCategory = categoryGroups[categoryName]

        render.push(<CategoryItem key={categoryName} amount={calculateExpensesAmount(expensesOfCategory)}
                                  name={categoryName}/>)
        for (const expense of expensesOfCategory) {
            render.push(<ExpenseItem
                expense={expense}
                onDeleteExpense={onDeleteExpense}
                key={expense.id}/>)
        }
    });
    return render
}

const CategoryItem = ({name, amount}) => {

    if(name === "Остальные"){
        return null
    }
    return <tr>
        <th>{name}:</th>
        <th className='text-right'><Colorize>{amount} грн</Colorize></th>
    </tr>
}

const ExpenseItem = ({expense, onDeleteExpense}) => <tr>
    <td><i className='fa fa-close mr-1' onClick={onDeleteExpense.bind(null, expense)}/>{' '}{' '}{expense.name}</td>
    <td align="right"><Colorize>{expense.amount} грн</Colorize></td>
</tr>