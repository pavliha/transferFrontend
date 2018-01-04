import React from 'react';
import JWT from 'jwt-decode'
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
  UncontrolledDropdown,
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

  // handelSaveLocalStorage(){
  //   const user = this.props;
  //
  // }

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
