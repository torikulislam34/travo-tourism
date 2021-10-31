import React from 'react';
import aboutImg  from '../../images/About/aboutImg.jpg';
import aboutImg1  from '../../images/About/aboutImg01.jpg';
import aboutImg2  from '../../images/About/aboutImg02.jpg';
import aboutImg3 from '../../images/About/aboutImg03.jpg';

import './About.css'

const About = () => {

    return (
        <div>
            <div className = "container mt-5 text-start">
            <h1 className= 'text-center m-4 fw-bold'>About<span className ='text-warning'> US</span> </h1>
            <div className = 'row travo-about'>
                <div className = 'col-md-6 col-12 about-left'>
                    <h2 className ='fst-italic' style ={{color:'hsl(14, 80%, 45%)'}}> TRAVO-ABOUT</h2>

                    <h4 className ='mt-4'>World Best Travel Agency Company Since</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    <div className="gallary-btn">
                        <button className='button-reguler'>FIND NOW</button>
                    </div>
                </div>
                <div className = 'col-md-6 col-12'>
                    <img className ='about-img' src={aboutImg} alt="" />
                </div>
            </div>
          </div>
          {/* about footer */}
          <div className ='container' >
          <div className ='row turi'>
             <div className =' col-4'>
                <img src={aboutImg1} alt="" />
            </div>
            <div className =' col-4'>
               <img src={aboutImg2} alt="" />
            </div>
            <div className =' col-4'>
                <img src={aboutImg3} alt="" />
            </div>
          </div>
          </div>
        </div>
    );
};

export default About;