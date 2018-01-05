import React from 'react';
import JWT from 'jwt-decode'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
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
    const { user } = this.props;
    const JSWUser = JWT(user).data;
    localStorage.setItem("token",JSON.stringify(user));
    localStorage.setItem("user",JSON.stringify(JSWUser));

    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Transfer</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink>{`${JSWUser.first_name} ${JSWUser.last_name}`}</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
