import React, {Component} from 'react'
import CargoFinder from "../api/maps/CargoFinder"
import {Button, Card, CardHeader, Col, Input, Row, Table} from "reactstrap";

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
        return <div>
            <Row>
                <Col md={3}>
                    <Card>
                        <CardHeader>Грузы:</CardHeader>
                        <Table>
                            <tr>
                                <td>Имя груза</td>
                            </tr>
                        </Table>
                    </Card>
                </Col>
                <Col md={9}>
                    <div id="map" style={{width: "100%", height: 500}}/>
                </Col>
            </Row>

            <label>
                <Input type="text" id="distance"
                       value={this.state.distance}
                       onChange={(e) => this.setState({distance: e.target.value})}
                       size={2}/>
            </label>
            <label>
                Откуда
                <Input type="text" id="from"
                       value={this.state.from}
                       onChange={(e) => this.setState({from: e.target.value})}/>
            </label>
            <label>
                Куда
                <Input type="text" id="to"
                       value={this.state.from}
                       onChange={(e) => this.setState({from: e.target.value})}/>
            </label>
            <Button type="submit" color='primary' onClick={this.route.bind(this)}>Проложить путь</Button>

        </div>
    }

}
