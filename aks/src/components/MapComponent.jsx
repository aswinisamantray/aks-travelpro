import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../css/MapComponent.css'
import Navbar from './navbar';

const MapComponent = ({lat,lon,place}) => {

    // const destinations = [
    //     { name: 'Destination 1', latitude: 51.505, longitude: -0.09 },
    //     { name: 'Destination 2', latitude: 51.51, longitude: -0.1 },
    //   ];
    
      // const landmarks = [
      //   { name: 'Landmark 1', latitude: 19.0759899, longitude: 72.8773928 },
      //   { name: 'Landmark 2', latitude: 51.503, longitude: -0.1 },
      // ];
      
  return (
     <div className="mapContainer" style={{marginTop:'5vw'}}>
      <Navbar/>
        <MapContainer center={[lat||50,lon||50]} zoom={13} className='map'>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        />
        {/* {destinations.map((destination) => ( */}
        <Marker position={[lat, lon]}>
            <Popup>{place}</Popup>
        </Marker>
        {/* ))} */}
        {/* {landmarks.map((landmark) => (
        <Marker key={landmark.name} position={[landmark.latitude, landmark.longitude]}>
            <Popup>{landmark.name}</Popup>
        </Marker>
        ))} */}
        </MapContainer>
    </div>
  )
}

export default MapComponent
