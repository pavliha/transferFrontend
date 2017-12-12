import React from 'react'
import {Container} from "reactstrap";
import DailyExpensesCard from "../components/DailyExpensesCard";

const expenses = [
    {
        "name": "Varus",
        "amount": 200,
    },
    {
        "name": "Varus",
        "amount": 200,
    },
    {
        "name": "Varus",
        "amount": 200,
    },
    {
        "name": "Varus",
        "amount": 200,
    },
    {
        "name": "Varus",
        "amount": 200,
    },
]
export default () =>
    <div>

        <Container>
            <DailyExpensesCard day='сегодня' expenses={expenses}/>
        </Container>
    </div>