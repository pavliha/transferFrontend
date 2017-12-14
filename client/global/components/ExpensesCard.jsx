import React from "react";
import {Card, Table} from "reactstrap";

export default ({day, expenses, onDeleteExpense}) => {
    return <Card>
        <Table>
            <thead>
            <tr>
                <th>
                    {day}
                </th>
                <th className='text-right'>{calculateExpensesAmount(expenses)} грн</th>
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
    const categoryGroups = expenses.groupBy('category')
    Object.keys(categoryGroups).forEach((categoryName) => {
        render.push(<CategoryItem name={categoryName}/>)
        for (const expense of categoryGroups[categoryName]) {
            render.push(<ExpenseItem
                expense={expense}
                onDeleteExpense={onDeleteExpense}
                key={expense.id}/>)
        }
    });
    return render
}

const CategoryItem = ({name}) => {
    if (name === 'undefined') return null
    return <tr>
        <th>{name}:</th>
    </tr>
}

const ExpenseItem = ({expense, onDeleteExpense}) => <tr>
    <td><i className='fa fa-close mr-1' onClick={onDeleteExpense.bind(null, expense)}/>{' '}{' '}{expense.name}</td>
    <td align="right">{expense.amount} грн</td>
</tr>