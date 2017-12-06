import React from 'react'
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const {total, children, user} = this.props
        return <div>
            <Navbar light className="navbar-expand-md" color='bg-white'>
                <Container>
                    <NavbarBrand href="#"><img src='/assets/logo.svg'/> </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem className="active mx-2">
                                <NavLink href="#">Get Inspired <span className="sr-only">(current)</span></NavLink>
                            </NavItem>
                            <NavItem className="mx-2">
                                <NavLink href="#">My trips</NavLink>
                            </NavItem>
                            <NavItem className="mx-4">
                                <NavLink href="#"><i className='fa  fa-comment-o'/> </NavLink>
                            </NavItem>
                        </Nav>
                        <div className="my-2 my-lg-0 d-flex align-items-center mx-2">
                            <div className='dummy-avatar'/>
                            <span className='ml-2'>{user ? user.name : "Anonymous user"}</span>
                        </div>
                    </Collapse>
                </Container>
            </Navbar>

            {children}
        </div>
    }

}