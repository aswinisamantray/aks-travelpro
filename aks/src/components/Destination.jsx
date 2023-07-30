import React,{useEffect,useState} from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import axios from 'axios'

// const apiKey = '5ae2e3f221c38a28845f05b613c7a21b5550c836fa73f383cb3a5762';

const Destination = ({place}) => {
    const [places,setPlaces]=useState([]);
    const showTourism=async()=>{
        try {
            const apikey='a152c4776795481c8e25a23732aff914';
            const response = await axios.get(
                `https://api.geoapify.com/v1/geocode/autocomplete?text=${place}&format=json&apiKey=${apikey}`    
            );
            const placeID=response.data.results[0].place_id;
            const touristPlaces=await axios.get(`https://api.geoapify.com/v2/places?categories=tourism.attraction,tourism.sights&filter=place:${placeID}&limit=20&apiKey=${apikey}`);
            setPlaces(touristPlaces.data.features);
          } catch (error) {
            console.error("Error fetching tourist places:", error);
          }
    }
    useEffect(()=>{showTourism();},[places]);

        return (
    <div className="container-xxl">
        <div className="container">
        <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                <h1 className="mb-5">Top Destinations at {place}</h1>
            </div>
            <div className="row g-3 justify-content-center">
                {places.length>0 ? (places.map((item,index)=>(
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                <h5>{item.properties.address_line1}</h5>
                                <p>{item.properties.address_line2}</p>
                            </div>
                        </div>
                   </div>
                ))):(
                    <p>Loading tourist places...</p>
                  )}
            </div>
        </div>
     </div>
  )
}

export default Destination
