import React from 'react'
import GuestNavbar from "./GuestNavbar";
import {Container} from "reactstrap";

export default ({children}) =>
    <div>
        <GuestNavbar/>

        <Container className='mt-5'>
            {children}
        </Container>
    </div>
