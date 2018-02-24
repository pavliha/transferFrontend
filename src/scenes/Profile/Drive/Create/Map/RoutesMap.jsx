import React from 'react'
import DirectionsService from '../../../../../services/api/maps/DirectionsService'
import RouteBoxer from '../../../../../services/routeBoxer'
import StartMarker from "../../../../../services/api/maps/Marker/StartMarker"
import StopMarker from "../../../../../services/api/maps/Marker/StopMarker"
import DriveMap from "./DriveMap"

export default class RoutesMapContainer extends React.Component {
  state = {
    center: {lat: 47.785480, lng: 35.208435},
    routesInArea: [],
    boxes: [],
  }
  originMarkers = []
  destinationMarkers = []

  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        const latLng = new google.maps.LatLng(coords.latitude, coords.longitude)
        this.setState({center: latLng})
      })
    }

    const {radius, from, to, drives} = this.props

    const directionsService = new DirectionsService()
    const routeBoxer = new RouteBoxer()

    const directions = await directionsService.drive({origin: from, destination: to})


    const boxes = routeBoxer.generateBoxes(directions, radius)

    this.setState({directions, boxes})

    const routesInArea = this.findRoutesInBoxes(drives, boxes)

    const directionsInArea = []
    for (const routeInArea of routesInArea) {
      const directions = await directionsService.drive({
        origin: routeInArea.origin,
        destination: routeInArea.destination
      })
      directionsInArea.push(directions)
    }

    this.setState({directions, boxes, routesInArea, directionsInArea})

  }

  // async findCargo(routes) {
  //   const routes = await this.routesGeocoder.geocodeRoutes(routes)
  //
  //   return this.findRoutesInBoxes(routes, boxes)
  // }

  findRoutesInBoxes(routes, boxes) {
    const routesInBoxes = []
    for (const route of routes) {
      if ((typeof route.from === 'object') && (typeof route.to === 'object')) {
        const routeInBox = this.findRouteInBoxes(route, boxes)
        if (routeInBox) routesInBoxes.push(routeInBox)
      }
    }

    return routesInBoxes
  }

  findRouteInBoxes(route, boxes) {
    if (this.isPointInBoxes(route.from, boxes) && this.isPointInBoxes(route.to, boxes)) {
      const startMarker = new StartMarker(this.map, route.from)

      this.originMarkers.push(startMarker)

      const stopMarker = new StopMarker(this.map, route.to)
      this.destinationMarkers.push(stopMarker)

      return route

    }
    return false
  }

  isPointInBoxes({lat, lng}, boxes) {
    let result = false

    for (const box of boxes) {
      if (box.contains({lat, lng})) {
        result = true
      }
    }
    return result
  }

  render() {
    const {directions, boxes, routesInArea, directionsInArea, center} = this.state
    return (
      <DriveMap
        center={center}
        directions={directions}
        routesInArea={routesInArea}
        directionsInArea={directionsInArea}
        boxes={boxes}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA0E-RRtQWldjEQLFkAOWDgMSj295C0Lo&libraries=places,visualization"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `400px`}}/>}
        mapElement={<div style={{height: `90vh`}}/>}
      />)
  }
}