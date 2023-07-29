import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import '../css/bootstrap.min.css'
import '../css/style.css'

const Services = () => {
  return (
    <div className="container-fluid position-relative p-0">
        <Navbar />
        <div className="container-fluid bg-transparent py-5" style={{height:'1vh'}}>
        </div>
        <div className="container-xxl">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5>WorldWide Tours</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                            <h5>Hotel Reservation</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text-primary mb-4"></i>
                            <h5>Travel Guides</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services
