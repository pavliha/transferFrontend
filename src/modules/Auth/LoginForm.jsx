import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default ({onSubmit}) =>

    <Form>
        <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword" sm={2}>Пароль</Label>
            <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="Пароль"/>
            </Col>
        </FormGroup>
        <FormGroup check row>
            <Col sm={{size: 10, offset: 2}}>
                <Button color="primary" className="mt-2" onClick={onSubmit}>Войти</Button>
            </Col>
        </FormGroup>
    </Form>