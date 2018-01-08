import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';

@connect(store => store.indexReducer)
export default class LayoutContainer extends React.Component {
    componentDidUpdate() {
        const {token, user} = this.props

        token ? localStorage.setItem("token", JSON.stringify(token)) : null
        user ? localStorage.setItem("user", JSON.stringify(user)) : null
    }

    render() {
        const {user,children} = this.props
        return <div>
            {user ? <UserNavbar user={user}/> : <GuestNavbar/>}

            <Container fluid className='mt-3'>
                {children}
            </Container>
        </div>
    }
}
