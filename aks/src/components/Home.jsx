import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({ onLocationSelect }) => {
  const [place, setPlace] = useState('');
  const handleSubmit=async ()=>{
    try {
      const response = await axios.get(
            `https://geocode.maps.co/search?q=${place}`
      );

      const coordinates=response.data[0];
      if (coordinates) {
        const lat=coordinates.lat;
        const lon=coordinates.lon;
        console.log(lat,lon);
        onLocationSelect({ latitude: lat, longitude: lon,place:place});
      } else {
        console.log('Unable to fetch data');
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  }
  
  return (
    <div className="container-fluid position-relative p-0">
      <Navbar/>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Plan Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">Get the details of best hotels and places at most affordable price</p>
                        <div className="position-relative w-75 mx-auto animated slideInDown">
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" value={place} placeholder="Eg: India" onChange={(e) => setPlace(e.target.value)}/>
                            <Link type="button" to='/map' className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{marginTop:'7px'}} onClick={handleSubmit}>Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Home
