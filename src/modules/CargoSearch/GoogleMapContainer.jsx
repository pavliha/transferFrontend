import React from "react";
import {withGoogleMap, GoogleMap, Marker, DirectionsRenderer, Rectangle} from "react-google-maps"
import DirectionsService from "../../api/maps/DirectionsService";
import RouteBoxer from "../../api/maps/RouteBoxer";

@withGoogleMap
export default class GoogleMapContainer extends React.Component {
    state = {
        center: {lat: 47.785480, lng: 35.208435},
        distance: 2,
        from: "Tymoshivka, Zaporiz'ka oblast, 72030",
        to: "112B, Kosmichna St, 112Б, Zaporizhzhia, Zaporiz'ka oblast, 69000",
        nearByRoutes: [],
        boxes: [],
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
        const {distance} = this.state
        const directionsService = new DirectionsService();
        const routeBoxer = new RouteBoxer()

        const directions = await directionsService.drive({
            origin: this.state.from,
            destination: this.state.to
        })

        const boxes = routeBoxer.generateBoxes({directions, distance})
        this.setState({directions, boxes})
    }
    async findCargo(){
        const routes = await this.routesGeocoder.geocodeRoutes(this.routes)

        return this.findRoutesInBoxes(routes, boxes)
    }

    findRoutesInBoxes(){
        const routesInBoxes = []
        for (const route of routes) {


            if ((typeof route.origin === 'object') && (typeof route.destination === 'object')) {
                const routeInBox = this.findRouteInBoxes(route, boxes)

                routesInBoxes.push(routeInBox)

            }
        }

        return routesInBoxes
    }

    render() {
        const {directions, boxes} = this.state

        return <GoogleMap
            center={this.state.center}
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}>

            <Marker position={{lat: 47.185852, lng: 35.100853}}/>
            {directions && <DirectionsRenderer directions={directions}/>}
            {boxes.map((box, index) =>
                <Rectangle
                    key={index}
                    bounds={box}
                    options={{
                        fillOpacity: 0,
                        strokeOpacity: 1.0,
                        strokeColor: '#000000',
                        strokeWeight: 1,
                    }}/>)}
        </GoogleMap>
    }
}