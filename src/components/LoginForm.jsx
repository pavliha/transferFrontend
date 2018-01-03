import React from 'react';
import {Button, Col, Input, Row} from 'reactstrap';

export default ({onSubmit}) =>
    <form className="container">
        <Row>
            <Col xs={12} md={6}>Email</Col>
            <Col xs={12} md={6}>
                <Input name='email' required type='email' placeholder="Email"/>
            </Col>
            <Col xs={12} md={6}>Пароль</Col>
            <Col md={6}>
                <Input name='password' required type='password' placeholder="Пароль"/>
            </Col>
            <div className="justify-content-md-center">
                <Button color="primary" onClick={onSubmit}>Войти</Button>
            </div>
        </Row>
    </form>