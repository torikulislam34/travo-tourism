import React from 'react';
import './Footer.css'
import img1 from '../../images/gallery/gallery01.jpg';
import img2 from '../../images/gallery/gallery02.jpg';
import img3 from '../../images/gallery/gallery03.jpg';
import img4 from '../../images/gallery/gallery04.jpg';
const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="left-container text-start">  
                           <h3>TRAVO-TOURISM</h3>
                            <p>Travo tourism &&  Travel Agency.  </p>
                            <p><small> Travo-Tourism © . All rights reserved.</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <h2>Services</h2>
                            <ul className="footer-menu">
                                <li className="menu">Home</li>
                                <li className="menu">Service</li>
                                <li className="menu">About</li>
                                <li className="menu">gallerys</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className='footer-gal'>Gallery</h2>
                    <div className='row'>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='gallery-img' src={img1} alt="" />
                        </div>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='gallery-img' src={img2} alt="" />
                        </div>                        
                    </div> 
                    <div className='row'>
                        <div className  = 'col-md-4 pt-1 '>
                            <img className ='gallery-img' src={img3} alt="" />
                        </div>
                        <div className  = 'col-md-4 pt-1 '>
                            <img className ='gallery-img' src={img4} alt="" />
                        </div>
                    </div>                   
                    </div>
                    <div className="col-md-3">
                        <div className="contact-us">
                            <h2>Contact Us</h2>
                            <p><small>&& Book the better tour.</small></p>
                             <input className='form-control mt-5'  type="text" placeholder ='please enter your email' />
                             <h5 className= 'text-start text-warning'>Phone : +66 223 7900 24</h5>
                             <div className ='address text-start'>
                                 <p>Barishal, Jalokati, Bangladesh</p>
                                <p>812, Dhaka, Bangladesh</p>
                                <p>B6, Green Road</p>

                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;