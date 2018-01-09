import React from 'react';
import {Button, Col, Form, Input, Label, Row, FormGroup} from 'reactstrap';

export default ({onSubmit}) =>

    <Form>
        <FormGroup row>
            <Label for="first_name" sm={3}>Имя</Label>
            <Col sm={9}>
                <Input type="text" name="first_name" placeholder="Имя"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="last_name" sm={3}>Фамилия</Label>
            <Col sm={9}>
                <Input type="text" name="last_name" placeholder="Фамилия"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleEmail" sm={3}>Email</Label>
            <Col sm={9}>
                <Input type="email" name="email" placeholder="Email"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="phone" sm={3}>Номер телефона</Label>
            <Col sm={9}>
                <Input type="tel" name="phone" placeholder="Номер телефона"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword" sm={3}>Пароль</Label>
            <Col sm={9}>
                <Input type="password" name="password" placeholder="Пароль"/>
            </Col>
        </FormGroup>
        <FormGroup check row>
            <div className="justify-content-md-center">
                <Button color="primary" className="mt-2" onClick={onSubmit}>Зарегистрироваться</Button>
            </div>
        </FormGroup>
    </Form>


