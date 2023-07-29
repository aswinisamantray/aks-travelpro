import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Services from './components/Services';
import Package from './components/Package';
import Login from './components/LoginForm';
import Register from './components/Register';

function App() {
  return (
    <>
    <Router >
    <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/services' element={<Services/>}/>
         <Route exact path='/packages' element={<Package/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/register' element={<Register/>}/>
       </Routes>
    </Router>
    </>
  )
}

export default App
