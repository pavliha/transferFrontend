import React from "react";
import WelcomeNavbar from "./WelcomeNavbar";
import {Container} from "reactstrap";
import AddExpenseCardContainer from "../../modules/AddExpenseCard/AddExpenseCardContainer";

export default ({className}) =>
    <div className={className}>
        <WelcomeNavbar className='mb-2'/>
        <Container>
            <div className='text-center pt-5'>Пусто</div>
            <AddExpenseCardContainer/>
        </Container>
    </div>
      
