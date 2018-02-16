import React from "react";
import {Link, Route} from "react-router-dom"
import SettingsProfile from "./Profile"
import Passport from "./Passport"
import {Card, Col, Menu, Row} from "antd"
import LayoutContainer from "../../../components/Layout/LayoutContainer"
import {Container} from "reactstrap"


export default () =>
  <LayoutContainer>
    <Container>
      <Row>
        <Col span={6}>
          <Menu
            style={{width: 256}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline">
            <Menu.Item key="1"><Link to='/settings/profile'>Profile</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/settings/passport'>Passport</Link></Menu.Item>
          </Menu>
        </Col>
        <Col span={18}>
          <Card>
            <Route exact path="/settings/passport" component={Passport}/>
            <Route exact path="/settings/profile" component={SettingsProfile}/>
          </Card>
        </Col>
      </Row>
    </Container>
  </LayoutContainer>
