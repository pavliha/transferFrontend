import React from "react";
import {Link, Route} from "react-router-dom"
import SettingsProfile from "./ProfileScene"
import Passport from "./PassportScene"
import {Card, Col, Menu, Row} from "antd"
import Layout from "../../../components/Layout/Layout"
import {Container} from "reactstrap"
import Password from "./PasswordScene"


export default () =>
  <Layout>
    <Container>
      <Row>
        <Col span={6}>
          <Menu
            style={{width: 256}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline">
            <Menu.Item key="1"><Link to='/settings/profile'>Профиль</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/settings/passport'>Паспортные данные</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/settings/password'>Изменить пароль</Link></Menu.Item>
          </Menu>
        </Col>
        <Col span={18}>
          <Card>
            <Route exact path="/settings/passport" component={Passport}/>
            <Route exact path="/settings/profile" component={SettingsProfile}/>
            <Route exact path="/settings/password" component={Password}/>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
