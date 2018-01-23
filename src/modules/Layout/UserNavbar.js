import React from 'react';
import {
    Input,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class GuestNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const {user} = this.props;

        return (
            <div>

                <Navbar className="navbar-light bg-light" expand="md">
                    <NavbarBrand href="/">Transfer</NavbarBrand>
                    <form className="form-inline my-2 my-lg-0">
                        <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>{`${user.first_name} ${user.last_name}`}</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
