import React from "react";
import WelcomeNavbar from "./WelcomeNavbar";
import {Container} from "reactstrap";
import AddExpenseCardContainer from "../../modules/AddExpenseCard/AddExpenseCardContainer";
import {Link} from "react-router-dom";

export default ({className, children}) =>
    <div className={className}>
        <WelcomeNavbar className='mb-2'/>
        <Container>
            {children}
            <nav className='fixed-bottom bg-dark d-flex justify-content-around' style={{height: 50, width: "100%"}}>
                <Link to='/daily'><i className="flaticon-calendar bottom-nav-icons"/></Link>
                <Link to='/monthly'><i className="flaticon-school-calendar bottom-nav-icons"/></Link>
            </nav>
            <AddExpenseCardContainer/>

        </Container>
    </div>
      
