import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom"
import '../css/bootstrap.min.css'
import '../css/style.css'
import { useUserContext } from "../useContext/Context";
import useIsSpecialPage from "../hooks/useIsSpecialPage";

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [label,setLabel]=useState('');
    const { userName } = useUserContext();

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };    

      useEffect(()=>{
        if(userName.length>0){
            setLabel('Logout');
        }
        else{
            setLabel('Register');
        }
      },[userName])

      const logOut=()=>{
        const cookie='_ga';
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        userName.length=0;
        setLabel('Register');
      }

        const isSpecialPage=useIsSpecialPage();
      const navBG=isSpecialPage ? 'yellowgreen' : 'transparent';
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
                    <div className="nav-item dropdown">
                        <Link to='' className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                            <Link to='/404' className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <Link to='/contact' className='nav-item nav-link' onClick={toggleMenu}>Contact</Link>
                </div>
                {<Link to={userName.length>0?'/login':'/register'} className="btn btn-primary rounded-pill py-2 px-4" onClick={userName.length>0?logOut:''}>{label}</Link>}
            </div>
        </nav>
    )
}