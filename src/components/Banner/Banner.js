import React from 'react';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"    aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active carousel">
            <img src={banner1} className="d-block w-100 " alt="..."/>
             <div className="carousel-caption d-none d-md-block mb-5">
              <h3 className ='mb-5 fw-bold ' >Explore Your Travel – <span className ='text-black'>To Move</span> </h3>
              <p>Discover your next great adventure, become an explorer to get started!</p>
              <button className ='my-btn'>Move-To..</button>
            </div>
          </div>
         <div className="carousel-item">
           <img src={banner2} className="d-block w-100" alt="..."/>
           <div className="carousel-caption d-none d-md-block">
             <h2 className =' fst-italic '>Explore Your Travel</h2>
             <p>Discover your next great adventure, become an explorer to get started!</p>
             <h3 className ='mb-5 fw-bold  mb-5' style = {{fontSize:"56px", color:'hsl(14, 100%, 45%)'}}>MOVE NOW!</h3>
             <button className ='my-btn'>Move-To..</button>
           </div>
          </div>
         <div className="carousel-item">
           <img src={banner3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h1 className ='mb-5 fw-bold mb-5' >Explore Your Travel </h1>
            <h4>Discover your next great adventure, become an explorer to get started!</h4>
            <h3 className ='mb-5 fw-bold  mb-5' style = {{fontSize:"56px", color:'hsl(14, 100%, 45%)'}}>MOVE NOW!</h3>
            <button className ='my-btn '>Move-To..</button>
            
          </div>
       </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
      </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
    </div>
        </div>
    );
};

export default Banner;