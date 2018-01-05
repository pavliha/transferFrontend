import React from 'react';
import {Button, Col, Input, Row} from 'reactstrap';

export default ({onSubmit}) =>
    (<form method="post" className="container">
        <Row>
            <Col xs={12} md={6}>Имя</Col>
            <Col xs={12} md={6}>
                <Input name='first_name' type='text' placeholder="Имя" required/>
            </Col>
            <Col xs={12} md={6}>Фамилия</Col>
            <Col xs={12} md={6}>
                <Input name='last_name' type='text' placeholder="Фамилия" required/>
            </Col>
            <Col xs={12} md={6}>Email</Col>
            <Col xs={12} md={6}>
                <Input name='email' type='email' placeholder="Email" required/>
            </Col>
            <Col xs={12} md={6}>Номер телефона</Col>
            <Col md={6}>
                <Input name='phone' type='tel' placeholder="Номер телефона" required/>
            </Col>
            <Col xs={12} md={6}>Пароль</Col>
            <Col md={6}>
                <Input name='password' type='password' placeholder="Пароль" required/>
            </Col>
        </Row>
        <div className="form-check">
            <label className="form-check-label">
                <Input className="form-check-input" name='agreement' type="checkbox" value="" />
                Я даю згоду на використання мого мобільного номеру телефону та e-mail для отримання
                інформаційних
                повідомлень від ТОВ "Название". Програма діє згідно Закону України "Про захист персональних
                даних".
                Ознайомитись з Умовами Ви можете тут
            </label>
        </div>
        <div className="form-check">
            <label className="form-check-label">
                <Input className="form-check-input" name='rules' type="checkbox" value=""/>
                Я згоджуюсь з правилами ....
            </label>
        </div>
        <Row className="justify-content-md-center">
            <Button color="primary" onClick={onSubmit}>Зарегистрироваться</Button>
        </Row>

    </form>);
