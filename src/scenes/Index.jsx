import React, {Component} from 'react'
import Layout from '../components/Layout/LayoutHOC'
import {
  Button, Card, CardText, CardTitle, Col, Form, FormGroup, Label, Row, Input, Container
} from "reactstrap";

const routes = [
  {
    package: {
      name: "кирпичи",
    },
    origin: {lat: 47.178526, lng: 35.111407},
    destination: {lat: 47.789085, lng: 35.211338}
  }, {
    package: {
      name: "пакет",
    },
    origin: "вул. Леніна 2, Запорізька обл. Михайлівський р-н. смт. Михайлівка, Zaporiz'ka oblast, 72000",
    destination: "Pivdenne Hwy, 72, Zaporizhzhia, Zaporiz'ka oblast, 69000"
  }, {
    package: {
      name: "бухло",
    },
    origin: "Пушкiна 36, Tymoshivka, Zaporiz'ka oblast, 72030",
    destination: "космічна 119, Zaporizhzhia, Zaporiz'ka oblast, 69000"
  }, {
    package: {
      name: "бита",
    },
    origin: "вул. Леніна, 10, Mykhailivka, Zaporiz'ka oblast, 72000",
    destination: {lat: 47.338033, lng: 35.069088}
  }
]

@Layout
export default class Index extends Component {



  componentDidMount() {

    // google.maps.event.addDomListener(window, 'load', () => {
    //     this.cargoFinder = new CargoFinder(document.querySelector("#map"), routes)
    // });
  }

  async route() {


    const request = {

      origin: this.state.from,
      destination: this.state.to,
      distance: this.state.distance,
    }


    const nearByRoutes = await this.cargoFinder.find(request)

    debugger


    this.setState({nearByRoutes})


  }

  render() {
    return <div>landing page</div>
  }

}
