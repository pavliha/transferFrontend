import React from "react";
import {withGoogleMap, GoogleMap, Marker, DirectionsRenderer, Rectangle} from 'react-google-maps';

@withGoogleMap
export default class RoutesMap extends React.Component {
  render() {
    const {center,routesInArea, directionsInArea, directions, boxes} = this.props
    return <GoogleMap
      center={center}
      defaultZoom={8}
      defaultCenter={{lat: -34.397, lng: 150.644}}>
      {routesInArea.map((routeInArea, index) => <Marker key={index} position={routeInArea.origin}/>)}
      {routesInArea.map((routeInArea, index) => <Marker key={index} position={routeInArea.destination}/>)}

      {directionsInArea && directionsInArea.map((direction, key) =>
        <DirectionsRenderer key={key} directions={direction}/>)}
      {directions &&
      <DirectionsRenderer
        options={{
          polylineOptions: {
            strokeColor: "#a30200",
            strokeOpacity: 0.9,
            strokeWeight: 4,
            zIndex: 99,
          }
        }}
        directions={directions}/>
      }
      {boxes.map((box, index) =>
        (<Rectangle
          key={index}
          bounds={box}
          options={{
            fillOpacity: 0,
            strokeOpacity: 1.0,
            strokeColor: '#000000',
            strokeWeight: 1,
          }}/>))}
    </GoogleMap>
  }
}