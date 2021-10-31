
import React from 'react';
import './Speacials.css';
import img1 from '../../images/gallery/gallery01.jpg';
import img2 from '../../images/gallery/gallery02.jpg';
import img3 from '../../images/gallery/gallery03.jpg';
import img4 from '../../images/gallery/gallery04.jpg';
import img5 from '../../images/gallery/gallery05.jpg';
import img6 from '../../images/gallery/gallery06.jpg';

const Specials = () => {
    return (
        <div>
            <h1 className= 'text-center mt-5 fw-bold'>Why Travel with Tutive?</h1>
            <h4 className= 'text-center mt-5 fw-bold'><span className ='text-warning'>OUR </span>  SPECIALS</h4>

                {/* Gallary Photo Album*/}
                
                    <div className='row'>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='special-img' src={img1} alt="" />
                            <h3>98% of Our Travelers</h3>
                            <h4>Agency</h4>
                        </div>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='special-img' src={img2} alt="" />
                            <h3>100% Trusted Tour</h3>
                            <h4>are Happy</h4>
                        </div>
                        <div className  = 'col-md-4 pt-1 '>
                            <img className ='special-img' src={img3} alt="" />
                            <h3>2000+ Our Worldwide</h3>
                            <h4>Guide</h4>
                        </div>
                    </div>
                <div className= 'row'>   
                    <div className  = 'col-md-4 pt-1 '>
                        <img className ='special-img' src={img4} alt="" />
                        <h3>100% Trusted Tour</h3>
                            <h4>Agency</h4>
                    </div>
                    <div className  = 'col-md-4 pt-1 '>
                        <img className ='special-img' src={img5} alt="" />
                        <h3>12+ Years of Travel</h3>
                            <h4>Experience</h4>
                    </div>
                    <div className  = 'col-md-4 pt-1'>
                        <img className ='special-img' src={img6} alt="" />
                        <h3>98% of Our Travelers</h3>
                            <h4>are Happy</h4>
                    </div>
                </div>
            </div>
       
    );
};

export default Specials;




