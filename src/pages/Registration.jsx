import React, {Component} from 'react'
import {Input, Button, Col, Row} from 'reactstrap';

export default() => {
        return <form method="post" className="container">
            <div className="d-flex">
                <Col xs={4} className="mt-1">
                    <p>Имя</p>
                    <p>Фамилия</p>
                    <p>Email</p>
                    <p>Номер телфона</p>
                </Col>
                <div className="col-4 m-1">
                    <Input placeholder="Имя"/>
                    <Input placeholder="Фамилия"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Номер телефона"/>
                </div>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <Input className="form-check-input" type="checkbox" value=""/>
                    Я даю згоду на використання мого мобільного номеру телефону та e-mail для отримання інформаційних
                    повідомлень від ТОВ "Название". Програма діє згідно Закону України "Про захист персональних даних".
                    Ознайомитись з Умовами Ви можете тут
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <Input className="form-check-input" type="checkbox" value=""/>
                    Я згоджуюсь з правилами ....
                </label>
            </div>
            <Row className="justify-content-md-center">
                <Button color="primary">Зарегистрироваться</Button>
            </Row>
        </form>
}