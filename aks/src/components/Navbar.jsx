import React ,{useState}from "react";
import { Link } from "react-router-dom"
import '../css/Navbar.css'
export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
      <div className={`navContainer ${isMenuOpen ? 'show' : ''}`}>
        <div className={`nav ${isMenuOpen ? 'show' : ''}`}>
            <img src="src/assets/airplane.png" alt="" id="logo"/>
            <p className="openlake">OpenLake</p>
            <div className="nav_buttons">
                <Link className="home">Home</Link>
                <Link className="about">About</Link>
                <Link className="services">Services</Link>
                <Link className="packages">Packages</Link>
                <Link className="contact">Contact</Link>
            </div>
            <button className="register">REGISTER</button>
        </div>
            <img src="src/assets/Burger-menu.webp" alt="" className={`burgerMenu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}/>
      </div>
    )
}