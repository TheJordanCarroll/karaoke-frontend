// import React from "react";
// import GoogleMapReact from 'google-map-react';
// import Marker from "./Marker.js";

// function FindKaraoke() {
//     return (
//         <main>
//         <div style={{ height: '80vh', width: '75%'}}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//           defaultCenter={{
//             lat: 40.73,
//             lng: -74.00
//         }}
//           defaultZoom={15}
//         >
//           <Marker
//             lat={40.73}
//             lng={-74.00}
//             name="My Marker"
//             color="blue"
//           />
//         </GoogleMapReact>
//       </div>
//       </main>
//     );
//   }
  
// export default FindKaraoke;

import React, {useContext} from 'react'
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '400px'
};

const center = {
  lat: 40.7484,
  lng: -73.9857
};

function FindKaraoke() {
  const options = {
    imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', 
  }
 
  const markerArray = (
      <MarkerClusterer options={options}>
      {(clusterer) =>
        karaokeBars.map((bar)=> {
          return (
            <Marker 
              key={bar.name} 
              position= {{
                lat: parseFloat(bar.lat), 
                lng: parseFloat(bar.long) 
              }}
              label={bar.name}
              // icon={bar.image}
              clusterer={clusterer}
            />
          )   
        })
      }
      </MarkerClusterer>
  )

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {markerArray}
      </GoogleMap>
  ) : <></>
}

export default FindKaraoke;

const karaokeBars = [
  {name: "Karaoke City", lat: 40.748631631384214, long: -73.98403649575103},
  {name: "Gagopa Karaoke", lat: 40.748488171799636, long: -73.98548738674017}
]
// Gagopa Karaoke 40.748488171799636, -73.98548738674017
// Karaoke City 40.748631631384214, -73.98403649575103
// 32 Karaoke 40.748491996377076, -73.98557624070996
