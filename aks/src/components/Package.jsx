import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Package = () => {

    const pavckageArray=[{
        location:'Thailand',
        days:2,
        persons:3,
        price:140,
        description:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        location:'India',
        days:2,
        persons:3,
        price:140,
        description:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        location:'Indonesia',
        days:2,
        persons:3,
        price:140,
        description:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        location:'China',
        days:4,
        persons:3,
        price:140,
        description:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        location:'Brazil',
        days:2,
        persons:3,
        price:140,
        description:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    }];
  return (
    <div>
        <Navbar/>
        <div className="container-xxl" style={{marginTop:'12vw'}}>
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">Awesome Packages</h1>
                </div>
        <div className="row g-4 justify-content-center" >
            {pavckageArray.map((item,index)=>(
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                        <div className="package-item">
                            <div className="d-flex border-bottom">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>{item.location}</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{item.days} days</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{item.persons} Person</small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0">${item.price}</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                </div>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Link to='' className="btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</Link>
                                    <Link to='' className="btn btn-sm btn-primary px-3" style={{borderRadius: '30px 0 0 30px'}}>Book Now</Link>
                                </div>
                            </div>
                        </div>
                     </div>
                   ))}
                 </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Package
