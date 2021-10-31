import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
   const{user, logOut} = useAuth();
   // console.log(user);
    return (
        <div>
            <nav className="navbar  sticky-top navbar-expand-lg navbar-black bg-black " >
             <div className="container-fluid">
                 <p className='text-head'>TRAVO-TOURISUM.</p>
            <div className="collapse navbar-collapse">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                    <Link to='/home'>HOME</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/about'>ABOUT</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/specials'>SPECIALS</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/services'>SERVICES</Link>
                 </li>
                 <li className="nav-item">
                    {
                       user?.email?
                       <Link to='/booktour'>BOOKIG-TOUR</Link>: ''
                    }
                 </li>
                 <li className="nav-item">
                    <Link to='/blog'>BLOG</Link>
                 </li>
               </ul>
               <div className='row w-25 mx-auto'>
                  <div className ='col'>
                  <span className='text-white pe-2'>Loged in As: {user?.displayName}</span>          
                  </div>
                  <div className ='col'>
                  {
                  user?.email?
                  <button onClick = {logOut} className='btn btn-danger'>Log Out</button>:
                  <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
                   }
                  </div>
               </div>
            </div>
          </div>
         </nav>
        </div>
    );
};

export default Navbar;