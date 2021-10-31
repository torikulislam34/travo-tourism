import './ServiceDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const [services, setServices] = useState()

    const{id} = useParams();
    
    useEffect(()=>{
        fetch('https://evil-mansion-50647.herokuapp.com/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])

    // console.log(services);
    const matchService = services?.find(service =>service?._id === id);

    return (
        <div className='row'>
            <div className="col-lg-8 col-md-6 col-12">
               <img src={matchService?.img} className="card-img-top detail-img"  alt="..."/> 
            </div>
            <div className="details col-lg-4 col-md-6 col-12">
               <h2 className="card-title text-primary">{matchService?.title}</h2>
               
               <h4> <span style={{color:'blue'}}>${matchService?.price}</span>/Person</h4>
               <p>5 days | <span>G  {matchService?.time} 7p</span></p>
               <p className="card-text"> <span className ='fw-bold text-primary'>Discription: </span>{matchService?.dis}</p>
              <Link to='/bookTour'>
                  <button className='button-reguler'>Book Tour</button>
              </Link>
             </div>
        </div>
    ); 
};

export default ServiceDetail;