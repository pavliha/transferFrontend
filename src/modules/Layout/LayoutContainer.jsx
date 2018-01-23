import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';
import {loginUser} from "../Auth/user.action";

@connect(store => store.userReducer)
export default class LayoutContainer extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.props.dispatch(loginUser())
        }
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
