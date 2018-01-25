import React from 'react';
import {
    Input,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
} from 'reactstrap';
import {Avatar, Dropdown, Icon, Menu} from "antd";


export default class UserNavbar extends React.Component {
    menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
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
                    <form className="form-inline my-2 my-lg-0">
                        <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
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
