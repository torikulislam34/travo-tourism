import React from 'react';
import './Booktour.css';
import { Link } from 'react-router-dom';

const Booktour = () => {
    return (
        <div>
           <nav className='mb-2 mt-3'>              
                <Link className ='item m-3 p-3' to='/myorder'>MY-ORDER</Link>
                <Link className ='item m-3 p-3' to='/manageOrder'>MANAGE-ORDER</Link>               
                <Link className ='item m-3 p-3' to='addItem'>ADD-ITEM</Link>
           </nav>
        </div>
    );
};

export default Booktour;