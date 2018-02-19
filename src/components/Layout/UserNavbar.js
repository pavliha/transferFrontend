import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink,} from 'reactstrap';
import {Avatar, Button, Dropdown, Icon, Menu} from "antd";
import {Link} from "react-router-dom"

export default class UserNavbar extends React.Component {
  menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/settings/profile">Settings</Link>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3"><span onClick={this.props.onLogout}>Logout</span></Menu.Item>
    </Menu>
  );

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
          <Link to='/profile/drive/create'><Button type='primary'>Создать поездку</Button></Link>
          <Link to='/profile/cargo'>Мои грузы</Link>
          <Link to='/profile/cargo/create'><Button type='primary'>Добавить груз</Button></Link>
          <Nav navbar>
            <NavItem>
              <NavLink>
                <Dropdown overlay={this.menu} trigger={['click']}>
                  <div className='d-flex align-items-center'>
                    <Avatar size="large" icon="user"/>
                    <span className='px-2'>{`${user.first_name} ${user.last_name}`}</span> <Icon
                    type="down"/>
                  </div>
                </Dropdown>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
