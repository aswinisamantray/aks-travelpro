import React,{useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../css/MapComponent.css'
import Navbar from './navbar';
import Footer from './Footer';
import Destination from './Destination';
import axios from 'axios';

const MapComponent = ({lat,lon,place}) => {

    // const [coordinates,setCoordinates]=useState({ lat: null, lon: null });
    // const [location,setLocation]=useState('');
    var latitude=null;
    var longitude=null;

    const handleSubmit=async ()=>{
      try {
        const response = await axios.get(
              `https://geocode.maps.co/search?q=${location}`
        );
  
        const geoCoordinates=response.data[0];
        if (geoCoordinates) {
           latitude=geoCoordinates.lat;
           longitude=geoCoordinates.lon;
          console.log(latitude,longitude);
        } else {
          console.log('Unable to fetch data');
        }
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    }

    // useEffect(()=>{
    //   setCoordinates({lat, lon});
    //   console.log(coordinates);
    // },[lat,lon]);

    // useEffect(()=>{changeCoordinates();},[coordinates]);
    // const destinations = [
    //     { name: 'Destination 1', latitude: 51.505, longitude: -0.09 },
    //     { name: 'Destination 2', latitude: 51.51, longitude: -0.1 },
    //   ];
    
      // const landmarks = [
      //   { name: 'Landmark 1', latitude: 19.0759899, longitude: 72.8773928 },
      //   { name: 'Landmark 2', latitude: 51.503, longitude: -0.1 },
      // ];

  return (
    <div>
     <div className="mapContainer" style={{marginTop:'5vw'}}>
      <Navbar/>
      <MapContainer center={[lat,lon]} zoom={13} className='map'>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        />
        {/* {destinations.map((destination) => ( */}
        <Marker position={[lat,lon]}>
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
    <div className="position-relative w-75 mx-auto animated slideInDown mt-5 mapSearch">
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" value={location} placeholder="Eg: India" onChange={(e) => setLocation(e.target.value)}/>
                            <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{marginTop:'7px'}} onClick={handleSubmit}>Search</button>
                    </div>
    <Destination place={place}/>
      <Footer/>
    </div>
  )
}

export default MapComponent
