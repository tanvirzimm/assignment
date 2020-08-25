import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">Site Name</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item manu">
                            <Link to='/' className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item manu">
                            <Link to='/' className="nav-link">SERVICES</Link>
                        </li>
                        <li className="nav-item manu">
                            <Link to='/' className="nav-link" >ABOUT</Link>
                        </li>
                        <li className="nav-item manu">
                            <Link to='/' className="nav-link">WORKS</Link>
                        </li>
                        <li className="nav-item manu">
                            <Link to='/' className="nav-link">CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link special"><button className="login">Login</button></Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Header;