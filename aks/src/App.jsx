import React,{ useState ,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Login from './components/LoginForm';
import Register from './components/Register';
import MapComponent from './components/MapComponent';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Error from './components/Error';
import Executive from './components/Executive';

function App() {
  const [latitude,setLatitude]=useState(null);
  const [longitude,setLongitude]=useState(null);
  const [token, setToken] = useState(null);
  const [place,setPlace]=useState('');
  
  const handleLocationSelect =(coordinates) => {
    setLatitude(coordinates.latitude);
    setLongitude(coordinates.longitude);
    setPlace(coordinates.place);
  };

  const handleTokenChange=(jwebtoken)=>{
    setToken(jwebtoken);
  }
  return (
    <>
    <Router>
      <Routes>
         <Route exact path='/' element={<Home onLocationSelect={handleLocationSelect}/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/register' element={<Register/>}/>
         <Route exact path='/faq' element={<FAQ/>}/>
         <Route exact path='/contact' element={<Contact/>}/>
         <Route exact path='/executive' element={<Executive/>}/>
          <Route exact path='/map' element={<MapComponent lat={latitude} lon={longitude} place={place}/>} />
          <Route exact path='/404' element={<Error/>}/>
       </Routes>
    </Router>
    </>
  )
}

export default App
