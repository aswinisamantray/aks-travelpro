import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message,setMessage]=useState('');

    const sendMail=()=>{
        const mailLink=`mailto:${'info@example.com'}`;
        window.location.href=mailLink;
    }

    const gMap=()=>{
        const mapLink=`https://www.google.com/maps?q=${37.7749},${-122.4194}`
        window.open(mapLink,'_blank');
    }

    const subscribed=async()=>{
        setMessage('');
        if(email===''){
            setMessage('Please enter a valid email');
            setTimeout(()=>{setMessage('')},5000);
            return;
        }
        const data={email};

        try {
            const response = await axios.post('https://travel-pro-backend.onrender.com/subscribe', data);
            if (response.data !== 'Already subscribed') {
                setMessage('Thank you for subscribing!');
                setEmail('');
                setTimeout(()=>{setMessage('')},5000);
            } else {
                setMessage(response.data);
                console.log(response.data);
            }
          } catch (error) {
            console.error(error);
          }
    };
  return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link className="btn btn-link" to="/faq">FAQs</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3" onClick={gMap}></i>XYZ Street, Old York, UNA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 XXXX</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3" onClick={sendMail}></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <Link className="btn btn-outline-light btn-social" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://www.youtube.com"><i className="fab fa-youtube"></i></Link>
                        <Link className="btn btn-outline-light btn-social" to="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Subscribe to our newsletter for latest updates</p>
                    <div className="position-relative mx-auto" style={{maxWidth:'400px'}}>
                        <input className="form-control border-primary w-100 py-3 ps-4 pe-5" value={email} type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)}/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" onClick={subscribed}>Subscribe</button>
                    </div>
                    {message && <p style={{ color: 'white' }}>{message}</p>}
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <Link to="/">Home</Link>
                            <Link to="/faq">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
