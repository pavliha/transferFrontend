import React from "react";
import {Card, CardHeader, Table} from "reactstrap";

export default ({day,expenses}) => <Card>
    <CardHeader>{day}</CardHeader>
    <Table>
        <tbody>
        {expenses.map( expense =>   <tr>
            <td>{expense.name}</td>
            <td align="right">{expense.amout}200 грн</td>
        </tr>)}

        </tbody>
    </Table>
</Card>
      
