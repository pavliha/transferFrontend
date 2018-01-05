import React from 'react'
import {Nav, Navbar, NavbarBrand} from 'reactstrap';

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
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">transfer</NavbarBrand>
                    <Nav navbar>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}