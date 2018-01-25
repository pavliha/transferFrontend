import React from 'react';
import {Button, Col, Form, Input, Label, FormGroup} from 'reactstrap';

export default ({onSubmit}) => {

    return <Form>
        <FormGroup row>
            <Label for="surname" sm={3}>Отчество</Label>
            <Col sm={9}>
                <Input type="text" name="surname" placeholder="Отчество"/>
            </Col>
            <div className="ml-3 mt-2"/>
            {/*<FormFeedback className='text-danger ml-3 mt-2'>....</FormFeedback>*/}
        </FormGroup>
        <FormGroup row>
            <Label for="series" sm={3}>Серия паспорта</Label>
            <Col sm={9}>
                <Input type="text" name="series" placeholder="Серия"/>
            </Col>
            <div className="ml-3 mt-2"/>
        </FormGroup>
        <FormGroup row>
            <Label for="series" sm={3}>Номер паспорта</Label>
            <Col sm={9}>
                <Input type="text" name="series" placeholder="Номер паспорта"/>
            </Col>
            <div className="ml-3 mt-2"/>
        </FormGroup>
        <FormGroup row>
            <Label for="issued" sm={3}>Выдан</Label>
            <Col sm={4}>
                <Input className="ml-4" type="text" name="issued_when" placeholder="Когда"/>
                <div className="ml-3 mt-2"/>
            </Col>
            <Col sm={4}>
                <Input className="ml-4" type="text" name="issued_whom" placeholder="Кем"/>
                <div className="ml-3 mt-2"/>
            </Col>

        </FormGroup>
        <FormGroup row>
            <Label for="home" sm={3}>Место проживания</Label>
            <Col sm={9}>
                <Input type="text" name="home" placeholder="Место проживания"/>
            </Col>
            <div className="ml-3 mt-2"/>
        </FormGroup>
        <FormGroup check row>
            <Button color="primary" className="mt-2" onClick={onSubmit}>Сохранить паспортные данные</Button>
        </FormGroup>
    </Form>

}
