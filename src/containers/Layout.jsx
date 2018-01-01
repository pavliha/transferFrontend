import React from 'react'
import GuestNavbar from "../components/GuestNavbar";
import {Container} from "reactstrap";
import {connect} from "react-redux";
import UserNavbar from "../components/UserNavbar";


const Layout = ({children, user}) =>
    <div>
        {user ? <UserNavbar user={user}/> : <GuestNavbar/>}

        <Container className='mt-5'>
            {children}
        </Container>
    </div>


export default connect(store => store.indexReducer)(Layout)
