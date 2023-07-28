import React ,{useState}from "react";
import { Link } from "react-router-dom"
import '../css/bootstrap.min.css'
import '../css/style.css'
export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <Link to='/home' className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Travel Planner Pro</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to='/home' className="nav-item nav-link active">Home</Link>
                    <Link to='/about' className="nav-item nav-link">About</Link>
                    <Link to='/services' className="nav-item nav-link">Services</Link>
                    <Link to='/packages' className="nav-item nav-link">Packages</Link>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                            <Link to='/destination' className="dropdown-item">Destination</Link>
                            <Link to='/booking' className="dropdown-item">Booking</Link>
                            <Link to='/testimonials' className="dropdown-item">Testimonial</Link>
                            <Link to='/404' className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <Link to='/contact' className="nav-item nav-link">Contact</Link>
                </div>
                <Link to='' className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
            </div>
        </nav>
    )
}