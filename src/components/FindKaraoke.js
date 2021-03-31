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
  width: '100%',
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
    <div className="map-div">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {markerArray}
      </GoogleMap>
    </div>
  ) : <></>
}

export default FindKaraoke;

const karaokeBars = [
  {name: "Karaoke City", lat: 40.74766909674729, long: -73.98695470244253},
  {name: "Lion's Roar Karaoke House", lat: 40.70850439323014, long: -73.94134376771316},
  {name: "Beats Karaoke", lat: 40.71396399160001, long: -73.9596097032922},
  {name: "Radio Star Karaoke", lat: 40.74954136713679, long: -73.98464559775144},
  {name: "Karaoke Duet 35", lat: 40.75019639898501, long: -73.98632177996014},
  {name: "Alligator Lounge", lat: 40.71398530612586, long: -73.94895849776961},
  {name: "Baby Grand", lat: 40.719983903294086, long: -73.9991092645482},
  {name: "Karaoke Duet 53", lat: 40.764182187313146, long: -73.98432082489039},
  {name: "Karaoke One 7", lat:40.73877341958647, long: -73.993668062175},
  {name: "Planet Rose", lat: 40.730211637904624, long: -73.98085753886585},
  {name: "K-One", lat: 40.717454690594444, long: -73.99513403887238},
  {name: "Karaoke Boho", lat: 40.720762401761455, long: -73.98869286893418},
  {name: "The Ale House", lat: 40.750342728042774, long: -74.03120019724398},
  {name: "Volume Up Karaoke", lat: 40.825536250864815, long: -73.97487077439897},
  {name: "Biny Karaoke Bar and Lounge", lat: 40.721953979283576, long: -74.00499936831778},
  {name: "Gagopa Karaoke", lat: 40.74770483358045, long: -73.98703502106595},
  {name: "5 Bar Karaoke & Lounge", lat: 40.74778763344424, long: -73.98741657996135},
  {name: "Wicked Willy's", lat: 40.72840240575578, long: -73.99930306218032},
  {name: "100 Fun", lat: 40.633404674857665, long: -74.00667986836307},
  {name: "Iggy's", lat: 40.77115275355481, long: -73.95640764463097}
]
// Gagopa Karaoke 40.748488171799636, -73.98548738674017
// Karaoke City 40.748631631384214, -73.98403649575103
// 32 Karaoke 40.748491996377076, -73.98557624070996
