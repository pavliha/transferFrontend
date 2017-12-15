import React from "react";
import {Table} from "reactstrap";

export default ({className, income, expense}) => <Table>
    <tbody>
    <tr>
        <td>Доход:</td>
        <td align="right">{income} грн</td>
    </tr>
    <tr>
        <td>Cчет:</td>
        <td align="right">{income + expense} грн</td>
    </tr>
    </tbody>
</Table>