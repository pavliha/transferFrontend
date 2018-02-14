import React from 'react';
import DirectionsService from '../../api/maps/DirectionsService';
import RouteBoxer from '../../services/routeBoxer';
import RoutesGeocoder from "../../api/maps/RoutesGeocoder"
import StartMarker from "../../api/maps/Marker/StartMarker"
import StopMarker from "../../api/maps/Marker/StopMarker"
import CargoSearchMap from "./CargoSearchMap"

export default class GoogleMapContainer extends React.Component {
  state = {
    center: {lat: 47.785480, lng: 35.208435},
    distance: 2,
    from: 'Tymoshivka, Zaporiz\'ka oblast, 72030',
    to: '112B, Kosmichna St, 112Б, Zaporizhzhia, Zaporiz\'ka oblast, 69000',
    routesInArea: [],
    boxes: [],
  }
  originMarkers = []
  destinationMarkers = []

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        const latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
        this.setState({center: latLng});
      });
    }

    const {distance} = this.state;
    const directionsService = new DirectionsService();
    const routeBoxer = new RouteBoxer();

    const directions = await directionsService.drive({
      origin: this.props.from.label,
      destination: this.props.to.label
    });

    const boxes = routeBoxer.generateBoxes({directions, distance});
    this.setState({directions, boxes});
    const routesGeocoder = new RoutesGeocoder()
    const routesLatLng = await routesGeocoder.geocodeRoutes(this.props.routes);

    const routesInArea = this.findRoutesInBoxes(routesLatLng, boxes);

    const directionsInArea = []
    for (const routeInArea of routesInArea) {
      const directions = await directionsService.drive({
        origin: routeInArea.origin,
        destination: routeInArea.destination
      });
      directionsInArea.push(directions)
    }

    this.setState({directions, boxes, routesInArea, directionsInArea});

  }

  // async findCargo(routes) {
  //   const routes = await this.routesGeocoder.geocodeRoutes(routes);
  //
  //   return this.findRoutesInBoxes(routes, boxes);
  // }

  findRoutesInBoxes(routes, boxes) {
    const routesInBoxes = [];
    for (const route of routes) {
      if ((typeof route.origin === 'object') && (typeof route.destination === 'object')) {
        const routeInBox = this.findRouteInBoxes(route, boxes);
        if (routeInBox) routesInBoxes.push(routeInBox);
      }
    }

    return routesInBoxes;
  }

  findRouteInBoxes(route, boxes) {
    if (this.isPointInBoxes(route.origin, boxes) && this.isPointInBoxes(route.destination, boxes)) {
      const startMarker = new StartMarker(this.map, route.origin)

      this.originMarkers.push(startMarker)

      const stopMarker = new StopMarker(this.map, route.destination)
      this.destinationMarkers.push(stopMarker)

      return route

    }
    return false
  }

  isPointInBoxes(point, boxes) {
    let result = false

    for (const box of boxes) {
      if (box.contains(point)) {
        result = true
      }
    }
    return result
  }

  render() {
    const {directions, boxes, routesInArea, directionsInArea, center} = this.state;
    return (
      <CargoSearchMap
        center={center}
        directions={directions}
        routesInArea={routesInArea}
        directionsInArea={directionsInArea}
        boxes={boxes}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA0E-RRtQWldjEQLFkAOWDgMSj295C0Lo&libraries=places,visualization"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `400px`}}/>}
        mapElement={<div style={{height: `90vh`}}/>}
      />);
  }
}