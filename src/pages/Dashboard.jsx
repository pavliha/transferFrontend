import React, {Component} from 'react'
import Layout from "../components/Layout/LayoutContainer";
import GoogleMapContainer from "../components/CargoSearch/GoogleMapContainer";

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
export default class DashBoard extends Component {
    state = {
        distance: 10,
        from: "Tymoshivka, Zaporiz'ka oblast, 72030",
        to: "112B, Kosmichna St, 112Б, Zaporizhzhia, Zaporiz'ka oblast, 69000",
        type: "gas_station",
        nearByRoutes: [],
        keyword: "",
        name: "",
    }
    render() {
        return <Layout>

        </Layout>
    }

}
