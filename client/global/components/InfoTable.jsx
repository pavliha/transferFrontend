import React from "react";
import {Table} from "reactstrap";

export default ({className, income, expense}) => <Table>
    <tbody>
    <tr>
        <td>Расход:</td>
        <td align="right">{-expense} грн</td>
    </tr>
    </tbody>
</Table>