import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';


const LayoutContainer = ({children, user}) =>
    (<div>
        {user ? <UserNavbar user={user}/> : <GuestNavbar/>}

        <Container className='mt-5'>
            {children}
        </Container>
    </div>);


export default connect(store => store.indexReducer)(LayoutContainer);
