import React,{useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../css/MapComponent.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Destination from './Destination';
import axios from 'axios';

const MapComponent = ({lat,lon,place}) => {
  if(lat===null && lon===null && place.length===0){
    return(<div>Loading...</div>)
  }

  const [center, setCenter] = useState([lat, lon]);
  useEffect(() => {
    setCenter([lat, lon]);
  }, [lat, lon]);

  return (
    <div>
     <div className="mapContainer" style={{marginTop:'5vw'}}>
      <Navbar/>
      <MapContainer center={center} zoom={13} className='map'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {/* {destinations.map((destination) => ( */}
        <Marker position={center}>
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
    {/* <div className="position-relative w-75 mx-auto animated slideInDown mt-5 mapSearch">
                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" value={location} placeholder="Eg: India" onChange={(e) => setLocation(e.target.value)}/>
                    <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{marginTop:'7px'}} onClick={handleSubmit}>Search</button>
      </div> */}
    <Destination place={place}/>
      <Footer/>
    </div>
  )
}

export default MapComponent
