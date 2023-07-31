import React,{ useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Services from './components/Services';
import Package from './components/Package';
import Login from './components/LoginForm';
import Register from './components/Register';
import MapComponent from './components/MapComponent';
import FAQ from './components/FAQ';

function App() {
  const [latitude,setLatitude]=useState(null);
  const [longitude,setLongitude]=useState(null);
  const [place,setPlace]=useState('');
  
  const handleLocationSelect =(coordinates) => {
    setLatitude(coordinates.latitude);
    setLongitude(coordinates.longitude);
    setPlace(coordinates.place);
  };
  return (
    <>
    <Router >
    <Routes>
         <Route exact path='/' element={<Home onLocationSelect={handleLocationSelect}/>}/>
         <Route exact path='/services' element={<Services/>}/>
         <Route exact path='/packages' element={<Package/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/register' element={<Register/>}/>
         <Route exact path='/faq' element={<FAQ/>}/>
         {latitude && longitude && (
            <Route exact path='/map' element={<MapComponent lat={latitude} lon={longitude} place={place}/>} />
          )}
       </Routes>
    </Router>
    </>
  )
}

export default App
