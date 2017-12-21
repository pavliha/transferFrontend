import React from "react";
import {Table} from "reactstrap";

export default ({expenses}) => <Table>
    <tbody>
    <tr>
        <td>Доходы:</td>
        <td align="right">{calculateIncomeAmount(expenses)} грн</td>
    </tr>
    <tr>
        <td>Расходы:</td>
        <td align="right">{-calculateExpensesAmount(expenses)} грн</td>
    </tr>
    <tr>
        <td>Счет:</td>
        <td align="right">{calculateAmount(expenses)} грн</td>
    </tr>
    </tbody>
</Table>


const calculateExpensesAmount = (expenses) =>
    calculateAmount(expenses.filter((expense) => expense.amount < 0))


const calculateIncomeAmount = (expenses) =>
    calculateAmount(expenses.filter((expense) => expense.amount > 0))


const calculateAmount = (expenses) => {
    let sum = 0;
    for (const expense of expenses)
        sum = expense.amount + sum
    return sum
}