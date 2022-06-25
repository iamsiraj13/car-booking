import React from 'react';
import { Link } from 'react-router-dom';

const DefaultLayout = ({children}) => {
    return (
        <div className=''>
            <div className=" header bs1 py-3">
               <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h3>Logo</h3>
                </div>
               <ul className='d-flex justify-content-between'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
               </div>
            </div>
            <div className="content">
                {children}
            </div>
            
        </div>
    );
};

export default DefaultLayout;