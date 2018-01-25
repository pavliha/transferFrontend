import React, {Component} from 'react'
import Layout from "../modules/Layout/LayoutContainer";
import {connect} from "react-redux";
import GoogleMapContainer from "../modules/CargoSearch/GoogleMapContainer";
import {Card} from "antd"
import Geosuggest from 'react-geosuggest';

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
@connect(state => state.userReducer)
export default class DashBoard extends Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
    const fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ];
    return <Layout>
      <Card title='Куда едем?'>
        <Geosuggest
          placeholder="Start typing!"
          onSuggestSelect={this.onSuggestSelect}/>
        <Geosuggest
          placeholder="Start typing!"
          onSuggestSelect={this.onSuggestSelect}/>
      </Card>
      <GoogleMapContainer
        routes={routes}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA0E-RRtQWldjEQLFkAOWDgMSj295C0Lo&libraries=places,visualization"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `400px`}}/>}
        mapElement={<div style={{height: `90vh`}}/>}
      />
    </Layout>
  }

}
