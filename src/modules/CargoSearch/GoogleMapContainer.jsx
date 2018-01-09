import React from "react";
import {
    withGoogleMap,
    GoogleMap,
    TrafficLayer, Marker, DirectionsRenderer, Rectangle,
} from "react-google-maps"
import Directions from "../../api/maps/Directions";

@withGoogleMap
export default class GoogleMapContainer extends React.Component {
    state = {
        center: {lat: 47.785480, lng: 35.208435},
        distance: 10,
        from: "Tymoshivka, Zaporiz'ka oblast, 72030",
        to: "112B, Kosmichna St, 112Б, Zaporizhzhia, Zaporiz'ka oblast, 69000",
        nearByRoutes: [],
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                const latLng = new google.maps.LatLng(coords.latitude, coords.longitude)
                this.setState({center: latLng})
            });
        }

        this.route()
    }

    async route() {
        const directions = new Directions();
        const route = await directions.drive({
            origin: this.state.from,
            destination: this.state.to
        })

        this.setState({directions: route})
    }

    onMountMap(mapComponent) {

    }

    render() {
        const {directions,boxes} = this.state
        return <GoogleMap
            center={this.state.center}
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
            ref={this.onMountMap.bind(this)}>
            <Marker position={{lat: -34.397, lng: 150.644}}/>
            {directions && <DirectionsRenderer directions={directions}/>}
            {boxes.map((box,index)=><Rectangle/>}
        </GoogleMap>
    }
}