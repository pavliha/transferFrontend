import React from "react";
import {Card, Table} from "reactstrap";

export default ({day, expenses, onDeleteExpense, className}) => {
    return <Card className={className + ' mb-0'}>
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
    if (name === 'undefined') return <tr>
        <th>Остальное:</th>
    </tr>
    return <tr>
        <th>{name}:</th>
        <th className='text-right'>{amount} грн</th>
    </tr>
}

const ExpenseItem = ({expense, onDeleteExpense}) => <tr>
    <td><i className='fa fa-close mr-1' onClick={onDeleteExpense.bind(null, expense)}/>{' '}{' '}{expense.name}</td>
    <td align="right">{expense.amount} грн</td>
</tr>