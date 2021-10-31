import React from 'react';
import blog1 from '../../images/blog/blog01.jpg';
import blog2 from '../../images/blog/blog02.jpg';
import blog3 from '../../images/blog/blog03.jpg';

const Blog = () => {
    return (
<div className='container'>
<h1 className= 'text-center mt-5 pb-3 fw-bold '>OUR <span className ='text-warning'>BLOG</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
  <div className="col">
    <div className="card h-100">
      <img src={blog1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>Top Reviews for Travio</h5>
        <p className="card-text text-start">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. </p>
        <button className='button-reguler'>More..</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={blog2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>Last Minute Amazing</h5>
        <p className="card-text text-start">doloremque laudantium, totam rem aperiam, eaque ipsa quae ab . Nemo enim ipsam voluptatem quia dolore magna aliqua enim minim veniam quis voluptas sit aspernatur aut odit aut fugit.</p>
        <button className='button-reguler'>More..</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img src={blog3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>Explore the World for Travel</h5>
        <p className="card-text text-start ">Lorem ipsum dolor sit amet consectur adip icing sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation laboris nisi ut aliquip ex commodo consequat.</p>
        <button className='button-reguler'>More..</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Blog;