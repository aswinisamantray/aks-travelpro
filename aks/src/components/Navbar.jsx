import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom"
import '../css/bootstrap.min.css'
import '../css/style.css'
import useIsSpecialPage from "../hooks/useIsSpecialPage";
export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolling,setIsScrolling]=useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const isSpecialPage=useIsSpecialPage();
      const navBG=isSpecialPage ? 'yellowgreen' : 'transparent';
      const logoColor=isSpecialPage?'white':'yellowgreen';
    return(
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{backgroundColor:navBG}}>
            <Link to='/' className="navbar-brand p-0">
                <h1 className="m-0" style={{color:'white'}}><i className="fa fa-map-marker-alt me-3"></i>Travel Planner Pro</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to='/' onClick={toggleMenu} className='nav-item nav-link'>Home</Link>
                    <Link to='/about' className='nav-item nav-link' onClick={toggleMenu}>About</Link>
                    <Link to='/packages' className='nav-item nav-link' onClick={toggleMenu}>Packages</Link>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                            <Link to='/destination' className="dropdown-item">Destination</Link>
                            <Link to='/testimonials' className="dropdown-item">Testimonial</Link>
                            <Link to='/404' className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <Link to='/contact' className='nav-item nav-link' onClick={toggleMenu}>Contact</Link>
                </div>
                <Link to='/register' className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
            </div>
        </nav>
    )
}