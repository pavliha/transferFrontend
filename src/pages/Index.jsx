import React, {Component} from 'react'
import CargoFinder from "../api/maps/CargoFinder"
import {
    Button, Card, CardText, CardTitle, Col, Form, FormGroup, Label, Row, Input, Container
} from "reactstrap";
import LayoutContainer from "../modules/Layout/LayoutContainer";

const routes = [
    {
        package: {
            name: "кирпичи",
        },
        origin: {lat: 47.178526, lng: 35.111407},
        destination: {lat: 47.789085, lng: 35.211338}
    }, {
        package: {
            name: "шторы",
        },
        origin: {lat: 47.268105, lng: 35.222356},
        destination: {lat: 47.798083, lng: 35.291438}
    }, {
        package: {
            name: "пакет",
        },
        origin: {lat: 47.268105, lng: 35.222356},
        destination: {lat: 47.784185, lng: 35.612418}
    }, {
        package: {
            name: "бухло",
        },
        origin: {lat: 47.268105, lng: 35.222356},
        destination: {lat: 47.781095, lng: 35.110498}
    }, {
        package: {
            name: "бита",
        },
        origin: {lat: 47.231606, lng: 35.401359},
        destination: {lat: 47.338033, lng: 35.069088}
    }
]
export default class Index extends Component {


    state = {
        distance: 10,
        from: "Tymoshivka, Zaporiz'ka oblast, 72030",
        to: "112B, Kosmichna St, 112Б, Zaporizhzhia, Zaporiz'ka oblast, 69000",
        type: "gas_station",
        keyword: "",
        name: "",
    }

    cargoFinder = null;

    componentDidMount() {

        google.maps.event.addDomListener(window, 'load', () => {
            this.cargoFinder = new CargoFinder(document.querySelector("#map"), routes)
        });
    }

    route() {


        this.cargoFinder.find({
            origin: this.state.from,
            destination: this.state.to,
            distance: this.state.distance,
        })


    }

    render() {
        return <LayoutContainer>
            <Row>
                <Col xs={12}>
                    <div className=' d-flex justify-content-center mb-2'>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Distance:</Label>
                                <Input type="number" id="distance"
                                       style={{width: 70}}
                                       value={this.state.distance}
                                       onChange={(e) => this.setState({distance: e.target.value})}/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Откуда</Label>
                                <Input type="text" id="from"
                                       style={{width: 350}}
                                       value={this.state.from}
                                       onChange={(e) => this.setState({from: e.target.value})}/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Куда</Label>
                                <Input type="text" id="to"
                                       style={{width: 350}}
                                       value={this.state.to}
                                       onChange={(e) => this.setState({from: e.target.value})}/>
                            </FormGroup>
                            <Button type="submit" color='primary' onClick={this.route.bind(this)}>Проложить
                                путь</Button>
                        </Form>

                    </div>
                </Col>
                <Col md={8}>
                    <div id="map" style={{width: "100%", height: 750}}/>
                </Col>

                <Col md={4}>
                    <div style={{height: 750, overflow: "auto"}}>
                        {routes.map((route, index) =>
                            <Card className='mt-3 p-1' key={index} body inverse color="primary">
                                <CardTitle>{route.package.name}</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <CardText>
                                    <small className='text-muted'>{route.origin.lat + ", " + route.origin.lng}</small>
                                    {" - "}
                                    <small
                                        className='text-muted'>{route.destination.lat + ", " + route.destination.lng}</small>
                                </CardText>
                                <Button color="secondary">выбрать</Button>
                            </Card>
                        )}
                    </div>
                </Col>
            </Row>
        </LayoutContainer>
    }

}
