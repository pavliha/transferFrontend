import React from 'react'
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

export default class GuestNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const {user} = this.props
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>{user.first_name + " " + user.last_name}</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}