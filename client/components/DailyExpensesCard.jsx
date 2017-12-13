import React from "react";
import {Card, CardHeader, Table} from "reactstrap";

export default ({day, expenses}) => {
    return <Card>
        <CardHeader>{day}</CardHeader>
        <Table>
            <tbody>
            {renderCategoryList(expenses)}
            </tbody>
        </Table>
    </Card>
}

function renderCategoryList(expenses) {
    const render = [];
    const categoryGroups = expenses.groupBy('category')
    Object.keys(categoryGroups).forEach((categoryName, key) => {

        if (hasGroup(categoryName))
            render.push(<tr key={key}>
                <th>{categoryName}:</th>
            </tr>)

        const expenses = categoryGroups[categoryName]
        expenses.forEach((expense, index) => {
            render.push(<tr key={index + key + 100}>
                <td>{expense.name}</td>
                <td align="right">{expense.amount} грн</td>
            </tr>)
        })

    });
    return render
}

function hasGroup(key) {
    return key !== 'undefined'
}